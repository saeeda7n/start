import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'fa'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/dashboard': '/dashboard',
    '/dashboard/tax-and-report': '/dashboard/tax-and-report',
    '/dashboard/tax-and-report/overview': '/dashboard/tax-and-report/overview',
    '/dashboard/tax-and-report/financial': '/dashboard/tax-and-report/financial',
    '/dashboard/health-score': '/dashboard/health-score',
    '/dashboard/documents': '/dashboard/documents',
    '/dashboard/news': '/dashboard/news',
    '/dashboard/news/:id/:slug': '/dashboard/news/:id/:slug',
    '/dashboard/business-profile': '/dashboard/business-profile',
    '/dashboard/subscription': '/dashboard/subscription',
    '/dashboard/test': '/dashboard/test',
    '/signin': '/signin',
    '/signup': '/signup',
    '/intro': '/intro',
    '/forget-password': '/forget-password',
    '/complete-registration': '/complete-registration',
  },
})

export type PathnamesType = keyof typeof routing.pathnames
export type Localization = (typeof routing.locales)[number]

export const { getPathname, redirect, usePathname, Link, useRouter } = createNavigation(routing)
