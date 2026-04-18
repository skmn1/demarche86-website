import Image from 'next/image'
import { Phone, Euro, CheckCircle, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-[#9f3d49] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        <div className="lg:w-1/2 flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 bg-[#6c1725] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Euro className="w-4 h-4" />
            Démarches à partir de 5 €
          </div>
          
          <h1 className="font-[var(--font-manrope)] text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-balance">
            Besoin d&apos;aide pour vos démarches administratives?
          </h1>
          
          <p className="text-lg lg:text-xl text-[#ffdadb] mb-10 leading-relaxed max-w-xl">
            Je vous accompagne pour remplir vos papiers, comprendre vos courriers et faire valoir vos droits. Une aide simple, rapide et sans jargon.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="tel:0662371818"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#6c1725] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#f6f3f2] transition-colors w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" style={{ fill: 'currentColor' }} />
              Appeler maintenant — 06 62 37 18 18
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-[#6c1725] text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-[#802633] transition-colors w-full sm:w-auto"
            >
              Voir les services
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-[#ffdadb]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#ffaaaf]" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
              Indépendante
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#ffaaaf]" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
              Tarifs dès 5€
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#ffaaaf]" style={{ fill: '#ffaaaf', stroke: '#6c1725' }} />
              Sans jargon
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ffaaaf]" />
              À Poitiers
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full max-w-md mx-auto relative z-10">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#6c1725] relative">
            <Image
              src="/images/laila.jpg"
              alt="Portrait de Laïla Rezzougui, assistante sociale indépendante"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
