import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] sm:pt-[68px] md:pt-[84px]">
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  )
}
