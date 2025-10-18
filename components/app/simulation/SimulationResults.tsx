'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Zap, 
  Sun, 
  TrendingUp, 
  Calendar, 
  Leaf, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Download,
  Share2
} from 'lucide-react'

interface SimulationResult {
  recommendedPower: number
  estimatedProduction: number
  annualSavings: number
  paybackPeriod: number
  co2Savings: number
  recommendedProducts: Array<{
    name: string
    power: number
    price: number
    description: string
    features: string[]
  }>
}

interface SimulationResultsProps {
  result: SimulationResult
  onNewSimulation: () => void
  onRequestQuote: (productName: string) => void
}

export default function SimulationResults({ 
  result, 
  onNewSimulation, 
  onRequestQuote 
}: SimulationResultsProps) {
  const summaryCards = [
    {
      icon: Zap,
      value: `${result.recommendedPower} kW`,
      label: 'Puissance recommandée',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Sun,
      value: `${result.estimatedProduction.toLocaleString()} kWh`,
      label: 'Production annuelle',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: TrendingUp,
      value: `${result.annualSavings.toLocaleString()} €`,
      label: 'Économies annuelles',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Calendar,
      value: `${result.paybackPeriod} ans`,
      label: 'Retour sur investissement',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    }
  ]

  const environmentalImpact = [
    {
      value: `${result.co2Savings.toLocaleString()} kg`,
      label: 'CO₂ évité par an',
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      value: `${Math.round(result.co2Savings / 22)} arbres`,
      label: 'Équivalent plantation',
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      value: `${Math.round(result.estimatedProduction / 1000)} MWh`,
      label: 'Énergie verte produite',
      icon: Sun,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {summaryCards.map((card, index) => {
          const IconComponent = card.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${card.color} mb-1`}>
                    {card.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {card.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Download className="w-4 h-4 mr-2" />
          Télécharger le rapport
        </Button>
        <Button variant="outline" size="lg">
          <Share2 className="w-4 h-4 mr-2" />
          Partager
        </Button>
        <Button variant="outline" size="lg" onClick={onNewSimulation}>
          Nouvelle simulation
        </Button>
      </motion.div>

      {/* Recommended Products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Solutions ABE recommandées
            </CardTitle>
            <CardDescription>
              Produits optimisés pour votre projet et votre budget
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {result.recommendedProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {product.power} kW
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{product.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-1 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-center lg:text-right">
                          <div className="text-3xl font-bold text-primary mb-1">
                            {product.price.toLocaleString()} €
                          </div>
                          <div className="text-sm text-gray-500 mb-4">
                            Installation incluse
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button 
                              onClick={() => onRequestQuote(product.name)}
                              className="bg-primary hover:bg-primary/90"
                            >
                              Demander un devis
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="outline">
                              En savoir plus
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Environmental Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Impact environnemental
            </CardTitle>
            <CardDescription>
              Votre contribution à la transition énergétique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {environmentalImpact.map((impact, index) => {
                const IconComponent = impact.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className={`text-center p-6 ${impact.bgColor} rounded-lg`}
                  >
                    <IconComponent className={`w-8 h-8 ${impact.color} mx-auto mb-3`} />
                    <div className={`text-3xl font-bold ${impact.color} mb-2`}>
                      {impact.value}
                    </div>
                    <div className={`text-sm ${impact.color.replace('text-', 'text-').replace('-500', '-700')}`}>
                      {impact.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à passer à l'action ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos experts ABE sont à votre disposition pour vous accompagner dans votre projet 
              d'autoconsommation solaire. Contactez-nous pour une étude personnalisée gratuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Zap className="w-4 h-4 mr-2" />
                Étude personnalisée gratuite
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="w-4 h-4 mr-2" />
                Prendre rendez-vous
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}





