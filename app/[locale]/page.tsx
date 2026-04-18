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
      <main className="pt-[72px] md:pt-[92px]">
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
