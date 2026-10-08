import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy: Protect all /admin routes except /admin/login.
 * Uses a simple HttpOnly session cookie set at login.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow /admin/login through without a session check
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // For all other /admin/* routes, verify session cookie
  if (pathname.startsWith("/admin")) {
    const sessionCookie = request.cookies.get("dora_admin_session");

    if (!sessionCookie?.value) {
      // Redirect unauthenticated users to the login page
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
