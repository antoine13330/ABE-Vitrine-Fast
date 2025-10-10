'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, Zap, Home, Users } from 'lucide-react'

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Energy Flow Between Houses */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        {/* Maison Gauche */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.6 }}
          className="absolute left-[20%] top-1/2 -translate-y-1/2"
        >
          <Home size={80} className="text-primary" />
        </motion.div>

        {/* Maison Droite */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.6 }}
          className="absolute right-[20%] top-1/2 -translate-y-1/2"
        >
          <Home size={80} className="text-primary" />
        </motion.div>

        {/* Flux d'énergie animé entre les maisons */}
        <svg className="absolute w-full h-full" style={{ maxWidth: '60%' }}>
          <motion.path
            d="M 100 250 Q 400 200, 700 250"
            stroke="#ef4444"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              delay: 4.2,
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
              initial={{ offsetDistance: "0%", opacity: 0 }}
              animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 4.5 + i * 0.3,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              style={{
                offsetPath: "path('M 100 250 Q 400 200, 700 250')",
              }}
            >
              <animateMotion
                dur={`${2}s`}
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
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 rounded-full p-6"
        >
          <Users size={50} className="text-primary" />
        </motion.div>
      </div>

      {/* Contenu Principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Titre Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Et si le courant{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">passait</span>
              <motion.span
                className="absolute inset-0 bg-primary/20 rounded-lg"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 4.8, duration: 0.6 }}
              />
            </span>
            <br />
            avec votre voisin ?
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto font-light"
          >
            Produisez, consommez et partagez votre énergie localement.
            <br className="hidden sm:block" />
            Ensemble, réduisons vos factures et créons un avenir énergétique durable.
          </motion.p>

          {/* Stats rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {[
              { icon: Zap, label: "Jusqu'à -40%", sublabel: "sur votre facture" },
              { icon: Home, label: "10km", sublabel: "de rayon d'action" },
              { icon: Users, label: "100%", sublabel: "local & solidaire" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 5.2 + index * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-white">{stat.label}</p>
                <p className="text-sm text-white/60">{stat.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="group">
              Découvrir l'autoconsommation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Simuler mes économies
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, duration: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </motion.div>
            <p className="text-white/50 text-sm mt-4">Scroll pour découvrir</p>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}


