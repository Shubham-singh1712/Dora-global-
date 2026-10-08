import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validations/enquiry";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { EnquiryInsert } from "@/lib/supabase/types";
import { addMockEnquiry } from "@/lib/mockStore";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    // 1. Safely parse JSON body
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON payload in request body.",
        },
        { status: 400 }
      );
    }

    // 2. Validate and sanitize using Zod
    const validationResult = enquirySchema.safeParse(rawBody);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please correct the highlighted fields.",
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const sanitizedData = validationResult.data;

    // 3. Connect to Supabase
    const supabase = getSupabaseServerClient();

    // Check if Supabase credentials are configured
    if (!supabase) {
      if (process.env.DEMO_MODE === "true") {
        const stagedEnquiry = addMockEnquiry({
          name: sanitizedData.name,
          company: sanitizedData.company || null,
          email: sanitizedData.email,
          phone: sanitizedData.phone || null,
          service: sanitizedData.service,
          industry: sanitizedData.industry || null,
          project_type: sanitizedData.project_type || null,
          message: sanitizedData.message,
          source: sanitizedData.source || "website",
        });

        console.warn(
          "[DORA Backend] DEMO_MODE is true. Staged enquiry payload in demo store:",
          { id: stagedEnquiry.id, email: stagedEnquiry.email, service: stagedEnquiry.service }
        );

        return NextResponse.json(
          {
            success: true,
            message:
              "Enquiry validated and recorded successfully (demo persistence active).",
            data: stagedEnquiry,
          },
          { status: 201 }
        );
      }
      return NextResponse.json(
        { success: false, error: "Server Configuration Error: Database not connected." },
        { status: 500 }
      );
    }

    // 4. Insert into Supabase 'enquiries' table
    const insertPayload: EnquiryInsert = {
      name: sanitizedData.name,
      company: sanitizedData.company,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      service: sanitizedData.service,
      industry: sanitizedData.industry,
      project_type: sanitizedData.project_type,
      message: sanitizedData.message,
      source: sanitizedData.source || "website",
      status: "new",
    };

    const { data: insertedData, error: dbError } = await supabase
      .from("enquiries")
      .insert(insertPayload as any)
      .select("id, created_at, status")
      .single();

    if (dbError) {
      // Log sanitized database error on server side only
      console.error("[DORA Backend DB Error]:", dbError.message);

      // Never expose database schema or internal credentials to client
      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to record enquiry at this time. Please retry shortly or contact inquiries@doraresearch.com.",
        },
        { status: 500 }
      );
    }

    // 5. Return success JSON
    return NextResponse.json(
      {
        success: true,
        message: "Your project enquiry has been successfully registered.",
        data: {
          id: insertedData?.id,
          created_at: insertedData?.created_at,
          status: insertedData?.status || "new",
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    // Unexpected server exception
    console.error("[DORA Backend Internal Error]:", error);

    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing the request.",
      },
      { status: 500 }
    );
  }
}
