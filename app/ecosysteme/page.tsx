'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Zap, 
  Plug, 
  Battery, 
  Sun, 
  Car, 
  Monitor, 
  Smartphone, 
  TrendingDown, 
  Users, 
  Home,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Leaf,
  DollarSign,
  Clock,
  Wifi,
  BarChart3,
  Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/app/navbar'

export default function EcosystemePage() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [energyLines, setEnergyLines] = useState<Array<{
    width: number
    left: number
    top: number
    transform: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Generate random values only on client side
    const lines = [...Array(6)].map(() => ({
      width: 200 + Math.random() * 300,
      left: Math.random() * 100,
      top: Math.random() * 100,
      transform: Math.random() * 30 - 15,
      duration: 6 + Math.random() * 2,
      delay: Math.random() * 3,
    }))
    setEnergyLines(lines)
  }, [])

  const ecosystemProducts = [
    {
      id: 'solar-carport',
      title: 'Pack Family',
      subtitle: 'Carport solaire 6kW',
      icon: Sun,
      color: 'orange',
      gradient: 'from-orange-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-yellow-50',
      features: [
        'Production d\'énergie solaire 6kWc optimisée',
        'Protection de 2 véhicules contre les intempéries',
        'Structure en aluminium anodisé résistante et esthétique',
        'Panneaux monocristallins haute performance 400W',
        'Intégration parfaite avec l\'écosystème ABE',
        'Installation professionnelle avec garantie constructeur'
      ],
      specifications: [
        { label: 'Puissance', value: '6 kWc' },
        { label: 'Places véhicules', value: '2' },
        { label: 'Panneaux', value: 'Monocristallins 400W' },
        { label: 'Structure', value: 'Aluminium anodisé' },
        { label: 'Orientation', value: 'Optimisée Sud' },
        { label: 'Inclinaison', value: '30° optimale' },
        { label: 'Production annuelle', value: '8000 kWh' },
        { label: 'Garantie panneaux', value: '25 ans' },
        { label: 'Garantie structure', value: '10 ans' }
      ],
      benefits: [
        { icon: Leaf, text: 'Énergie 100% renouvelable et locale' },
        { icon: Car, text: 'Protection optimale des véhicules' },
        { icon: Zap, text: 'Production jusqu\'à 8000 kWh/an' }
      ]
    },
    {
      id: 'battery-storage',
      title: 'Pack Confort',
      subtitle: 'Batterie intelligente avec onduleur solaire intégré',
      icon: Battery,
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      features: [
        'Écran LED intégré 5 pouces pour monitoring en temps réel',
        'Charge via panneaux solaires (3kWc) et réseau électrique (3kW)',
        'Sortie 3kW pour alimenter tous vos appareils',
        '2 ports USB-C et 2 ports USB-A pour charge mobile',
        '3 prises à l\'arrière pour appareils domestiques',
        'Roulettes intégrées et poignées pour transport facile'
      ],
      specifications: [
        { label: 'Capacité', value: '2.5 kWh' },
        { label: 'Tension', value: '48V' },
        { label: 'Entrée solaire', value: '3 kWc' },
        { label: 'Entrée réseau', value: '3 kW' },
        { label: 'Sortie', value: '3 kW' },
        { label: 'USB-C', value: '2 ports' },
        { label: 'USB-A', value: '2 ports' },
        { label: 'Prises', value: '3 ports' },
        { label: 'Écran', value: 'LED 5 pouces' },
        { label: 'Poids', value: '20 kg' },
        { label: 'Dimensions', value: '20x20x20 cm' },
        { label: 'Garantie', value: '2 ans' }
      ],
      benefits: [
        { icon: DollarSign, text: 'Gestion intelligente de l\'énergie' },
        { icon: Shield, text: 'Autonomie en cas de coupure' },
        { icon: Users, text: 'Compatible Amazon, Apple et IFTTT' }
      ]
    },
    {
      id: 'smart-plugs',
      title: 'Pack Starter',
      subtitle: 'Prises intelligentes pour une consommation optimisée',
      icon: Plug,
      color: 'red',
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50 to-pink-50',
      features: [
        'Wattmètre intégré pour surveillance en temps réel',
        'Contrôle à distance depuis n\'importe où dans le monde',
        'Programmation avancée des horaires d\'allumage/extinction',
        'Historique détaillé de votre consommation énergétique',
        'Compatible Alexa, Apple HomeKit et IFTTT',
        'Pack de 4 prises intelligentes'
      ],
      specifications: [
        { label: 'Articles', value: '4 prises intelligentes' },
        { label: 'Protocole', value: 'IEEE 802.11b/g/n' },
        { label: 'WiFi', value: '2.4 GHz' },
        { label: 'Tension', value: 'AC 220-240V ~ 50/60Hz' },
        { label: 'Consommation ON', value: '1.64W' },
        { label: 'Consommation OFF', value: '0.64W' },
        { label: 'Garantie', value: '2 ans' },
        { label: 'Ignifuge', value: 'Oui' }
      ],
      benefits: [
        { icon: TrendingDown, text: 'Optimisation automatique de la consommation' },
        { icon: Monitor, text: 'Surveillance en temps réel via écran LED' },
        { icon: Smartphone, text: 'Contrôle distant et programmation' }
      ]
    }
  ]

  const ecosystemBenefits = [
    {
      icon: TrendingDown,
      title: 'Économies garanties',
      description: 'Réduisez vos factures d\'électricité jusqu\'à 25%',
      color: 'text-red-600'
    },
    {
      icon: Users,
      title: 'Communauté énergétique',
      description: 'Partagez et échangez avec vos voisins',
      color: 'text-blue-600'
    },
    {
      icon: Leaf,
      title: 'Impact environnemental',
      description: 'Contribuez à la transition énergétique',
      color: 'text-green-600'
    },
    {
      icon: DollarSign,
      title: 'Revenus supplémentaires',
      description: 'Monétisez votre surplus d\'énergie',
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-gray-100">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-white to-blue-50/30" />
        
        {/* Energy Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {energyLines.map((line, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-200/40 to-transparent"
              style={{
                width: `${line.width}px`,
                left: `${line.left}%`,
                top: `${line.top}%`,
                transform: `rotate(${line.transform}deg)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: line.duration,
                repeat: Infinity,
                delay: line.delay,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-primary/20"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">
                Produits ABE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
            >
              Les offres ABE
              <br />
              <span className="text-primary">pour votre autonomie énergétique</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Découvrez comme nous pouvons vous aider à réduire vos factures d'électricité et augmenter vos revenus.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="group shadow-lg shadow-primary/20"
                onClick={() => router.push('/simuler')}
              >
                Simuler vos économies
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            
            </motion.div>
          </div>
        </div>
      </section>

  

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

          <div className="space-y-24">
            {ecosystemProducts.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.8, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start lg:justify-start">
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                      <div className={`p-3 rounded-xl bg-${product.color}-100 lg:hidden`}>
                        <product.icon className={`w-8 h-8 text-${product.color}-600`} />
                      </div>
                      <div className="text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {product.subtitle}
                        </h3>
                        <h2 className="text-3xl font-black text-gray-900">
                          {product.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {product.id === 'smart-plugs' && (
                        <>
                          Le Pack Starter mise tout sur ses <strong>4 prises intelligentes</strong>, véritables sentinelles de votre consommation électrique. Transformez n'importe quel appareil en dispositif connecté et optimisez votre usage énergétique en temps réel, pour des économies immédiates et durables.
                        </>
                      )}
                      {product.id === 'battery-storage' && (
                        <>
                          Au cœur du Pack Confort trône sa <strong>batterie 10kWh</strong> munie d'un onduleur solaire intégré. Cette centrale électrique portable capte l'énergie gratuite du soleil et des tarifs préférentiels nocturnes pour alimenter votre foyer 24h/24, même en cas de panne réseau.
                        </>
                      )}
                      {product.id === 'solar-carport' && (
                        <>
                          Le Pack Family se distingue par son <strong>carport solaire 6kW</strong>, génie architectural qui transforme votre place de parking en usine à électricité. Protégez vos véhicules des intempéries tout en produisant 8000 kWh d'énergie verte annuellement - une innovation qui valorise chaque mètre carré de votre propriété.
                        </>
                      )}
                    </p>

                    {/* Navigation vers les autres packs */}
                    {(product.id === 'solar-carport' || product.id === 'battery-storage') && (
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h5 className="text-sm font-semibold text-gray-800 mb-3">Contient le pack :</h5>
                        <div className="flex flex-wrap gap-2">
                          {product.id === 'solar-carport' && (
                            <>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => {
                                  setTimeout(() => {
                                    const element = document.getElementById('battery-storage');
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                  }, 100);
                                }}
                                className="text-blue-600 border-blue-300 hover:opacity-90 transition-opacity"
                              >
                                <Battery className="w-3 h-3 mr-1" />
                                Pack Confort
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => {
                                  setTimeout(() => {
                                    const element = document.getElementById('smart-plugs');
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                  }, 100);
                                }}
                                className="text-red-600 border-red-300 hover:opacity-90 transition-opacity"
                              >
                                <Plug className="w-3 h-3 mr-1" />
                                Pack Starter
                              </Button>
                            </>
                          )}
                          {product.id === 'battery-storage' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setTimeout(() => {
                                  const element = document.getElementById('smart-plugs');
                                  if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }
                                }, 100);
                              }}
                              className="text-red-600 border-red-300 hover:opacity-90 transition-opacity"
                            >
                              <Plug className="w-3 h-3 mr-1" />
                              Pack Starter
                            </Button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Fonctionnalités clés */}
                    <div className="w-full">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 text-center lg:text-left">Fonctionnalités clés</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3 justify-center lg:justify-start">
                            <CheckCircle className={`w-5 h-5 text-${product.color}-500 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags/Benefits */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full items-center sm:items-stretch">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center justify-center sm:justify-start gap-3">
                          <benefit.icon className={`w-5 h-5 text-${product.color}-500`} />
                          <span className="text-gray-700 font-medium">
                            {benefit.text}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${product.bgGradient} p-8`}>
                    {/* Product Image */}
                    <div className="relative h-80 flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center">
                        {product.id === 'smart-plugs' && (
                          <div className="w-full h-full bg-white/80 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                            <img 
                              src="/img/pack/plug.png" 
                              alt="Pack Starter - Prises intelligentes" 
                              className="w-full h-full object-contain p-6"
                            />
                          </div>
                        )}
                        
                        {product.id === 'battery-storage' && (
                          <div className="w-full h-full bg-white/80 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                            <img 
                              src="/img/pack/battery-plug.webp" 
                              alt="Pack Confort - Batterie intelligente" 
                              className="w-full h-full object-contain p-6"
                            />
                          </div>
                        )}
                        
                        {product.id === 'solar-carport' && (
                          <div className="w-full h-full bg-white/80 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                            <img 
                              src="/img/pack/carport.jpg" 
                              alt="Pack Family - Carport solaire 6kW" 
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mt-6 space-y-3">
                      <h4 className="font-bold text-gray-900 mb-3">Spécifications techniques</h4>
                      {product.specifications.map((spec, specIndex) => (
                        <div key={specIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                          <span className="text-gray-600">{spec.label}</span>
                          <span className="font-semibold text-gray-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px 0px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Connectivité universelle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos produits ABE sont conçus pour s'intégrer parfaitement dans votre écosystème domotique existant
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'WiFi', icon: Wifi, description: 'Connexion 2.4GHz' },
              { name: 'IFTTT', icon: Settings, description: 'Automatisation' },
              { name: 'Zigbee', icon: BarChart3, description: 'Protocole IoT' },
              { name: 'Matter', icon: Shield, description: 'Standard universel' }
            ].map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px 0px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4 group-hover:bg-emerald-100 transition-colors">
                  <protocol.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {protocol.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {protocol.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px 0px" }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              Compatible avec Amazon Alexa, Apple HomeKit, votre propre logiciel et notre application dédiée
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 border-primary/30 text-primary hover:bg-primary/5">Amazon Alexa</Badge>
              <Badge variant="outline" className="px-4 py-2 border-blue-500/30 text-blue-600 hover:bg-blue-50">Apple HomeKit</Badge>
              <Badge variant="outline" className="px-4 py-2 border-orange-500/30 text-orange-600 hover:bg-orange-50">IFTTT</Badge>
              <Badge variant="outline" className="px-4 py-2 border-gray-500/30 text-gray-600 hover:bg-gray-50">Thread</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px 0px" }}
            className="space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Prêt à transformer votre habitation ?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Découvrez comment l'écosystème ABE peut réduire vos factures et augmenter vos revenus
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group shadow-lg shadow-primary/20"
                  onClick={() => router.push('/simuler')}
                >
                  Simuler vos économies
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
