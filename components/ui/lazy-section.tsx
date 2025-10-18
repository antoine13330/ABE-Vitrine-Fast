'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  fallback?: React.ReactNode
}

export default function LazySection({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  fallback = null
}: LazySectionProps) {
  const ref = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const isInView = useInView(ref, { 
    once: true, 
    threshold,
    rootMargin 
  })

  if (isInView && !isLoaded) {
    setIsLoaded(true)
  }

  return (
    <div ref={ref} className={className}>
      {isLoaded ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          {children}
        </motion.div>
      ) : (
        fallback || (
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
          </div>
        )
      )}
    </div>
  )
}





