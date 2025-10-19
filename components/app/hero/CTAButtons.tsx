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
          aria-label="Simuler vos économies"
          onClick={() => window.location.href = '/simuler'}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <span className="relative z-10 flex items-center gap-2">
            <span>Simuler vos économies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform drop-shadow-lg flex-shrink-0" aria-hidden="true" />
          </span>
        </Button>
      </motion.div>
      
     
    
    </motion.div>
  )
}

