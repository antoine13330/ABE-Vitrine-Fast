'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="mt-16 flex flex-col items-center"
      role="region"
      aria-label="Indicateur de défilement"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 backdrop-blur-md"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 4px 16px 0 rgba(255, 255, 255, 0.2)',
        }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 bg-white rounded-full drop-shadow-lg"
        />
      </motion.div>
      <p className="text-white text-sm mt-4 drop-shadow-lg">Scrollez pour découvrir</p>
    </motion.div>
  )
}

