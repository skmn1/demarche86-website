export default function Footer() {
  return (
    <footer className="bg-[#8B2E3A] text-[#f9ecee] w-full mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 py-16 gap-12 max-w-full mx-auto">
        <div className="flex flex-col max-w-sm">
          <span className="text-lg font-bold text-white mb-4 block font-[var(--font-manrope)]">
            Laïla Rezzougui
          </span>
          <p className="text-sm leading-relaxed text-[#f9ecee]/80 mb-6">
            Assistante Sociale Indépendante. Accompagnement dans vos démarches administratives du quotidien.
          </p>
          <p className="text-xs leading-relaxed text-[#f9ecee]/60">
            © 2024 Laïla Rezzougui - Assistante Sociale Indépendante.
            <br />
            SIRET 123 456 789 00010
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white mb-2">Navigation</h4>
            <a href="#services" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              Services
            </a>
            <a href="#tarifs" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              Tarifs
            </a>
            <a href="#contact" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              Contact
            </a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white mb-2">Légal</h4>
            <a href="#" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              Mentions Légales
            </a>
            <a href="#" className="text-[#f9ecee]/70 hover:text-white transition-opacity text-sm leading-relaxed">
              Confidentialité
            </a>
            <span className="text-[#f9ecee]/50 text-xs leading-relaxed mt-4 italic">
              Ne pas jeter sur la voie publique
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
