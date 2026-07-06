"use client"

import Image from 'next/image'
import { Phone, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <section className="relative overflow-hidden bg-[var(--paper)]">
      {/* faint ledger lines, evoking ruled admin paper */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent, transparent 35px, var(--line) 35px, var(--line) 36px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-24 lg:pb-28 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 sm:gap-12 lg:gap-12 items-center">
        <div className="flex flex-col items-start z-10 order-2 lg:order-1">
          <div className="ref-label inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-[var(--folder)] border border-[var(--folder)]/40 px-3 py-1 rounded-full mb-5 sm:mb-7">
            Dossier N° 2026 — {t('badge')}
          </div>

          <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-medium leading-[1.1] tracking-tight mb-4 sm:mb-6 text-[var(--ink)] text-balance">
            {t('title')}
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-soft)] mb-7 sm:mb-9 leading-relaxed max-w-xl">
            {t('description')}
          </p>

          <div className="flex flex-col gap-3 w-full sm:flex-row sm:gap-3.5 sm:w-auto mb-9 sm:mb-11">
            <a
              href="tel:0662371818"
              className="inline-flex items-center justify-center gap-2 bg-[var(--stamp)] text-white font-semibold text-[15px] sm:text-base px-6 sm:px-7 py-3.5 rounded-md hover:bg-[var(--stamp-dark)] active:scale-[0.98] transition-all w-full sm:w-auto"
            >
              <Phone className="w-4.5 h-4.5 flex-shrink-0" style={{ fill: 'currentColor' }} />
              <span className="truncate">{t('callNow')} — 06 62 37 18 18</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-[var(--folder)] text-[var(--folder)] font-semibold text-[15px] sm:text-base px-6 sm:px-7 py-3.5 rounded-md hover:bg-[var(--folder)] hover:text-[var(--on-primary)] active:scale-[0.98] transition-all w-full sm:w-auto"
            >
              {t('viewServices')}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2.5 sm:gap-x-6 sm:gap-y-3 text-[13px] sm:text-sm text-[var(--ink-soft)]">
            {[t('tag1'), t('tag2'), t('tag3'), t('tag4')].map((tag) => (
              <div key={tag} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[var(--folder)]" />
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Signature element: an official letter, translated in plain language */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto lg:ml-auto order-1 lg:order-2 pb-8 sm:pb-10">
          <div className="paper-card rounded-sm shadow-[0_20px_50px_-15px_rgba(33,31,26,0.35)] rotate-[1deg] sm:rotate-[1.2deg] relative">
            <div className="flex items-center justify-between px-5 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-[var(--line)]">
              <span className="ref-label text-[9px] sm:text-[10px] text-[var(--ink-soft)]">République Française</span>
              <span className="stamp-ring rounded-full w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[var(--stamp)] text-[8px] sm:text-[9px] font-semibold rotate-[-8deg] flex-shrink-0">
                REÇU
              </span>
            </div>
            <div className="px-5 sm:px-6 py-5 sm:py-6 flex flex-col gap-3.5 sm:gap-4">
              <p className="text-xs sm:text-[13px] leading-relaxed text-[var(--ink)] font-medium">
                « Votre dossier est réputé incomplet en l'absence des pièces justificatives mentionnées au verso
                dans un délai de trente jours. »
              </p>
              <div className="flex items-start gap-2.5 pl-3 border-l-2 border-[var(--marker)]">
                <span className="font-[var(--font-headline)] italic text-sm sm:text-[15px] text-[var(--ink)] leading-snug marker-swipe">
                  « Il vous manque un papier — envoyez-le sous 30 jours. »
                </span>
              </div>
              <span className="ref-label text-[9px] sm:text-[10px] text-[var(--folder-light)] self-end">— traduit avec Laïla</span>
            </div>
          </div>

          {/* Illustrated avatar, tucked at the corner like a photo clipped to the dossier */}
          <div className="absolute -bottom-2 -left-4 sm:-left-6 w-24 sm:w-28 md:w-32 rounded-sm overflow-hidden border-4 border-[var(--paper-lowest)] shadow-[0_10px_30px_-8px_rgba(33,31,26,0.4)] -rotate-[4deg] bg-[#FBFBFA]">
            <div className="relative w-full" style={{ aspectRatio: '864 / 1219' }}>
              <Image
                src="/images/avatar.png"
                alt="Illustration de Laïla Rezzougui, assistante sociale indépendante"
                fill
                className="object-cover object-top"
                priority
                sizes="130px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
