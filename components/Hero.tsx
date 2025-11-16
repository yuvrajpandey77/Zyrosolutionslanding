'use client'

import { HeroSection } from '@/components/ui/hero-section-dark'

export default function Hero() {
  return (
    <HeroSection
      title="Never miss another customer call"
      subtitle={{
        regular: "AI receptionists that book your ",
        gradient: "next customer",
      }}
      description="Zyro Solutions gives your business a 24/7 AI receptionist that answers calls, responds to texts, and books appointments directly into your calendar—so you stop losing money every time you can't pick up the phone."
      ctaText="Book a free demo call"
      ctaHref="/demo"
      bottomImage={{
        light: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&q=90&auto=format",
        dark: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=800&fit=crop&q=90&auto=format",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.3,
        cellSize: 50,
        lightLineColor: "#6366F1",
        darkLineColor: "#22D3EE",
      }}
      className="section-padding"
    />
  )
}
