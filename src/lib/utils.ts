import type { Localization, PathnamesType } from '@/i18n/routing'
import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const tw = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [{ shadow: ['soft', 'normal'] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return tw(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (error: any) => {
  if ('message' in error) return error.message
  return String(error)
}

export const getPageName = <
  T extends { link: string; name: Record<Localization, string>; items?: T[] },
>(
  links: T[],
  pathName: PathnamesType,
  locale: Localization
) => {
  const cleanPathName = pathName.split('?')[0]
  const filteredPathName = cleanPathName.replace(/^\/\w{2}\//, '/')

  const item = links.find((item) => filteredPathName === item.link)
  return item ? item.name[locale] : undefined
}

export const Sleep = (delay = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export async function fileToBase64(file: File): Promise<string> {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  return new Promise((resolve) => {
    reader.addEventListener('load', () => {
      resolve(String(reader.result))
    })
  })
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'usd',
  notation: 'compact',
  compactDisplay: 'short',
  maximumSignificantDigits: 4,
})

export const getCurrentPage = (pathname: string, depth = 2) => {
  return pathname.split('/').at(depth)
}
