'use client'

import { motion } from 'framer-motion'
import { Calculator, Zap, Sun, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function SimulationHero() {
  const features = [
    {
      icon: Calculator,
      title: 'Calcul précis',
      description: 'Algorithme basé sur les données météo réelles'
    },
    {
      icon: Zap,
      title: 'Économies garanties',
      description: 'Jusqu\'à 70% de réduction sur votre facture'
    },
    {
      icon: Sun,
      title: 'Production optimisée',
      description: 'Dimensionnement parfait pour votre toit'
    },
    {
      icon: TrendingUp,
      title: 'ROI calculé',
      description: 'Retour sur investissement en 7-12 ans'
    }
  ]

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/img/ABE_LOGO/abe_logo_black_energy.svg')] bg-center bg-no-repeat bg-contain opacity-5" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="p-4 bg-primary/20 rounded-full">
              <Calculator className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Simuler mon projet
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Calculez en quelques minutes les économies et la rentabilité 
            de votre projet d'autoconsommation solaire
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-primary font-semibold text-lg"
          >
            <Image
              src="/img/ABE_LOGO/LOGO ABE WEB/abe_logo_64X64.png"
              width={32}
              height={32}
              alt="ABE Metasystems"
              className="w-8 h-8"
            />
            <span>Simulation certifiée ABE Metasystems</span>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}





