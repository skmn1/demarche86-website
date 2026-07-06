export const locales = ['fr', 'en', 'ar', 'es', 'pt'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ar: 'العربية',
  es: 'Español',
  pt: 'Português',
}

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  ar: '🇲🇦',
  es: '🇪🇸',
  pt: '🇵🇹',
}
