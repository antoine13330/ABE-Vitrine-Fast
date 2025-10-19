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

    </section>
  )
}
