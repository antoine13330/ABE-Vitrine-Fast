'use client'

import { motion } from 'framer-motion'
import { Home, Users } from 'lucide-react'

export default function EnergyFlowAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      {/* Maison Gauche */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute left-[20%] top-1/2 -translate-y-1/2"
      >
        <Home size={80} className="text-primary" />
      </motion.div>

      {/* Maison Droite */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute right-[20%] top-1/2 -translate-y-1/2"
      >
        <Home size={80} className="text-primary" />
      </motion.div>

      {/* Flux d'énergie animé entre les maisons */}
      <svg className="absolute w-full h-full" style={{ maxWidth: '60%' }}>
        <defs>
          <path
            id="energyPath"
            d="M 100 250 Q 400 200, 700 250"
          />
        </defs>
        
        <motion.path
          d="M 100 250 Q 400 200, 700 250"
          stroke="#ef4444"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{
            delay: 0.8,
            duration: 1.5,
            pathLength: { duration: 1.5 },
            opacity: { duration: 0.3 }
          }}
        />
        
        {/* Particules d'énergie */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#ef4444"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              delay: 1.2 + i * 0.3,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            >
              <mpath href="#energyPath" />
            </animateMotion>
          </motion.circle>
        ))}
      </svg>

      {/* Icône centrale - Communauté */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 4, duration: 0.6 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/30 rounded-full p-6"
      >
        <Users size={50} className="text-primary" />
      </motion.div>
    </div>
  )
}





