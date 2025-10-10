'use client'

import Navbar from '@/components/app/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, Briefcase, ExternalLink } from 'lucide-react'

export default function ProfessionnelPage() {
  const handleAccessHub = () => {
    window.open('https://hub.abe-metasystems.com', '_blank')
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Espace <span className="text-primary">Professionnel</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Accédez à nos outils professionnels et gérez vos projets énergétiques en toute simplicité
            </p>
          </div>

          {/* Avantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Building2,
                title: 'Pour les Entreprises',
                description: 'Optimisez votre consommation et réduisez vos coûts énergétiques'
              },
              {
                icon: Users,
                title: 'Pour les Collectivités',
                description: 'Créez des communautés énergétiques locales et durables'
              },
              {
                icon: Briefcase,
                title: 'Pour les Installateurs',
                description: 'Accédez à nos outils de gestion de projets et de suivi'
              }
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                <CardHeader>
                  <div className="bg-primary/20 rounded-lg p-4 w-fit mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  <CardDescription className="text-white/70">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Accès Hub */}
          <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-3xl p-12 border border-primary/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Accédez à votre espace professionnel
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Connectez-vous à votre compte pour accéder à ABE Prodigy et ABE Thunder,
                gérer vos projets et suivre vos installations en temps réel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  onClick={handleAccessHub}
                  className="group"
                >
                  Se connecter
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleAccessHub}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 group"
                >
                  Créer un compte
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>

              <p className="text-sm text-white/50">
                Vous serez redirigé vers hub.abe-metasystems.com
              </p>
            </div>
          </div>

          {/* Services inclus */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Services inclus dans votre espace
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'ABE Prodigy',
                  features: ['Suivi temps réel', 'Tableaux de bord', 'Analyses prédictives', 'Alertes personnalisées']
                },
                {
                  title: 'ABE Thunder',
                  features: ['Tests automatisés', 'Rapports de conformité', 'Gestion de projet', 'Support prioritaire']
                },
                {
                  title: 'Gestion de flotte',
                  features: ['Vue d\'ensemble', 'Maintenance préventive', 'Historique complet', 'Export de données']
                },
                {
                  title: 'Support technique',
                  features: ['Assistance dédiée', 'Formation continue', 'Documentation complète', 'Mises à jour régulières']
                }
              ].map((service, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/70">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


