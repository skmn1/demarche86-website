import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Laïla Rezzougui — Assistance administrative à Poitiers',
  description: 'Je vous aide à remplir vos formulaires, comprendre vos courriers et faire valoir vos droits. Sans jargon, à partir de 5 €.',
  openGraph: {
    type: 'website',
    url: 'https://demarches86.fr',
    siteName: 'Démarches 86',
    title: 'Laïla Rezzougui — Assistance administrative à Poitiers',
    description: 'Je vous aide à remplir vos formulaires, comprendre vos courriers et faire valoir vos droits. Sans jargon, à partir de 5 €.',
    locale: 'fr_FR',
    alternateLocale: ['en_GB', 'ar_MA', 'es_ES', 'pt_PT'],
    images: [{ url: 'https://demarches86.fr/og-image.jpg', width: 1200, height: 630, alt: 'Laïla Rezzougui — Assistance administrative' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laïla Rezzougui — Assistance administrative à Poitiers',
    description: 'Je vous aide à remplir vos formulaires et faire valoir vos droits. À partir de 5 €.',
    images: ['https://demarches86.fr/og-image.jpg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B2E3A',
  width: 'device-width',
  initialScale: 1,
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()
  const isRTL = locale === 'ar'

  return (
    <html 
      lang={locale} 
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${manrope.variable} bg-[#fcf9f8]`}
    >
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
