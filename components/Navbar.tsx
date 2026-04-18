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
    { href: '#services', label: t('services') },
    { href: '#tarifs', label: t('pricing') },
    { href: '#comment-ca-marche', label: t('howItWorks') },
    { href: '#contact', label: t('contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#fcf9f8]/95 backdrop-blur-xl shadow-sm' 
        : 'bg-[#fcf9f8]/90 backdrop-blur-xl'
    }`}>
      <div className="flex justify-between items-center px-6 md:px-10 py-4 md:py-6 w-full max-w-full mx-auto">
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/images/logo.png"
            alt="Laila Rezzougui"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-extrabold tracking-tight text-[#8B2E3A] font-[var(--font-manrope)]">
            Laila Rezzougui
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#5e4f4f] hover:text-[#6c1725] transition-colors duration-200 font-[var(--font-manrope)] text-sm tracking-tight font-medium"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#contact"
            className="bg-[#6c1725] hover:bg-[#8b2e3a] text-white px-6 py-2.5 rounded-xl font-[var(--font-manrope)] text-sm tracking-tight font-semibold transition-colors"
          >
            {t('cta')}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
            className="text-[#8B2E3A] p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#fcf9f8] border-t border-[#dcc0c1] px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#5e4f4f] hover:text-[#6c1725] transition-colors duration-200 font-[var(--font-manrope)] text-base font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#6c1725] hover:bg-[#8b2e3a] text-white px-6 py-3 rounded-xl font-[var(--font-manrope)] text-sm tracking-tight font-semibold transition-colors text-center mt-2"
            >
              {t('cta')}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
