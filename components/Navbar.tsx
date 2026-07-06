"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations('Navbar')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: t('services'), code: 'S' },
    { href: '#tarifs', label: t('pricing'), code: 'T' },
    { href: '#comment-ca-marche', label: t('howItWorks'), code: 'P' },
    { href: '#contact', label: t('contact'), code: 'C' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled ? 'bg-[var(--paper)]/95 backdrop-blur-md border-[var(--line)]' : 'bg-[var(--paper)] border-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-3.5 sm:py-4 md:py-5 w-full max-w-full mx-auto">
        <a href="#" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity min-w-0">
          <Image src="/images/logo.png" alt="Laïla Rezzougui" width={32} height={32} className="h-8 sm:h-9 w-auto flex-shrink-0" />
          <span className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-[var(--folder)] font-[var(--font-headline)] truncate">
            Laïla Rezzougui
          </span>
        </a>

        {/* Desktop Navigation — folder-tab style */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 px-3.5 py-2 rounded-t-md text-[var(--ink-soft)] hover:text-[var(--folder)] transition-colors text-sm font-medium"
            >
              <span className="ref-label text-[10px] text-[var(--stamp)]/70">{link.code}</span>
              {link.label}
            </a>
          ))}
          <span className="w-px h-5 bg-[var(--line)] mx-2" />
          <LanguageSwitcher />
          <a
            href="#contact"
            className="ml-2 bg-[var(--folder)] hover:bg-[var(--folder-light)] text-[var(--on-primary)] px-5 py-2.5 rounded-md text-sm font-semibold tracking-tight transition-colors"
          >
            {t('cta')}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
            className="text-[var(--folder)] p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--folder)] rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-[var(--paper)] border-t border-[var(--line)] px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-[var(--ink-soft)] hover:text-[var(--folder)] transition-colors text-base font-medium py-2.5 border-b border-[var(--line)]/60"
              >
                <span className="ref-label text-[10px] text-[var(--stamp)]/70">{link.code}</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[var(--folder)] text-[var(--on-primary)] px-6 py-3 rounded-md text-sm font-semibold tracking-tight transition-colors text-center mt-4"
            >
              {t('cta')}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
