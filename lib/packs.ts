import { 
  Zap, 
  Home, 
  Battery, 
  Building2, 
  Plug, 
  Sun, 
  Car, 
  Monitor, 
  Smartphone 
} from "lucide-react"

export interface Pack {
  id: string
  title: string
  price: number
  priceLabel: string
  saving: string
  slogan: string
  icon: any
  features: string[]
  highlight: boolean
  description: string
  power: number // Puissance en kW
  carports: number // Nombre de carports
  installation: string
  maintenance: string
  warranty: string
}

export const packs: Pack[] = [
  {
    id: "starter",
    title: "STARTER",
    price: 170,
    priceLabel: "170€",
    saving: "120 €/an",
    slogan: "Maîtrisez votre consommation",
    icon: Zap,
    features: [
      "Installation rapide",
      "Retour sur investissement",
    ],
    highlight: false,
    description: "Pack d'entrée de gamme pour débuter votre transition énergétique",
    power: 3, // 3kW
    carports: 0.5, // 0.5 carport (panneaux sur toit)
    installation: "1-2 jours",
    maintenance: "Annuelle",
    warranty: "10 ans"
  },
  {
    id: "family",
    title: "FAMILY",
    price: 0, // Sur mesure
    priceLabel: "0€",
      saving: "750 €/an | 75% du prix EDF",
    slogan: "Produisez votre énergie",
    icon: Home,
    features: [
      "Solution collective",
      "Accompagnement complet",
    ],
    highlight: true,
    description: "Solution complète pour familles avec autoconsommation collective",
    power: 6, // 6kW
    carports: 1, // 1 carport
    installation: "3-5 jours",
    maintenance: "Semestrielle",
    warranty: "15 ans"
  },
  {
    id: "confort",
    title: "CONFORT",
    price: 1500,
    priceLabel: "1500€",
    saving: "450 €/an",
    slogan: "Stockez votre énergie",
    icon: Battery,
    features: [
      "Stockage intelligent",
      "Autonomie renforcée",
      "Gestion optimale",
    ],
    highlight: false,
    description: "Pack premium avec stockage d'énergie pour une autonomie maximale",
    power: 9, // 9kW
    carports: 1.5, // 1.5 carports
    installation: "5-7 jours",
    maintenance: "Trimestrielle",
    warranty: "20 ans"
  }
]

// Fonction pour obtenir un pack par ID
export const getPackById = (id: string): Pack | undefined => {
  return packs.find(pack => pack.id === id)
}

// Fonction pour obtenir les packs recommandés selon le nombre de carports
export const getRecommendedPacks = (desiredCarports: number): Pack[] => {
  if (desiredCarports <= 1) {
    return [packs[0], packs[1]] // Starter + Family
  } else if (desiredCarports <= 2) {
    return [packs[1], packs[2]] // Family + Confort
  } else {
    return [packs[2]] // Confort pour plus de 2 carports
  }
}

// Fonction pour calculer le prix total d'un pack
export const calculatePackPrice = (pack: Pack, numberOfCarports: number): number => {
  if (pack.price === 0) {
    // Sur mesure - calcul basé sur le nombre de carports
    return numberOfCarports * 18000 // 18k€ par carport
  }
  return pack.price * numberOfCarports
}


