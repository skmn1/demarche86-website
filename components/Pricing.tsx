"use client"

import { useTranslations } from 'next-intl'

export default function Pricing() {
  const t = useTranslations('Pricing')

  const pricingFeatures = [
    { title: t('feature1Title'), description: t('feature1Desc') },
    { title: t('feature2Title'), description: t('feature2Desc') },
    { title: t('feature3Title'), description: t('feature3Desc') },
    { title: t('feature4Title'), description: t('feature4Desc') },
  ]

  return (
    <section id="tarifs" className="py-14 sm:py-20 lg:py-28 bg-[var(--paper)] px-5 sm:px-6 lg:px-20 border-t border-[var(--line)]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 sm:mb-14 text-center">
          <span className="ref-label text-[10px] sm:text-[11px] text-[var(--stamp)]">Devis type</span>
          <h2 className="font-[var(--font-headline)] text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--ink)] mt-2 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg">{t('subtitle')}</p>
        </div>

        {/* Receipt / quote slip */}
        <div className="paper-card rounded-sm shadow-[0_20px_50px_-20px_rgba(33,31,26,0.25)] max-w-2xl mx-auto">
          <div className="flex items-center justify-between px-5 sm:px-8 py-5 sm:py-6 gap-3">
            <div>
              <span className="ref-label text-[11px] text-[var(--ink-soft)]">{t('badge')}</span>
              <p className="font-[var(--font-headline)] text-3xl sm:text-4xl font-medium text-[var(--stamp)] mt-1">
                {t('price')}
              </p>
              <span className="text-sm text-[var(--ink-soft)]">{t('perUnit')}</span>
            </div>
            <span className="stamp-ring rounded-full w-16 h-16 flex-shrink-0 items-center justify-center text-[var(--stamp)] text-[10px] font-semibold rotate-[-10deg] hidden sm:flex text-center leading-tight">
              SANS<br />SURPRISE
            </span>
          </div>

          <div className="perforated" />

          <ul className="px-5 sm:px-8 py-5 sm:py-6 flex flex-col divide-y divide-[var(--line)]">
            {pricingFeatures.map((feature, index) => (
              <li key={index} className="flex items-baseline justify-between gap-3 sm:gap-4 py-3.5">
                <div>
                  <h4 className="font-medium text-[var(--ink)]">{feature.title}</h4>
                  <p className="text-sm text-[var(--ink-soft)]">{feature.description}</p>
                </div>
                <span className="ref-label text-xs text-[var(--folder-light)] whitespace-nowrap">inclus</span>
              </li>
            ))}
          </ul>

          <div className="perforated" />

          <div className="px-5 sm:px-8 py-5 sm:py-6 flex flex-col gap-4">
            <p className="text-[var(--ink-soft)] text-sm leading-relaxed">{t('description')}</p>
            <a
              href="mailto:laila.rezzougui@demarches86.fr"
              className="inline-flex items-center justify-center gap-2 bg-[var(--folder)] text-[var(--on-primary)] font-semibold text-[15px] sm:text-base px-6 sm:px-7 py-3.5 rounded-md hover:bg-[var(--folder-light)] active:scale-[0.98] transition-all w-full sm:w-fit"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
