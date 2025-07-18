import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/diary'];
const guestOnlyRoutes = ['/signin', '/signup', '/'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const refreshToken = request.cookies.get('refresh_token')?.value;

  const isAuthenticated = !!refreshToken;

  if (isAuthenticated && guestOnlyRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/diary', request.url));
  }

  if (!isAuthenticated && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/diary', '/signin', '/signup', '/'],
};
