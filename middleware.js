import { NextRequest, NextResponse } from 'next/server'

// List of all supported locales
const locales = ['en', 'fr', 'tr']

export function middleware(request) {
  // Check if the pathname starts with a locale
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    // Get the preferred locale from cookie or default to 'en'
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en'
    
    // Redirect to the locale-specific path
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}