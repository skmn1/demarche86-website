"use client"

import { CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Pricing() {
  const t = useTranslations('Pricing')

  const pricingFeatures = [
    {
      title: t('feature1Title'),
      description: t('feature1Desc'),
    },
    {
      title: t('feature2Title'),
      description: t('feature2Desc'),
    },
    {
      title: t('feature3Title'),
      description: t('feature3Desc'),
    },
    {
      title: t('feature4Title'),
      description: t('feature4Desc'),
    },
  ]

  return (
    <section id="tarifs" className="py-24 lg:py-32 bg-[#fcf9f8] px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-[var(--font-manrope)] text-3xl md:text-4xl font-extrabold text-[#1b1b1b] mb-4">
            {t('title')}
          </h2>
          <p className="text-[#554243] text-lg">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="bg-[#f6f3f2] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-[#ffdadb] text-[#6c1725] px-4 py-2 rounded-full font-bold w-fit">
              {t('badge')}
            </div>
            <h3 className="font-[var(--font-manrope)] text-4xl lg:text-5xl font-extrabold text-[#6c1725]">
              {t('price')}
            </h3>
            <p className="text-[#554243] text-lg">{t('perUnit')}</p>
            <p className="text-[#554243] mt-4">
              {t('description')}
            </p>
            <a
              href="mailto:laila.rezzougui@demarches86.fr"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#6c1725] text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-[#8b2e3a] transition-colors w-fit"
            >
              {t('cta')}
            </a>
          </div>
          
          <div className="md:w-1/2 w-full bg-white p-8 rounded-2xl">
            <ul className="flex flex-col gap-6">
              {pricingFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#6c1725] mt-1 flex-shrink-0" style={{ fill: '#ffdadb', stroke: '#6c1725' }} />
                  <div>
                    <h4 className="font-[var(--font-manrope)] font-bold text-[#1b1b1b]">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#554243]">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
