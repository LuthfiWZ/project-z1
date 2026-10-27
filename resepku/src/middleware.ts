import { NextRequest, NextResponse } from "next/server";

import {
  ROLE_COOKIE,
  SESSION_COOKIE,
} from "@/lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const role = request.cookies.get(ROLE_COOKIE)?.value;

  const isAdminRoute = pathname.startsWith("/admin");
  const isProtectedRoute =
    isAdminRoute ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/rencana-makan") ||
    pathname.startsWith("/belanja") ||
    pathname.startsWith("/favorit") ||
    pathname.startsWith("/profil") ||
    pathname.startsWith("/resep/tambah") ||
    /^\/resep\/[^/]+\/edit$/.test(pathname) ||
    /^\/resep\/[^/]+$/.test(pathname);

  if (isProtectedRoute && !session) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("next", pathname);

    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    (pathname === "/login" || pathname === "/register") &&
    session
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/resep/:path*",
    "/rencana-makan/:path*",
    "/belanja/:path*",
    "/favorit/:path*",
    "/profil/:path*",
    "/admin/:path*",
    "/login",
    "/register",
  ],
};
