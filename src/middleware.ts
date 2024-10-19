import { NextResponse } from "next/server";
import checkAuth from "@/actions/checkAuth";

export async function middleware(request: Request) {
  const { isAuthenticated } = await checkAuth();

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sell"],
};
