"use client"

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navbar')

  return (
    <footer className="bg-[#8B2E3A] text-[#f9ecee] w-full mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 py-16 gap-12 max-w-full mx-auto">
        <div className="flex flex-col max-w-sm">
          <span className="text-lg font-bold text-white mb-4 block font-[var(--font-manrope)]">
            Laïla Rezzougui
          </span>
          <p className="text-sm leading-relaxed text-[#f9ecee]/80 mb-6">
            {t('description')}
          </p>
          <p className="text-xs leading-relaxed text-[#f9ecee]/60">
            {t('copyright')}
            <br />
            {t('siret')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white mb-2">{t('navigation')}</h4>
            <a href="#services" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              {tNav('services')}
            </a>
            <a href="#tarifs" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              {tNav('pricing')}
            </a>
            <a href="#contact" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              {tNav('contact')}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white mb-2">{t('legal')}</h4>
            <a href="#" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              {t('legalNotice')}
            </a>
            <a href="#" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              {t('privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
