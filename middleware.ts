// middleware.ts
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const url = request.nextUrl.pathname;

  if (url === '/login' || url === '/register') {
    if (token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/chats/:path*',
    '/users/:path*',
    '/notifications/:path*',
    '/search/:path*',
    '/create-post/:path*',
    '/threads/:path*',
    '/login',
    '/register',
  ],
};
