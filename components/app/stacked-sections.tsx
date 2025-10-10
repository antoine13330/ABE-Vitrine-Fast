'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StackedSectionProps {
  children: ReactNode
  index: number
  total: number
  className?: string
}

function StackedSection({ children, index, total, className }: StackedSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.95]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8]
  )

  return (
    <motion.section
      ref={ref}
      style={{
        scale,
        opacity,
        position: 'sticky',
        top: `${80 + (index * 40)}px`,
        zIndex: total - index,
      }}
      className={cn(
        "min-h-screen rounded-3xl overflow-hidden",
        className
      )}
    >
      {children}
    </motion.section>
  )
}

export default function StackedSections() {
  return (
    <div className="relative bg-black px-4 sm:px-6 lg:px-8 py-20">
      {/* Texte de liaison */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center mb-20 pt-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          ABE, Producteur d'énergie national
          <br />
          <span className="text-primary">vous propose</span>
        </h2>
      </motion.div>

      {/* Bloc 1 */}
      <StackedSection index={0} total={3} className="bg-gradient-to-br from-red-600 to-red-800">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              L'autoconsommation collective
              <br />
              c'est gagner de l'argent{' '}
              <span className="bg-white text-red-600 px-4 py-2 rounded-lg inline-block">
                ENSEMBLE
              </span>
            </h2>
            
            <div className="space-y-6 text-lg sm:text-xl text-white/90">
              <p className="leading-relaxed">
                Cette dernière permet de s'organiser dans des <strong className="text-white">rayons de 10kms</strong> pour
                produire son énergie, la consommer localement et revendre son surplus à vos voisins.
              </p>
              
              <p className="leading-relaxed">
                Ce support à la production nationale permet de <strong className="text-white">baisser votre facture</strong> et
                augmenter votre pouvoir d'achat.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 mt-8">
                <p className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  Que vous soyez :
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Un particulier', 'Une collectivité', 'Un petit commerçant', 'Une entreprise'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-lg"
                    >
                      <span className="w-2 h-2 bg-white rounded-full" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-6 text-center">
                  VOUS ÊTES CONCERNÉS
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </StackedSection>

      {/* Bloc 2 */}
      <StackedSection index={1} total={3} className="bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
              Aujourd'hui, ABE se bat pour
              <br />
              <span className="text-primary">votre pouvoir d'achat</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {[
                {
                  title: 'Réduisant votre facture d'électricité',
                  icon: '💰',
                  description: 'Économisez jusqu\'à 40% sur vos dépenses énergétiques'
                },
                {
                  title: 'Créant un revenu vertueux avec votre voisinage',
                  icon: '🤝',
                  description: 'Produisez et revendez votre surplus d\'énergie localement'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </StackedSection>

      {/* Bloc 3 */}
      <StackedSection index={2} total={3} className="bg-gradient-to-br from-black via-gray-900 to-red-900">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 text-center leading-tight">
              Notre proposition à votre
              <br />
              <span className="text-primary">transition énergétique</span>
            </h2>

            {/* Placeholder pour les propositions ABE (image fournie) */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl flex items-center justify-center">
                <p className="text-white/50 text-lg text-center px-4">
                  [Image des propositions ABE]
                  <br />
                  <span className="text-sm mt-2 block">
                    Starter Pack • Village Énergie • Battery Pack
                  </span>
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                {[
                  { title: 'STARTER PACK', price: '170€', saving: 'Économie: 120€/an' },
                  { title: 'VILLAGE ÉNERGIE', price: 'Sur mesure', saving: 'Économie: 750€/an' },
                  { title: 'BATTERY PACK', price: '500€', saving: 'Économie: 450€/an' }
                ].map((pack, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-black/50 rounded-xl p-6 text-center border border-white/10"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{pack.title}</h4>
                    <p className="text-3xl font-bold text-primary mb-2">{pack.price}</p>
                    <p className="text-sm text-white/60">{pack.saving}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </StackedSection>
    </div>
  )
}


