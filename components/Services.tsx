"use client"

import { FileEdit, FolderOpen, Monitor, Compass, PhoneCall, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('Services')

  const services = [
    { code: '01', icon: FileEdit, title: t('service1Title'), description: t('service1Desc') },
    { code: '02', icon: FolderOpen, title: t('service2Title'), description: t('service2Desc') },
    { code: '03', icon: Monitor, title: t('service3Title'), description: t('service3Desc') },
    { code: '04', icon: Compass, title: t('service4Title'), description: t('service4Desc') },
    { code: '05', icon: PhoneCall, title: t('service5Title'), description: t('service5Desc') },
    { code: '06', icon: Mail, title: t('service6Title'), description: t('service6Desc') },
  ]

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-28 bg-[var(--paper)] px-5 sm:px-6 lg:px-20 border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14 md:mb-16 md:w-2/3 lg:w-1/2">
          <span className="ref-label text-[10px] sm:text-[11px] text-[var(--stamp)]">Bordereau de services</span>
          <h2 className="font-[var(--font-headline)] text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--ink)] mt-2 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--line)]">
          {services.map((service) => (
            <div
              key={service.code}
              className="p-6 sm:p-8 flex flex-col gap-3.5 sm:gap-4 border-r border-b border-[var(--line)] hover:bg-[var(--surface-container-low)] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full stamp-ring flex items-center justify-center text-[var(--stamp)]">
                  <service.icon className="w-5 h-5" />
                </div>
                <span className="ref-label text-[10px] sm:text-[11px] text-[var(--outline)]">{service.code}</span>
              </div>
              <h3 className="font-[var(--font-headline)] text-lg sm:text-xl font-medium text-[var(--ink)]">
                {service.title}
              </h3>
              <p className="text-[var(--ink-soft)] leading-relaxed text-sm sm:text-[15px]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
