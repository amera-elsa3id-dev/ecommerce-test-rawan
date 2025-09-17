import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
 
    // NextAuth uses different cookie names depending on HTTPS vs HTTP
    // - Local/HTTP: "next-auth.session-token"
    // - HTTPS/production: "__Secure-next-auth.session-token"
    const token =
      request.cookies.get("next-auth.session-token")?.value ||
      request.cookies.get("__Secure-next-auth.session-token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url))
    } else {
      return NextResponse.next();
    }
 
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/products" , "/" , "/categories" , "/brands" , "/cart" , "/wishlist"],
}