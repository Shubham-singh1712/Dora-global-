import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { EnquiryStatus } from "@/lib/supabase/types";
import { getMockEnquiriesStore, updateMockEnquiryStatus } from "@/lib/mockStore";

export const dynamic = "force-dynamic";

/**
 * GET /api/admin/enquiries
 * Returns paginated enquiries with optional filters:
 *   ?status=new|contacted|in_progress|closed
 *   ?service=Translation|...
 *   ?search=text
 *   ?page=1&pageSize=12
 *
 * Security: requires dora_admin_session cookie (set by /api/admin/auth).
 * On Supabase: queries with service-role key which bypasses RLS for admin reads.
 */
export async function GET(request: NextRequest) {
  const session = request.cookies.get("dora_admin_session");
  if (!session?.value) {
    return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as EnquiryStatus | null;
  const service = searchParams.get("service");
  const search = searchParams.get("search");
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const pageSize = Math.min(50, parseInt(searchParams.get("pageSize") || "12", 10));
  const offset = (page - 1) * pageSize;

  const supabase = getSupabaseServerClient(true); // service-role key

  if (!supabase) {
    if (process.env.DEMO_MODE === "true") {
      const all = getMockEnquiriesStore();
      let filtered = [...all];
      if (status) filtered = filtered.filter((e) => e.status === status);
      if (service) filtered = filtered.filter((e) => e.service === service);
      if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(
          (e) =>
            e.name.toLowerCase().includes(q) ||
            e.email.toLowerCase().includes(q) ||
            (e.company || "").toLowerCase().includes(q)
        );
      }
      const totalCount = filtered.length;
      const paginated = filtered.slice(offset, offset + pageSize);
      return NextResponse.json({
        success: true,
        data: paginated,
        total: totalCount,
        page,
        pageSize,
        stats: computeStats(all),
      });
    }
    return NextResponse.json({ success: false, error: "Server Configuration Error: Database not connected." }, { status: 500 });
  }

  try {
    // ── Supabase query ───────────────────────────────────────────────────────
    let query = supabase
      .from("enquiries")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (status) query = query.eq("status", status);
    if (service) query = query.eq("service", service);
    if (search) {
      query = query.or(
        `name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%`
      );
    }

    const { data, error, count } = await query;

    if (error) {
      console.error("[Admin Enquiries GET]:", error.message);
      return NextResponse.json(
        { success: false, error: "Failed to fetch enquiries." },
        { status: 500 }
      );
    }

    // Fetch aggregate stats across ALL rows (no filters)
    const { data: allRows } = await supabase
      .from("enquiries")
      .select("status");

    return NextResponse.json({
      success: true,
      data: data || [],
      total: count || 0,
      page,
      pageSize,
      stats: computeStats(allRows || []),
    });
  } catch (err) {
    console.error("[Admin Enquiries Error]:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/admin/enquiries
 * Updates the status of a single enquiry.
 * Body: { id: string, status: EnquiryStatus }
 */
export async function PATCH(request: NextRequest) {
  const session = request.cookies.get("dora_admin_session");
  if (!session?.value) {
    return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
  }

  let body: { id?: string; status?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON." }, { status: 400 });
  }

  const { id, status } = body;
  const validStatuses: EnquiryStatus[] = ["new", "contacted", "in_progress", "closed"];

  if (!id || !status || !validStatuses.includes(status as EnquiryStatus)) {
    return NextResponse.json(
      { success: false, error: "A valid enquiry ID and status are required." },
      { status: 400 }
    );
  }

  const typedStatus = status as EnquiryStatus;
  const supabase = getSupabaseServerClient(true);

  if (!supabase) {
    if (process.env.DEMO_MODE === "true") {
      const updated = updateMockEnquiryStatus(id, typedStatus);
      return NextResponse.json({
        success: true,
        message: "Status updated (demo mode).",
        data: updated || { id, status: typedStatus, updated_at: new Date().toISOString() },
      });
    }
    return NextResponse.json({ success: false, error: "Server Configuration Error: Database not connected." }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("enquiries")
    .update({ status: typedStatus, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select("id, status, updated_at")
    .single();

  if (error) {
    console.error("[Admin Enquiry PATCH]:", error.message);
    return NextResponse.json(
      { success: false, error: "Failed to update enquiry status." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Enquiry status updated successfully.",
    data,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function computeStats(rows: { status?: string | null }[]) {
  const stats = { total: rows.length, new: 0, contacted: 0, in_progress: 0, closed: 0 };
  for (const r of rows) {
    const s = r.status as keyof typeof stats | undefined;
    if (s && s in stats) (stats[s] as number)++;
  }
  return stats;
}
