'use client'

import { motion } from 'framer-motion'
import { Button } from '../../ui/button'
import { ArrowRight, Calculator } from 'lucide-react'
import Link from 'next/link'

export default function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      role="group"
      aria-label="Actions principales"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button 
          size="lg" 
          className="group backdrop-blur-md border-white/30 hover:bg-primary/90 transition-all duration-300 relative overflow-hidden whitespace-nowrap bg-primary/80" 
          aria-label="Découvrir l'autoconsommation collective"
          onClick={() => window.location.href = '/ecosysteme'}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <span className="relative z-10 flex items-center gap-2">
            <span>Découvrir l'autoconsommation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform drop-shadow-lg flex-shrink-0" aria-hidden="true" />
          </span>
        </Button>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/simuler">
          <Button size="lg" variant="outline" className="backdrop-blur-md border-white/50 text-white hover:bg-white/20 transition-all duration-300 relative overflow-hidden" style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.2)',
          }} aria-label="Simuler vos économies d'énergie">
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Simuler mes économies
            </span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

