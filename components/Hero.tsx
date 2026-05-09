"use client"

import Image from 'next/image'
import { Phone, Euro, CheckCircle, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero')

  const trustBadges = (
    <>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 shrink-0 text-[#ffaaaf]" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
        {t('tag1')}
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 shrink-0 text-[#ffaaaf]" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
        {t('tag2')}
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 shrink-0 text-[#ffaaaf]" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
        {t('tag3')}
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 shrink-0 text-[#ffaaaf]" />
        {t('tag4')}
      </div>
    </>
  )

  return (
    <section className="bg-[#8B2035] text-white relative overflow-hidden min-h-[420px] sm:min-h-[520px] lg:h-[600px]">
      {/* ── Main content row ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 h-full flex items-start sm:items-center pt-10 sm:pt-14 lg:pt-0 pb-12 sm:pb-0">

        {/* Text column — 58% on mobile, 60% on tablet, ~48% on desktop */}
        <div className="relative z-[2] w-[58%] sm:w-[60%] lg:w-[48%] flex flex-col items-start">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#6c1725] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 sm:mb-6">
            <Euro className="w-4 h-4" />
            {t('badge')}
          </div>

          {/* Heading */}
          <h1 className="font-[var(--font-manrope)] text-[1.6rem] leading-tight sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-3 sm:mb-6 text-balance">
            {t('title')}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-lg lg:text-xl text-[#ffdadb] mb-5 sm:mb-8 lg:mb-10 leading-relaxed max-w-xl">
            {t('description')}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="tel:0662371818"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#6c1725] font-bold text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#f6f3f2] transition-colors w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ fill: 'currentColor' }} />
              {t('callNow')} — 06 62 37 18 18
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-[#6c1725] text-white font-semibold text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#802633] transition-colors w-full sm:w-auto"
            >
              {t('viewServices')}
            </a>
          </div>

          {/* Trust badges — tablet + desktop only, inside text column */}
          <div className="hidden sm:flex mt-8 lg:mt-10 flex-wrap gap-4 lg:gap-6 text-sm text-[#ffdadb]">
            {trustBadges}
          </div>
        </div>
      </div>

      {/* ── Avatar — absolute, bottom-anchored, right-anchored ── */}
      {/* Width: 42vw mobile · 30vw tablet · 320px desktop */}
      <div className="absolute bottom-12 sm:bottom-0 right-0 w-[42vw] sm:w-[30vw] lg:w-[320px] pointer-events-none select-none">
        <Image
          src="/images/laila-avatar.png"
          alt="Illustrated portrait of Laïla Rezzougui"
          width={320}
          height={560}
          className="w-full h-auto object-contain object-bottom"
          priority
          sizes="(max-width: 640px) 42vw, (max-width: 1024px) 30vw, 320px"
        />
      </div>

      {/* ── Trust badges — mobile only, pinned to bottom of hero ── */}
      <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-[#6c1725] px-4 py-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#ffdadb] z-[3]">
        {trustBadges}
      </div>
    </section>
  )
}
