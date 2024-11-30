'use server'

import { type Localization, redirect } from '@/i18n/routing'
import { createSupabaseServer } from '@/lib/supabase/server'
import { getLocale } from 'next-intl/server'

export const signOutAction = async () => {
  const supabase = await createSupabaseServer()
  await supabase.auth.signOut()

  const locale = (await getLocale()) as Localization
  return redirect({ href: '/signin', locale })
}
