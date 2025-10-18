'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { toast } from 'sonner'
import { 
  Calculator, 
  Home, 
  Zap, 
  Sun, 
  TrendingUp, 
  ArrowRight,
  MapPin,
  Euro,
  Calendar,
  Lightbulb,
  Shield,
  Leaf,
  CheckCircle,
  Info,
  Mail,
  Phone,
  Star,
  Sparkles,
  Target,
  Award,
  Clock,
  ChevronRight,
  Building,
  Users,
  AlertCircle,
  Car,
  Battery
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
// Suppression des imports de packs - plus utilisés

interface SimulationData {
  address: string
  hasParkingSpace: boolean
  parkingExposure: 'sunny' | 'partial' | 'shaded'
  monthlyElectricityBill: number
  contactEmail: string
}

interface SimulationResult {
  monthlyConsumptionSavings: number
  monthlySolarRevenue: number
  totalMonthlyBenefits: number
  totalSolarPower: number
  consumptionSavingsRate: number
  solarRevenueIncrease: number
  carportPower: number
}

export default function SimulateurPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [simulationData, setSimulationData] = useState<SimulationData>({
    address: '',
    hasParkingSpace: true,
    parkingExposure: 'sunny',
    monthlyElectricityBill: 150,
    contactEmail: ''
  })
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [addressSuggestions, setAddressSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoadingAddresses, setIsLoadingAddresses] = useState(false)
  
  const addressInputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  const steps = [
    { id: 1, title: 'Localisation', description: 'Où se trouve votre projet', icon: MapPin },
    { id: 2, title: 'Parking', description: 'Espace disponible', icon: Building },
    { id: 3, title: 'Consommation', description: 'Votre facture EDF actuelle', icon: Euro },
    { id: 4, title: 'Résultats', description: 'Vos économies avec ABE', icon: CheckCircle },
    { id: 5, title: 'Email', description: 'Recevez votre étude', icon: Mail }
  ]

  // Fonction pour récupérer les suggestions d'adresses via l'API Adresse.gouv.fr
  const fetchAddressSuggestions = async (query: string) => {
    if (query.length < 3) {
      setAddressSuggestions([])
      setShowSuggestions(false)
      return
    }
    
    setIsLoadingAddresses(true)
    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=5&type=housenumber&autocomplete=1`
      )
      const data = await response.json()
      const suggestions = data.features?.map((feature: any) => feature.properties.label) || []
      setAddressSuggestions(suggestions)
      setShowSuggestions(suggestions.length > 0)
    } catch (error) {
      console.error('Erreur lors de la récupération des adresses:', error)
      setAddressSuggestions([])
      setShowSuggestions(false)
    } finally {
      setIsLoadingAddresses(false)
    }
  }

  // Gestion du clic en dehors du dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        addressInputRef.current &&
        !addressInputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Calculs pour carports solaires avec autoconsommation collective
  const calculateSimulation = async () => {
    setIsCalculating(true)
    
    // Simulation des calculs
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const result = calculateSimulationResults()
    
    if (!result) {
      setSimulationResult(null)
      setIsCalculating(false)
      return
    }
    
    setSimulationResult(result)
    
    // Envoi automatique de l'email avec les résultats
    try {
      const emailResponse = await fetch('/api/simulation/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          simulationData,
          simulationResult: result
        }),
      })

      if (emailResponse.ok) {
        setIsEmailSent(true)
      } else {
        console.error('Erreur lors de l\'envoi de l\'email')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error)
    }
    
    setIsCalculating(false)
  }

  const updateSimulationData = (field: keyof SimulationData, value: any) => {
    setSimulationData(prev => ({ ...prev, [field]: value }))
    
    // Auto-complétion des adresses
    if (field === 'address') {
      fetchAddressSuggestions(value)
      // Afficher les suggestions si on tape quelque chose
      if (value.length >= 3) {
        setShowSuggestions(true)
      } else {
        setShowSuggestions(false)
      }
    }
  }

  const nextStep = () => {
    // Vérifier si on peut passer à l'étape suivante
    if (currentStep === 2 && !simulationData.hasParkingSpace) {
      return // Bloquer si pas d'espace de parking
    }
    
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1)
    } else {
      calculateSimulation()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  // Fonction pour calculer les résultats de simulation
  const calculateSimulationResults = () => {
    if (!simulationData.hasParkingSpace) {
      return null
    }

    // Constantes tarifaires 2025
    const EDF_PRICE = 0.1952 // 19,52 c€/kWh TTC (août 2025)
    const ABE_PRICE = 0.155  // 15,5 c€/kWh
    const EDF_BUYBACK = 0.04 // 4 c€/kWh
    const ABE_BUYBACK = 0.08 // 8 c€/kWh
    const SOLAR_PRODUCTION = 1200 // kWh/kWc/an
    const CARPORT_POWER = 6 // 6 kWc par carport (fixe)
    
    // Économies sur consommation (25% fixe)
    const consumptionSavingsRate = 0.25 // 25% d'économies
    const monthlyConsumptionSavings = simulationData.monthlyElectricityBill * consumptionSavingsRate
    
    // Production totale (carport uniquement)
    const totalSolarPower = CARPORT_POWER
    
    // Revenus solaire totaux (seulement sur le surplus vendu)
    const annualProduction = totalSolarPower * SOLAR_PRODUCTION
    const surplusRate = 0.25 // 25% de la production est vendue (75% autoconsommée)
    const surplusProduction = annualProduction * surplusRate
    const edfRevenue = surplusProduction * EDF_BUYBACK / 12
    const abeRevenue = surplusProduction * ABE_BUYBACK / 12
    const monthlySolarRevenue = abeRevenue - edfRevenue
    
    // Total des bénéfices
    const totalMonthlyBenefits = monthlyConsumptionSavings + monthlySolarRevenue
    
    return {
      monthlyConsumptionSavings: Math.round(monthlyConsumptionSavings * 100) / 100,
      monthlySolarRevenue: Math.round(monthlySolarRevenue * 100) / 100,
      totalMonthlyBenefits: Math.round(totalMonthlyBenefits * 100) / 100,
      totalSolarPower: totalSolarPower,
      consumptionSavingsRate: Math.round(consumptionSavingsRate * 10000) / 100, // 20,59%
      solarRevenueIncrease: Math.round((ABE_BUYBACK - EDF_BUYBACK) * 100) / 100, // 4 c€/kWh
      carportPower: CARPORT_POWER
    }
  }

  const selectAddress = (address: string) => {
    setSimulationData(prev => ({ ...prev, address }))
    setShowSuggestions(false)
    setAddressSuggestions([])
  }

  // Informations interactives pour la colonne de droite
  const getRightColumnContent = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Pourquoi la localisation est importante ?",
          content: [
            {
              icon: Sun,
              title: "Ensoleillement variable",
              description: "L'ensoleillement varie de 900 à 1400 kWh/m²/an selon les régions françaises"
            },
            {
              icon: TrendingUp,
              title: "Impact sur la production",
              description: "Cela peut représenter jusqu'à 30% de différence dans la production d'énergie"
            },
            {
              icon: Target,
              title: "Calculs précis",
              description: "Nous utilisons les données météo réelles pour optimiser votre installation"
            }
          ]
        }
      case 2:
        return {
          title: "Votre espace de parking",
          content: [
            {
              icon: Building,
              title: "Espace disponible",
              description: simulationData.hasParkingSpace ? 
                "Parfait ! Vous avez l'espace nécessaire pour un carport solaire" :
                "Un espace de parking est nécessaire pour installer un carport solaire"
            },
            {
              icon: Sun,
              title: "Exposition solaire",
              description: `Exposition ${simulationData.parkingExposure === 'sunny' ? 'ensoleillée' : simulationData.parkingExposure === 'partial' ? 'partielle' : 'ombragée'} - ${simulationData.parkingExposure === 'sunny' ? 'optimal pour la production' : simulationData.parkingExposure === 'partial' ? 'bonne production possible' : 'production réduite mais possible'}`
            },
            {
              icon: Battery,
              title: "Carport ABE",
              description: "6 kWc de production + 2 places de parking gratuites"
            }
          ]
        }
      case 3:
        return {
          title: "Votre facture EDF actuelle",
          content: [
            {
              icon: Euro,
              title: "Facture mensuelle",
              description: `${simulationData.monthlyElectricityBill}€/mois avec EDF`
            },
            {
              icon: TrendingUp,
              title: "Économies ABE",
              description: `25% d'économies = ${Math.round(simulationData.monthlyElectricityBill * 0.25)}€/mois`
            },
            {
              icon: Users,
              title: "Réseau communautaire",
              description: "Rejoignez le réseau ABE pour des tarifs préférentiels"
            }
          ]
        }
      case 4:
        return {
          title: "Vos résultats avec ABE",
          content: [
            {
              icon: Euro,
              title: "Économies sur facture",
              description: `25% d'économies = ${Math.round(simulationData.monthlyElectricityBill * 0.25)}€/mois`
            },
            {
              icon: Sun,
              title: "Revenus solaire",
              description: "6 kWc de production = revenus supplémentaires"
            },
            {
              icon: Users,
              title: "Réseau communautaire",
              description: "Rejoignez la transition énergétique locale"
            }
          ]
        }
      case 5:
        return {
          title: "Votre étude personnalisée",
          content: [
            {
              icon: Mail,
              title: "Rapport détaillé",
              description: "Vous recevrez une étude complète avec plans, devis et financement"
            },
            {
              icon: Phone,
              title: "Suivi personnalisé",
              description: "Un expert ABE vous accompagnera dans votre projet"
            },
            {
              icon: Award,
              title: "Sans engagement",
              description: "L'étude est gratuite et sans engagement de votre part"
            }
          ]
        }
      default:
        return {
          title: "Bienvenue chez ABE Metasystems",
          content: [
            {
              icon: Star,
              title: "Leader français",
              description: "Spécialiste de l'autoconsommation collective depuis 2018"
            },
            {
              icon: Leaf,
              title: "Transition énergétique",
              description: "Contribuez à un avenir plus durable avec l'énergie solaire"
            },
            {
              icon: Users,
              title: "Communauté",
              description: "Rejoignez des milliers de foyers qui ont fait le choix du solaire"
            }
          ]
        }
    }
  }

  const rightContent = getRightColumnContent()

  return (
    <>
      <style jsx global>{`
        input:focus, select:focus {
          outline: none !important;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
        }
        input:focus-visible, select:focus-visible {
          outline: none !important;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
        }
        [data-radix-select-content] {
          background-color: white !important;
          border: 1px solid #e5e7eb !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          z-index: 50 !important;
        }
      `}</style>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Colonne gauche - Formulaire */}
        <div className="w-full lg:w-1/2 bg-white p-6 lg:p-12 flex flex-col">
          {/* Header avec logo et titre - Fixé en haut */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/img/ABE_LOGO/LOGO ABE WEB/abe_logo_64X64.png"
                width={48}
                height={48}
                alt="ABE Metasystems"
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  Simulateur Auto-consommation collective
                </h1>
                <p className="text-sm text-gray-600">ABE Metasystems</p>
              </div>
            </div>
          </div>

          {/* Contenu principal centré verticalement */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Progress Indicator - Centré horizontalement */}
            <div className="mb-8 flex flex-col items-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={cn(
                      "w-8 h-2 rounded-md transition-all duration-300",
                      currentStep >= step.id ? 'bg-primary' : 'bg-gray-200'
                    )} />
                    {index < steps.length - 1 && (
                      <div className="w-1 h-0.5 bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">2min chrono</span>
              </div>
            </div>

            {/* Formulaire - Centré horizontalement */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Étape 1: Adresse */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="relative">
                          <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                            Votre adresse
                          </Label>
                          <div className="relative mt-2">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              ref={addressInputRef}
                              id="address"
                              placeholder="Ex: 123 rue de la Paix, 75001 Paris"
                              value={simulationData.address}
                              onChange={(e) => updateSimulationData('address', e.target.value)}
                              onFocus={() => {
                                if (addressSuggestions.length > 0) {
                                  setShowSuggestions(true)
                                }
                              }}
                              className="pl-10 bg-white border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                              style={{ boxShadow: 'none' }}
                            />
                            {isLoadingAddresses && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                              </div>
                            )}
                          </div>
                          
                          {/* Dropdown des suggestions */}
                          <AnimatePresence>
                            {showSuggestions && addressSuggestions.length > 0 && (
                              <motion.div
                                ref={suggestionsRef}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto"
                              >
                                {addressSuggestions.map((suggestion, index) => (
                                  <button
                                    key={index}
                                    onClick={() => selectAddress(suggestion)}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm border-b border-gray-100 last:border-b-0 focus:bg-gray-50 focus:outline-none transition-colors"
                                  >
                                    {suggestion}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}

                    {/* Étape 2: Parking */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <Label className="text-sm font-medium text-gray-700 mb-4 block">
                            Espace de parking disponible
                          </Label>
                          <div className="flex gap-4">
                            <Button
                              variant={simulationData.hasParkingSpace ? "default" : "outline"}
                              onClick={() => updateSimulationData('hasParkingSpace', true)}
                              className="flex-1"
                            >
                              Oui
                            </Button>
                            <Button
                              variant={!simulationData.hasParkingSpace ? "default" : "outline"}
                              onClick={() => updateSimulationData('hasParkingSpace', false)}
                              className="flex-1"
                            >
                              Non
                            </Button>
                          </div>
                        </div>

                        {simulationData.hasParkingSpace ? (
                          <>
                            <div>
                              <Label className="text-sm font-medium text-gray-700">
                                Exposition solaire de votre parking
                              </Label>
                              <Select 
                                value={simulationData.parkingExposure} 
                                onValueChange={(value: 'sunny' | 'partial' | 'shaded') => updateSimulationData('parkingExposure', value)}
                              >
                                <SelectTrigger className="mt-2 bg-white border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" style={{ boxShadow: 'none' }}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                                  <SelectItem value="sunny">☀️ Ensoleillé</SelectItem>
                                  <SelectItem value="partial">🌤️ Moyennement ensoleillé</SelectItem>
                                  <SelectItem value="shaded">🌥️ Ombragé</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                          </>
                        ) : (
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                              <div className="text-sm text-red-800">
                                <p className="font-semibold mb-1">⚠️ Espace de parking requis</p>
                                <p>Pour installer des carports solaires, vous devez disposer d'un espace de parking. Sans espace de parking, il n'est pas possible de continuer la simulation.</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Étape 3: Consommation */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        {simulationData.hasParkingSpace ? (
                          <>
                            <div>
                              <Label htmlFor="monthlyElectricityBill" className="text-sm font-medium text-gray-700">
                                Votre facture d'électricité mensuelle EDF
                              </Label>
                              <div className="relative mt-2">
                                <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                  id="monthlyElectricityBill"
                                  type="number"
                                  placeholder="150"
                                  value={simulationData.monthlyElectricityBill}
                                  onChange={(e) => updateSimulationData('monthlyElectricityBill', Number(e.target.value))}
                                  className="pl-10 pr-16 bg-white border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                  style={{ boxShadow: 'none' }}
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                                  €/mois*
                                </span>
                              </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                                <div className="text-sm text-green-800">
                                  <p className="font-semibold mb-1">💰 Économies avec ABE</p>
                                  <p>20,59% d'économies sur votre facture = {Math.round(simulationData.monthlyElectricityBill * 0.2059)}€/mois</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                                <div className="text-sm text-blue-800">
                                  <p className="font-semibold mb-1">🏠 Carport ABE inclus</p>
                                  <p>6 kWc de production + 2 places de parking gratuites</p>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="text-center py-8">
                            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              Espace de parking requis
                            </h3>
                            <p className="text-gray-600 mb-4">
                              Pour installer un carport solaire, vous devez disposer d'un espace de parking.
                            </p>
                            <Button 
                              onClick={() => setCurrentStep(2)}
                              className="bg-primary hover:bg-primary/90 text-white"
                            >
                              Retour à l'étape précédente
                            </Button>
                          </div>
                        )}
                      </div>
                    )}


                    {/* Étape 4: Résultats */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            Vos économies avec ABE
                          </h3>
                          
                          <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                              <span className="text-gray-600">Facture EDF actuelle</span>
                              <div className="text-right">
                                <div className="text-gray-900">{simulationData.monthlyElectricityBill}€/mois</div>
                                <div className="text-xs text-gray-500">+ abonnement</div>
                              </div>
                            </div>
                            
                            {(() => {
                              const previewResults = calculateSimulationResults()
                              return previewResults ? (
                                <>
                                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-600">Prochaine facture EDF</span>
                                    <div className="text-right">
                                      <div className="text-gray-900">0€/mois</div>
                                      <div className="text-xs text-gray-500">(abonnement uniquement)</div>
                                    </div>
                                  </div>
                                  
                                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-600">Prochaine facture ABE</span>
                                    <div className="text-right">
                                      <div className="text-gray-900">{Math.round((simulationData.monthlyElectricityBill - previewResults.monthlyConsumptionSavings) * 100) / 100}€/mois</div>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-0 -mx-6">
                                    <div className="flex justify-between items-center py-3 bg-green-50 px-6">
                                      <span className="text-gray-700 font-medium">💰 Économies sur facture (25%)</span>
                                      <span className="font-bold text-green-600 text-lg">{Math.round(previewResults.monthlyConsumptionSavings * 12)}€/an</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center py-3 bg-blue-50 px-6">
                                      <span className="text-gray-700 font-medium">☀️ Revenus solaire (6 kWc)</span>
                                      <span className="font-bold text-blue-600 text-lg">{Math.round(previewResults.monthlySolarRevenue * 12)}€/an</span>
                                    </div>
                                  </div>
                                </>
                              ) : null
                            })()}
                          </div>
                        </div>
                        
                        {(() => {
                          const previewResults = calculateSimulationResults()
                          return previewResults ? (
                            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 text-center">
                              <div className="flex items-center justify-center gap-3 mb-2">
                                <span className="text-2xl">💎</span>
                                <h4 className="text-xl font-bold text-gray-900">Total des bénéfices</h4>
                              </div>
                              <div className="text-4xl font-bold text-primary mb-2">
                                {Math.round(previewResults.totalMonthlyBenefits * 12)}€/an
                              </div>
                              <p className="text-gray-600 text-sm">
                                Soit {Math.round(previewResults.totalMonthlyBenefits)}€ par mois
                              </p>
                            </div>
                          ) : null
                        })()}
                        
                      </div>
                    )}

                    {/* Étape 5: Email */}
                    {currentStep === 5 && (
                      <div className="space-y-6">
                        {!isEmailSent ? (
                          <>
                            <div className="text-center">
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Recevez votre étude personnalisée
                              </h3>
                              <p className="text-gray-600 mb-8">
                                Nous vous enverrons un email détaillé avec tous les calculs de votre simulation.
                              </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                              <div>
                                <Label htmlFor="contactEmail" className="text-sm font-medium text-gray-700">
                                  Votre adresse email
                                </Label>
                                <div className="relative mt-2">
                                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                  <Input
                                    id="contactEmail"
                                    type="email"
                                    placeholder="votre@email.com"
                                    value={simulationData.contactEmail}
                                    onChange={(e) => updateSimulationData('contactEmail', e.target.value)}
                                    className="pl-10 bg-white border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                    style={{ boxShadow: 'none' }}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              Email envoyé avec succès !
                            </h3>
                            <p className="text-gray-600 mb-6">
                              Votre étude personnalisée a été envoyée à <strong>{simulationData.contactEmail}</strong>
                            </p>
                            <p className="text-sm text-gray-500">
                              Vérifiez votre boîte de réception et vos spams.
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>

                {/* Disclaimer - Centré horizontalement */}
                <div className="flex justify-center mt-4">
                  <p className="text-xs text-gray-500 max-w-md">
                    *Estimations fondées sur les tarifs 2025 : EDF 0.1952€/kWh vs ABE 0.155€/kWh. 
                    Carport 6 kWc inclus gratuitement. Revenus solaire : 0.08€/kWh vs 0.04€/kWh EDF.
                  </p>
                </div>

                {/* Navigation - Centré horizontalement */}
                <div className="flex justify-center items-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Précédent
                  </Button>

                  <Button 
                    onClick={nextStep}
                    disabled={isCalculating || (currentStep === 2 && !simulationData.hasParkingSpace) || (currentStep === 5 && (!simulationData.contactEmail || isEmailSent))}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCalculating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Calcul en cours...
                      </>
                    ) : currentStep === 5 ? (
                      <>
                        {isEmailSent ? 'Terminé' : 'Envoyer mon étude par email'}
                        <Mail className="w-4 h-4" />
                      </>
                    ) : currentStep === 2 && !simulationData.hasParkingSpace ? (
                      <>
                        Espace de parking requis
                        <AlertCircle className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Suivant
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne droite - Informations interactives */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 items-center justify-center p-12 relative">
          {/* Éléments visuels */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl" />
          
          {/* Contenu interactif */}
          <div className="relative z-10 text-white max-w-lg">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                {rightContent.title}
              </h2>
              
              <div className="space-y-6">
                {rightContent.content.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Indicateur de progression */}
              <div className="mt-8 flex items-center justify-center gap-2">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      currentStep > step.id ? 'bg-green-400' : 
                      currentStep === step.id ? 'bg-primary' : 'bg-white/30'
                    )}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </>
  )
}