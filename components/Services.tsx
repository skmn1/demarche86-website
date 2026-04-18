import { FileEdit, FolderOpen, Monitor, Compass, PhoneCall, Mail } from 'lucide-react'

const services = [
  {
    icon: FileEdit,
    title: 'Remplir vos papiers',
    description: 'Aide à la constitution de dossiers et au remplissage de formulaires administratifs complexes.',
  },
  {
    icon: FolderOpen,
    title: 'Suivre vos dossiers',
    description: 'Vérification de l\'avancement de vos demandes et relances auprès des organismes concernés.',
  },
  {
    icon: Monitor,
    title: 'Démarches en ligne',
    description: 'Assistance pour vos déclarations et demandes sur les plateformes gouvernementales (CAF, Impôts, Ameli...).',
  },
  {
    icon: Compass,
    title: 'Trouver le bon service',
    description: 'Orientation vers les bons interlocuteurs et structures adaptés à votre situation spécifique.',
  },
  {
    icon: PhoneCall,
    title: 'Appeler les administrations',
    description: 'Prise de contact téléphonique avec les services publics pour débloquer une situation ou obtenir des informations.',
  },
  {
    icon: Mail,
    title: 'Expliquer vos courriers',
    description: 'Traduction en langage clair des courriers administratifs complexes et aide à la rédaction de réponses.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#fcf9f8] px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 md:w-2/3 lg:w-1/2">
          <h2 className="font-[var(--font-manrope)] text-3xl md:text-4xl font-extrabold text-[#1b1b1b] mb-4">
            Ce que je fais pour vous
          </h2>
          <p className="text-[#554243] text-lg">
            Un accompagnement sur-mesure pour vous simplifier la vie quotidienne et vos relations avec les administrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl flex flex-col gap-4 group hover:bg-[#f6f3f2] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ffdadb] flex items-center justify-center text-[#6c1725] mb-2">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-[var(--font-manrope)] text-xl font-bold text-[#1b1b1b]">
                {service.title}
              </h3>
              <p className="text-[#554243] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
