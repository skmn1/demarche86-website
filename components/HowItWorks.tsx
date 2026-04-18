const steps = [
  {
    number: 1,
    title: 'Contactez-moi',
    description: 'Par téléphone ou par message, expliquez-moi brièvement votre besoin.',
  },
  {
    number: 2,
    title: 'On fait le point',
    description: 'Nous évaluons ensemble la situation et je vous propose une solution adaptée et chiffrée.',
  },
  {
    number: 3,
    title: 'Je m\'en occupe',
    description: 'Je prends en charge les démarches. Vous êtes informé à chaque étape importante.',
  },
]

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-24 lg:py-32 bg-[#f6f3f2] px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <h2 className="font-[var(--font-manrope)] text-3xl md:text-4xl font-extrabold text-[#1b1b1b] mb-4">
            Comment ça se passe?
          </h2>
          <p className="text-[#554243] text-lg">
            Un processus simple et transparent, conçu pour vous soulager rapidement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-1 bg-[#dcc0c1]/50 rounded-full z-0" />
          
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="w-20 h-20 rounded-full bg-[#6c1725] text-white flex items-center justify-center text-3xl font-[var(--font-manrope)] font-bold">
                {step.number}
              </div>
              <div>
                <h3 className="font-[var(--font-manrope)] text-xl font-bold text-[#1b1b1b] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#554243]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
