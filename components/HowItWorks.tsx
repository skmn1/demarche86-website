"use client"

import { useTranslations } from 'next-intl'

export default function HowItWorks() {
  const t = useTranslations('HowItWorks')

  const steps = [
    { number: '01', title: t('step1Title'), description: t('step1Desc') },
    { number: '02', title: t('step2Title'), description: t('step2Desc') },
    { number: '03', title: t('step3Title'), description: t('step3Desc') },
  ]

  return (
    <section id="comment-ca-marche" className="py-14 sm:py-20 lg:py-28 bg-[var(--folder)] px-5 sm:px-6 lg:px-20 text-[var(--on-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16 md:mb-20 max-w-2xl">
          <span className="ref-label text-[10px] sm:text-[11px] text-[var(--marker)]">La procédure, étape par étape</span>
          <h2 className="font-[var(--font-headline)] text-2xl sm:text-3xl md:text-4xl font-medium mt-2 mb-3 sm:mb-4">{t('title')}</h2>
          <p className="text-[var(--on-primary)]/75 text-base sm:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15 rounded-sm overflow-hidden">
          {steps.map((step) => (
            <div key={step.number} className="bg-[var(--folder)] p-6 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-5">
              <span className="font-[var(--font-headline)] text-4xl sm:text-5xl font-light text-[var(--marker)]">
                {step.number}
              </span>
              <h3 className="font-[var(--font-headline)] text-lg sm:text-xl font-medium">{step.title}</h3>
              <p className="text-[var(--on-primary)]/75 leading-relaxed text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
