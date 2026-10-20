import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "fr"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  const segment = pathname.split("/")[1];
  if (!locales.includes(segment)) {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next|api|favicon.ico|robots.txt).*)"],
};
