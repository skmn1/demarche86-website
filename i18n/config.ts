export const locales = ['fr', 'ar', 'es', 'pt'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  ar: 'العربية',
  es: 'Español',
  pt: 'Português',
}

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  ar: '🇲🇦',
  es: '🇪🇸',
  pt: '🇵🇹',
}
