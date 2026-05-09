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
  title: 'Laïla Rezzougui – Administrative Assistance in Poitiers',
  description:
    'I help you fill out your forms, understand your mail, and assert your rights. Simple, fast, and jargon-free. Services from 5€. Based in Poitiers.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://demarches86.fr/en',
    siteName: 'Demarches 86',
    title: 'Laïla Rezzougui – Administrative Assistance in Poitiers',
    description:
      'I help you fill out your forms, understand your mail, and assert your rights. Simple, fast, jargon-free. From 5€.',
    images: [
      {
        url: 'https://demarches86.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Laïla Rezzougui – Administrative Assistance in Poitiers',
      },
    ],
    locale: 'en_GB',
    alternateLocale: ['fr_FR', 'ar_MA', 'es_ES', 'pt_PT'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laïla Rezzougui – Administrative Assistance in Poitiers',
    description:
      'I help you fill out your forms, understand your mail, and assert your rights. From 5€.',
    images: ['https://demarches86.fr/og-image.jpg'],
  },
  other: {
    'og:site_name': 'Demarches 86',
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
