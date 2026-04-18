import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: '31 avenue Robert Schuman',
    extra: '86000 Poitiers',
    href: null,
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '06 62 37 18 18',
    extra: null,
    href: 'tel:0662371818',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@lailarezzougui.fr',
    extra: null,
    href: 'mailto:contact@lailarezzougui.fr',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Sur rendez-vous uniquement',
    extra: 'Contactez-moi pour convenir d\'un créneau',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 md:w-2/3 lg:w-1/2">
          <h2 className="font-[var(--font-manrope)] text-3xl md:text-4xl font-extrabold text-[#1b1b1b] mb-4">
            Me contacter
          </h2>
          <p className="text-[#554243] text-lg">
            N&apos;hésitez pas à me joindre pour toute question ou pour prendre un premier rendez-vous d&apos;évaluation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#f0eded] flex items-center justify-center text-[#6c1725]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[var(--font-manrope)] font-bold text-[#1b1b1b] text-lg">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#6c1725] hover:text-[#8b2e3a] font-medium transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-[#554243]">
                      {item.content}
                      {item.extra && (
                        <>
                          <br />
                          {item.extra}
                        </>
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <a
                href="tel:0662371818"
                className="inline-flex items-center justify-center gap-2 bg-[#6c1725] text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-[#8b2e3a] transition-colors w-full sm:w-auto"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden bg-[#f0eded] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.5!2d0.3446!3d46.5802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fdbe33d0d54bc7%3A0x9e9c5e2a1e3b5f6a!2s31%20Avenue%20Robert%20Schuman%2C%2086000%20Poitiers%2C%20France!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation à Poitiers"
              className="grayscale opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#6c1725]" style={{ fill: '#ffdadb' }} />
                <span className="font-[var(--font-manrope)] font-bold text-[#1b1b1b]">Poitiers et environs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
