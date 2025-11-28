import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if user is trying to access dashboard
  if (pathname.startsWith("/dashboard")) {
    // Get auth token from cookies or check localStorage flag
    const authToken = request.cookies.get("authToken")?.value;

    // If no auth token, redirect to login
    if (!authToken) {
      const loginUrl = new URL("/auth/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
