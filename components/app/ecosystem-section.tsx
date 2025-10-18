'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Zap, 
  Plug, 
  Battery, 
  Sun, 
  Car, 
  ArrowRight,
  Monitor,
  Smartphone,
  Users,
  TrendingDown,
  Leaf,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function EcosystemSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])


  return (
    <section className="relative pb-12">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Prêt à découvrir l'écosystème complet ?
            </h3>
            <p className="text-gray-600 mb-6">
              Explorez en détail chaque technologie TruePower® et découvrez comment 
              elles s'intègrent parfaitement dans votre quotidien
            </p>
            <Button
              size="lg"
              className="group shadow-lg shadow-primary/20"
              onClick={() => window.location.href = '/ecosysteme'}
            >
              Découvrir l'écosystème complet
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
