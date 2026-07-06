"use client"

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('Contact')

  const contactInfo = [
    { icon: MapPin, title: t('address'), content: '31 avenue Robert Schuman', extra: '86000 Poitiers', href: null },
    { icon: Phone, title: t('phone'), content: '06 62 37 18 18', extra: null, href: 'tel:0662371818' },
    { icon: Mail, title: t('email'), content: 'laila.rezzougui@demarches86.fr', extra: null, href: 'mailto:laila.rezzougui@demarches86.fr' },
    { icon: Clock, title: t('hours'), content: t('hoursValue'), extra: t('hoursExtra'), href: null },
  ]

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-[var(--paper-lowest)] px-5 sm:px-6 lg:px-20 border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14 md:mb-16 md:w-2/3 lg:w-1/2">
          <span className="ref-label text-[10px] sm:text-[11px] text-[var(--stamp)]">Prendre contact</span>
          <h2 className="font-[var(--font-headline)] text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--ink)] mt-2 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          <div className="flex flex-col gap-8 sm:gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-8 border-t border-[var(--line)] pt-6 sm:pt-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[var(--folder)]">
                    <item.icon className="w-4 h-4" />
                    <h3 className="font-semibold text-[var(--ink)] text-[15px]">{item.title}</h3>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-[var(--stamp)] hover:text-[var(--stamp-dark)] font-medium transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-[var(--ink-soft)] text-[15px]">
                      {item.content}
                      {item.extra && <><br />{item.extra}</>}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <a
              href="tel:0662371818"
              className="inline-flex items-center justify-center gap-2 bg-[var(--stamp)] text-white font-semibold text-[15px] sm:text-base px-6 sm:px-7 py-3.5 rounded-md hover:bg-[var(--stamp-dark)] active:scale-[0.98] transition-all w-full sm:w-fit"
            >
              {t('cta')}
            </a>
          </div>

          <div className="h-[280px] sm:h-[380px] lg:h-auto rounded-sm overflow-hidden border border-[var(--line)] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.5!2d0.3446!3d46.5802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fdbe33d0d54bc7%3A0x9e9c5e2a1e3b5f6a!2s31%20Avenue%20Robert%20Schuman%2C%2086000%20Poitiers%2C%20France!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation"
              className="grayscale-[0.3] sepia-[0.15]"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-[var(--paper-lowest)]/95 border border-[var(--line)] px-6 py-4 rounded-sm flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--stamp)]" />
                <span className="font-medium text-[var(--ink)] text-sm">{t('mapLabel')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
