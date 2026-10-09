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
      const isProduction = process.env.NODE_ENV === "production";
      const isExplicitDemo = process.env.DEMO_MODE === "true";

      if (isProduction && !isExplicitDemo) {
        console.error(
          "[DORA Backend Error]: Supabase database credentials are not configured in production environment."
        );
        return NextResponse.json(
          {
            success: false,
            error:
              "Database service is currently unavailable. Please verify server environment configuration (NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY).",
          },
          { status: 503 }
        );
      }

      // In local development or explicit DEMO_MODE, stage in memory
      console.warn(
        "[DORA Backend] Supabase credentials not detected; staging enquiry in memory store (Demo/Dev mode active)."
      );
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

      return NextResponse.json(
        {
          success: true,
          message: "Your research enquiry has been registered (Development/Demo mode).",
          data: stagedEnquiry,
        },
        { status: 201 }
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

      return NextResponse.json(
        {
          success: false,
          error: "Unable to record enquiry at this time. Please retry shortly.",
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
