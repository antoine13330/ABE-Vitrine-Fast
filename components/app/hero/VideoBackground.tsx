'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

interface VideoBackgroundProps {
  sectionRef: React.RefObject<HTMLDivElement | null>
}

export default function VideoBackground({ sectionRef }: VideoBackgroundProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Loading state */}
      {!videoLoaded && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: videoLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          role="status"
          aria-live="polite"
        >
          <div className="text-center">
            <motion.div
              className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <p className="text-white text-lg font-light">Chargement de la vidéo...</p>
          </div>
        </motion.div>
      )}

      <motion.video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ y, opacity, scale: 1.4 }}
        onLoadedData={() => setVideoLoaded(true)}
        poster="/videos/solar-houses-poster.jpg"
        preload="metadata"
        aria-label="Vidéo d'arrière-plan montrant des maisons avec panneaux solaires"
      >
        <source src="/videos/solar-houses.mp4" type="video/mp4" />
      </motion.video>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" aria-hidden="true" />
    </div>
  )
}
