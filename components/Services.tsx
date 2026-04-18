"use client"

import { FileEdit, FolderOpen, Monitor, Compass, PhoneCall, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('Services')

  const services = [
    {
      icon: FileEdit,
      title: t('service1Title'),
      description: t('service1Desc'),
    },
    {
      icon: FolderOpen,
      title: t('service2Title'),
      description: t('service2Desc'),
    },
    {
      icon: Monitor,
      title: t('service3Title'),
      description: t('service3Desc'),
    },
    {
      icon: Compass,
      title: t('service4Title'),
      description: t('service4Desc'),
    },
    {
      icon: PhoneCall,
      title: t('service5Title'),
      description: t('service5Desc'),
    },
    {
      icon: Mail,
      title: t('service6Title'),
      description: t('service6Desc'),
    },
  ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#fcf9f8] px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 md:w-2/3 lg:w-1/2">
          <h2 className="font-[var(--font-manrope)] text-3xl md:text-4xl font-extrabold text-[#1b1b1b] mb-4">
            {t('title')}
          </h2>
          <p className="text-[#554243] text-lg">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl flex flex-col gap-4 group hover:bg-[#f6f3f2] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ffdadb] flex items-center justify-center text-[#6c1725] mb-2">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-[var(--font-manrope)] text-xl font-bold text-[#1b1b1b]">
                {service.title}
              </h3>
              <p className="text-[#554243] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
