import { type Localization } from '@/i18n/routing'
import { createSupabaseServer } from '@/lib/supabase/server'
import { getLocale } from 'next-intl/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin
  const locale = (await getLocale()) as Localization

  if (code) {
    const supabase = await createSupabaseServer()
    await supabase.auth.exchangeCodeForSession(code)
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/${locale}/dashboard`)
}
