"use client"

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="tel:0662371818"
      aria-label="Appeler Laïla"
      className={`fixed bottom-6 right-6 w-14 h-14 bg-[#8B2E3A] text-white border border-white/20 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(108,23,37,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 z-50 md:hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Phone className="w-6 h-6" style={{ fill: 'white' }} />
    </a>
  )
}
