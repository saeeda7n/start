import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('NotFound')

  return (
    <div className="flex h-dvh w-full items-center justify-center text-center font-mono">
      {t('title')}
    </div>
  )
}
