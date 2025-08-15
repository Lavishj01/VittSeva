import { NextRequest, NextResponse } from 'next/server';
import { 
  SUPPORTED_LANGUAGES, 
  detectLanguage, 
  getLanguageFromPath,
  isSupportedLanguage 
} from './lib/i18n';

// Paths that should be excluded from language redirects
const EXCLUDED_PATHS = [
  '/api',
  '/_next',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/companies',
  '/portal-logo',
  '/blogs.xlsx',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for excluded paths
  if (EXCLUDED_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if the path already has a language prefix
  const pathnameHasLanguage = Object.keys(SUPPORTED_LANGUAGES).some(
    lang => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  // If path already has language prefix, continue
  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  // Get user's country from headers (Cloudflare, Vercel, etc.)
  const country = request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('cf-ipcountry') ||
                  request.headers.get('x-forwarded-for-country') ||
                  request.headers.get('x-azure-clientip-country') ||
                  request.headers.get('x-ms-client-country') ||
                  request.headers.get('x-client-country') ||
                  request.headers.get('x-real-ip-country') ||
                  request.headers.get('x-real-ip') ||
                  request.headers.get('x-forwarded-for') ||
                  request.headers.get('x-client-ip');

  // Get user's preferred language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Determine the best language based on country and Accept-Language
  const detectedLanguage = detectLanguage(country, acceptLanguage);
  
  // Redirect to language-specific path
  const newUrl = new URL(`/${detectedLanguage}${pathname}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     * - blogs.xlsx (Excel file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|blogs.xlsx).*)',
  ],
}; 