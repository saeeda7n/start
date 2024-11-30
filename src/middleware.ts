import { routing } from '@/i18n/routing'
import { createSupabaseServer } from '@/lib/supabase/server'
import createMiddleware from 'next-intl/middleware'
import { type NextRequest, NextResponse } from 'next/server'

const handleI18nRouting = createMiddleware(routing)

export async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request)
  const localeUrl = request.nextUrl.pathname.split('/')
  if (localeUrl.length < 1) {
    return
  }

  const supabase = await createSupabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const url = request.nextUrl

  if (!user && url.pathname.startsWith(`/${localeUrl[1]}/dashboard`)) {
    return NextResponse.redirect(new URL(`/${localeUrl[1]}/signin`, request.url))
  }

  // if (user && url.pathname.startsWith(`/${localeUrl[1]}/signin`)) {
  //   return NextResponse.redirect(new URL(`/${localeUrl[1]}/dashboard`, request.url))
  // }

  response.headers.set('x-current-path', request.nextUrl.pathname)
  return response
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(fa|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
