import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = getSupabaseServerClient();
  const isDbConfigured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  return NextResponse.json(
    {
      status: "healthy",
      service: "DORA Global Research Application Backend",
      timestamp: new Date().toISOString(),
      database: {
        configured: isDbConfigured,
        provider: "Supabase PostgreSQL",
      },
    },
    { status: 200 }
  );
}
