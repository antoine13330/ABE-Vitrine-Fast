'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Users, 
  Home, 
  Zap, 
  TrendingDown, 
  Shield, 
  ArrowRight,
  BookOpen,
  Scale,
  Lightbulb
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AutoconsommationSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const keyPoints = [
    {
      icon: Users,
      title: 'Collectif local',
      description: 'Nombre illimité de participants dans un rayon de 10 km',
      color: 'text-blue-600'
    },
    {
      icon: Home,
      title: 'Production locale',
      description: 'Énergie produite et consommée dans le même périmètre',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Partage d\'énergie',
      description: 'Vente du surplus entre participants de la communauté',
      color: 'text-orange-600'
    },
    {
      icon: TrendingDown,
      title: 'Économies garanties',
      description: 'Réduction des coûts de transport et de distribution',
      color: 'text-red-600'
    }
  ]

  const legalAspects = [
    {
      icon: Scale,
      title: 'Loi APER',
      description: 'L\'Arrêté du 22 octobre 2021 définit le cadre légal de l\'autoconsommation collective'
    },
    {
      icon: Shield,
      title: 'Cadre réglementaire clair',
      description: 'Cadre réglementaire clair pour tous les participants'
    },
    {
      icon: BookOpen,
      title: 'Transparence',
      description: 'Règles de répartition et de facturation transparentes'
    }
  ]

  return (
    <section className="relative pt-20 pb-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20"
          >
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">
              Cadre légal APER
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Qu'est-ce que l'autoconsommation
            <br />
            <span className="text-primary">collective ?</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            L'autoconsommation collective permet à plusieurs consommateurs de partager 
            l'électricité produite localement, selon un cadre légal défini par la loi APER.
          </p>
        </motion.div>

        {/* Définition principale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Définition légale selon l'APER
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 text-center italic leading-relaxed">
                  "L'autoconsommation collective est le partage d'électricité entre plusieurs consommateurs 
                  situés dans un périmètre géographique défini, alimentés par des installations de production 
                  d'énergie renouvelable, dans le respect des conditions fixées par l'arrêté du 22 octobre 2021."
                </p>
                <p className="text-sm text-gray-500 text-center mt-4">
                  - Article L. 315-2 du code de l'énergie
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Points clés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4 group-hover:bg-${point.color.split('-')[1]}-100 transition-colors`}>
                  <point.icon className={`w-8 h-8 ${point.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aspects légaux */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Sécurité juridique
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalAspects.map((aspect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <aspect.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {aspect.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {aspect.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
