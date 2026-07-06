"use client"

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navbar')

  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)] w-full">
      <div className="flex flex-col md:flex-row justify-between items-start px-5 sm:px-6 md:px-20 py-12 sm:py-16 gap-10 sm:gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col max-w-sm">
          <span className="font-[var(--font-headline)] text-lg font-medium text-white mb-4 block">
            Laïla Rezzougui
          </span>
          <p className="text-sm leading-relaxed text-[var(--paper)]/70 mb-6">{t('description')}</p>
          <p className="ref-label text-[11px] leading-relaxed text-[var(--paper)]/45">
            {t('copyright')}
            <br />
            {t('siret')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 md:gap-24 w-full sm:w-auto">
          <div className="flex flex-col gap-3">
            <h4 className="ref-label text-[11px] text-[var(--marker)] mb-1">{t('navigation')}</h4>
            <a href="#services" className="text-[var(--paper)]/70 hover:text-white transition-colors text-sm">{tNav('services')}</a>
            <a href="#tarifs" className="text-[var(--paper)]/70 hover:text-white transition-colors text-sm">{tNav('pricing')}</a>
            <a href="#contact" className="text-[var(--paper)]/70 hover:text-white transition-colors text-sm">{tNav('contact')}</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="ref-label text-[11px] text-[var(--marker)] mb-1">{t('legal')}</h4>
            <a href="#" className="text-[var(--paper)]/70 hover:text-white transition-colors text-sm">{t('legalNotice')}</a>
            <a href="#" className="text-[var(--paper)]/70 hover:text-white transition-colors text-sm">{t('privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
