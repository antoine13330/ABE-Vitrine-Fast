'use client'

import { useState } from 'react'
import LoadingScreen from '@/components/app/loading-screen'
import Navbar from '@/components/app/navbar'
import HeroBanner from '@/components/app/hero-banner'
import StackedSections from '@/components/app/stacked-sections'

export default function HomePage() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <>
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      
      {loadingComplete && (
        <>
          <Navbar />
          <main>
            <HeroBanner />
            <StackedSections />
          </main>
        </>
      )}
    </>
  )
}
