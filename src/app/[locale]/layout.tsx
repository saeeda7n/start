import ToasterComponent from '@/components/common/ToasterComponent'
import NextIntlProvider from '@/components/providers/NextIntlProvider'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'
import { host } from '@/config'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

const english = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const roboto = Roboto({ variable: '--font-roboto', subsets: ['latin'], weight: ['900'] })

export const metadata: Metadata = {
  metadataBase: new URL(host + '/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'fa-IR': '/fa',
    },
  },
  title: 'Book Audit - Offset Your Business Taxes with Sustainable Actions',
  description:
    'Easyoffset helps businesses offset their taxes for carbon emissions by engaging in sustainable actions. It provides guidance on eco-friendly practices that contribute to reducing your carbon footprint while benefiting your business.',
  keywords: [
    'Easyoffset',
    'carbon emissions',
    'tax offset',
    'eco-friendly',
    'sustainable actions',
    'sustainability',
    'business improvement',
    'carbon footprint reduction',
  ],
}

type MainLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}
export default async function MainLayout({ children, params }: MainLayoutProps) {
  const { locale } = await params

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'} suppressHydrationWarning={true}>
      <body className={cn(english.className, roboto.variable)}>
        <Analytics />
        <NextIntlProvider>
          <ToasterComponent />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextIntlProvider>
      </body>
    </html>
  )
}
