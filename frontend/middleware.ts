import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { userAgent } from 'next/server'

export function middleware(request: NextRequest) {
  // 1. Parse the User-Agent
  const { device } = userAgent(request);
  
  // 2. Identify the device type
  // The 'device.type' can be 'mobile', 'tablet', 'console', 'smarttv', or undefined (usually desktop)
  const isMobile = device.type === 'mobile';
  const isTablet = device.type === 'tablet';

  // 3. Define the restricted page path to avoid infinite loops
  const restrictedPage = '/mobile-restricted';

  // 4. Define paths that are exempt from mobile restriction
  const mobileAllowedPaths = ['/director'];
  const isAllowedPath = mobileAllowedPaths.some(path => 
    request.nextUrl.pathname === path || request.nextUrl.pathname.startsWith(`${path}/`)
  );

  // 5. If on an allowed path, let everyone through
  if (isAllowedPath) {
    return NextResponse.next();
  }

  // 6. Check if the user is already on the restricted page
  // If we don't do this, we get a "Too many redirects" error
  if (request.nextUrl.pathname === restrictedPage) {
    // If they are on mobile/tablet, let them stay on the warning page
    if (isMobile || isTablet) {
      return NextResponse.next();
    }
    // If a Desktop user somehow tries to visit the warning page, redirect them home
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 7. The Main Logic: If mobile/tablet, redirect to restricted page
  if (isMobile || isTablet) {
    return NextResponse.redirect(new URL(restrictedPage, request.url));
  }

  // 8. Allow the request to continue for desktop users
  return NextResponse.next();
}

// 7. Configure which paths this middleware affects
export const config = {
  /*
   * Match all request paths except for:
   * 1. /api routes (if you want your API to remain accessible to mobile apps)
   * 2. /_next (static files)
   * 3. /static (static files)
   * 4. favicon.ico, images, etc.
   */
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

