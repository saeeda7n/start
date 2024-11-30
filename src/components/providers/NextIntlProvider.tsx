import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

interface NextIntlProviderProps {
  children: React.ReactNode
}

export const NextIntlProvider = async ({ children }: NextIntlProviderProps) => {
  const messages = await getMessages()

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}

export default NextIntlProvider
