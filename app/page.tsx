'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from '@/components/app/loading-screen'
import Navbar from '@/components/app/navbar'
import HeroBanner from '@/components/app/hero-banner'
import StackedSections from '@/components/app/stacked-sections'
import AutoconsommationSection from '@/components/app/autoconsommation-section'
import EcosystemSection from '@/components/app/ecosystem-section'
import Newsletter from '@/components/app/newsletter'

export default function HomePage() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!loadingComplete && (
          <LoadingScreen onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>
      
      {loadingComplete && (
        <>
          <Navbar />
          <main >
            <HeroBanner />
            <AutoconsommationSection />
            <StackedSections />
            <EcosystemSection />
            <Newsletter />
          </main>
        </>
      )}
    </>
  )
}
