'use client'

import { useRef } from 'react'
import VideoBackground from './hero/VideoBackground'
import HeroContent from './hero/HeroContent'
import StatsCards from './hero/StatsCards'
import CTAButtons from './hero/CTAButtons'
import ScrollIndicator from './hero/ScrollIndicator'
import EnergyFlowAnimation from './hero/EnergyFlowAnimation'

export default function HeroBanner() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden flex flex-col bg-black" aria-label="Bannière principale - Autoconsommation collective">
      {/* Video Background with Parallax */}
      <VideoBackground sectionRef={sectionRef} />

      {/* Main Content */}
      <div className="relative z-[30] w-full flex-1 flex flex-col justify-center bg-transparent">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 w-full bg-transparent">
          <HeroContent />
          <div className="mt-8 sm:mt-0">
            <StatsCards />
            <CTAButtons />
          </div>
          <ScrollIndicator />
        </div>
      </div>

      {/* Gradient overlay bottom for smooth transition to white section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}