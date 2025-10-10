'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [logoTransition, setLogoTransition] = useState(false)

  useEffect(() => {
    // Simuler le chargement progressif
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Déclencher la transition du logo
    const transitionTimer = setTimeout(() => {
      setLogoTransition(true)
    }, 2000)

    // Terminer le chargement
    const completeTimer = setTimeout(() => {
      setLoading(false)
      setTimeout(onComplete, 500)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(transitionTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo avec transition */}
          <motion.div
            initial={{ scale: 1, y: 0, x: 0 }}
            animate={logoTransition ? {
              scale: 0.4,
              y: typeof window !== 'undefined' ? -window.innerHeight * 0.45 : -300,
              x: typeof window !== 'undefined' ? -window.innerWidth * 0.42 : -400,
            } : {}}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.2
            }}
            className="relative"
          >
            <Image
              src="/img/ABE_LOGO/LOGO ABE WEB/abe_logo_128X128.png"
              width={120}
              height={120}
              alt="ABE Metasystems"
              priority
              className="relative z-10"
            />
            
            {/* Effet de pulse autour du logo */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.div>

          {/* Texte de chargement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.p
              className="text-white text-lg md:text-xl font-light tracking-wide"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Innovation énergétique au service des français
            </motion.p>
            
            {/* Barre de progression */}
            <div className="mt-6 w-64 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <motion.p
              className="text-white/50 text-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {progress}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


