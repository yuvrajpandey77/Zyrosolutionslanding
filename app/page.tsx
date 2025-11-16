import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import BeforeAfter from '@/components/BeforeAfter'
import Industries from '@/components/Industries'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <Hero />
        <Services />
        <Features />
        <BeforeAfter />
        <Industries />
        <Pricing />
        <Testimonials />
        <CTABanner />
      </div>
    </main>
  )
}

