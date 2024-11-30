import type { Localization } from '@/i18n/routing'
import { redirect } from '@/i18n/routing'
import { getLocale } from 'next-intl/server'

export default async function Home() {
  const locale = (await getLocale()) as Localization

  redirect({ href: '/signin', locale })
}
