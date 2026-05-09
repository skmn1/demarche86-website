"use client"

import Image from 'next/image'
import { Phone, Euro, CheckCircle, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <section className="hero">

      {/* ── Text content ── */}
      <div className="hero-content">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#6c1725] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
          <Euro className="w-4 h-4 shrink-0" />
          {t('badge')}
        </div>

        {/* Heading */}
        <h1 className="font-[var(--font-manrope)] text-[1.45rem] leading-tight sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-3 sm:mb-5">
          {t('title')}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-xl text-[#ffdadb] mb-5 leading-relaxed">
          {t('description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <a href="tel:0662371818" className="hero-btn-call">
            <Phone className="w-4 h-4 shrink-0" style={{ fill: 'currentColor' }} />
            <span className="btn-call-label">{t('callNow')}</span>
            <span className="btn-call-sep"> — </span>
            <span className="btn-call-number">06 62 37 18 18</span>
          </a>
          <a href="#services" className="hero-btn-services">
            {t('viewServices')}
          </a>
        </div>
      </div>

      {/* ── Avatar — absolute, bottom-right ── */}
      {/* .hero-avatar-wrap responsive sizing is in globals.css */}
      <div className="hero-avatar-wrap">
        <Image
          src="/images/laila-avatar.png"
          alt="Portrait illustré de Laïla Rezzougui, assistante administrative indépendante"
          fill
          className="object-contain object-bottom"
          priority
          sizes="(max-width: 640px) 48vw, (max-width: 1024px) 40vw, 460px"
        />
      </div>

      {/* ── Trust badge bar — pinned to hero bottom ── */}
      <div className="hero-badges">
        <div className="flex items-center gap-1.5 text-sm text-[#ffdadb]">
          <CheckCircle className="w-4 h-4 shrink-0 text-[#ffaaaf]" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
          {t('tag1')}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-[#ffdadb]">
          <CheckCircle className="w-4 h-4 shrink-0 text-[#ffaaaf]" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
          {t('tag2')}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-[#ffdadb]">
          <CheckCircle className="w-4 h-4 shrink-0 text-[#ffaaaf]" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
          {t('tag3')}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-[#ffdadb]">
          <MapPin className="w-4 h-4 shrink-0 text-[#ffaaaf]" />
          {t('tag4')}
        </div>
      </div>

    </section>
  )
}
