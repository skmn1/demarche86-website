"use client"

import { Phone, Euro, CheckCircle, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <section className="hero">

      {/* LAYER 2 — Avatar: transparent PNG anchored bottom-right on burgundy bg */}
      <div className="hero-avatar-wrap">
        <img
          className="hero-avatar"
          src="/images/laila-avatar.png"
          alt="Portrait illustré de Laïla Rezzougui, assistante administrative indépendante"
        />
      </div>

      {/* LAYER 3 — Text content: floats above the avatar */}
      <div className="hero-content">

        {/* Badge */}
        <div className="hero-badge">
          <Euro className="w-3 h-3" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
          {t('badge')}
        </div>

        {/* Title */}
        <h1 className="hero-title">
          {t('title')}
        </h1>

        {/* Description */}
        <p className="hero-desc">
          {t('description')}
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <a className="btn-call" href="tel:0662371818">
            <Phone className="w-4 h-4 shrink-0" style={{ fill: 'currentColor' }} />
            <span className="btn-label">{t('callNow')}</span>
            <span className="btn-sep"> — </span>
            <span className="btn-number">06 62 37 18 18</span>
          </a>
          <a className="btn-services" href="#services">
            {t('viewServices')}
          </a>
        </div>

      </div>

      {/* LAYER 3 — Trust badge bar: pinned to bottom */}
      <div className="hero-badges">
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
          <span>{t('tag1')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
          <span>{t('tag2')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
          <span>{t('tag3')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#ffaaaf' }} />
          <span>{t('tag4')}</span>
        </div>
      </div>

    </section>
  )
}
