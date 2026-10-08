import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

/**
 * POST /api/admin/auth/login
 * Authenticates an admin via Supabase Auth and sets a session cookie.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { success: false, error: "Server Configuration Error: Supabase credentials are not set." },
        { status: 500 }
      );
    }

    // Authenticate with Supabase Auth
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email or password. Please try again.",
        },
        { status: 401 }
      );
    }

    // Store the Supabase access token as the session cookie value
    const response = NextResponse.json({
      success: true,
      message: "Authentication successful.",
      user: {
        id: data.user?.id,
        email: data.user?.email,
      },
    });

    response.cookies.set(
      "dora_admin_session",
      data.session.access_token,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 8, // 8 hours
        path: "/",
      }
    );

    return response;
  } catch (err) {
    console.error("[Admin Auth Error]:", err);
    return NextResponse.json(
      { success: false, error: "An internal error occurred." },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/auth/login
 * Logs out by clearing the session cookie.
 */
export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out." });
  response.cookies.set("dora_admin_session", "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });
  return response;
}
