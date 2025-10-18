'use client'

import { motion } from 'framer-motion'
import { Zap, Home, Users } from 'lucide-react'

const stats = [
  { icon: Zap, label: "-25%", sublabel: "sur votre facture" },
  { icon: Home, label: "10km", sublabel: "de rayon d'action" },
  { icon: Users, label: "100%", sublabel: "local & solidaire" }
]

export default function StatsCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto"
      role="list"
      aria-label="Statistiques clés de l'autoconsommation"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0 + index * 0.1, duration: 0.5 }}
          className="group rounded-lg sm:rounded-xl"
          whileHover={{ 
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          role="listitem"
        >
          <div 
            className="relative bg-white/8 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/15 shadow-lg transition-all duration-300 group-hover:bg-white/12 group-hover:border-white/25 overflow-hidden h-full min-h-[90px] sm:min-h-[100px]"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Contenu centré */}
            <div className="relative z-10 text-center h-full flex flex-col justify-center space-y-1 sm:space-y-2">
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="flex justify-center"
                aria-hidden="true"
              >
                <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-sm group-hover:text-white/90 transition-colors duration-200" />
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-sm sm:text-xl font-bold text-white drop-shadow-sm group-hover:text-white transition-colors duration-200 block">
                  {stat.label}
                </span>
              </motion.div>
              
              <motion.p 
                className="text-xs text-white/70 drop-shadow-sm group-hover:text-white/80 transition-colors duration-200 font-medium leading-relaxed"
                whileHover={{ scale: 1.01 }}
              >
                {stat.sublabel}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

