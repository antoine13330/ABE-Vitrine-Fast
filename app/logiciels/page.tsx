import { Metadata } from 'next'
import Navbar from '@/components/app/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code2, Zap, BarChart3, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Logiciels | ABE Metasystems',
  description: 'Découvrez nos solutions logicielles : ABE Prodigy pour la gestion énergétique et ABE Thunder pour l\'automatisation industrielle.',
}

export default function LogicielsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Nos <span className="text-primary">Logiciels</span>
          </h1>
          
          <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
            Des solutions logicielles puissantes pour optimiser votre gestion énergétique
            et automatiser vos processus industriels
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* ABE Prodigy */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-white">ABE Prodigy</CardTitle>
                </div>
                <CardDescription className="text-white/70 text-lg">
                  Plateforme de gestion et d'optimisation énergétique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Placeholder Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-transparent rounded-xl flex items-center justify-center">
                  <p className="text-white/50 text-center px-4">
                    [Screenshot ABE Prodigy]
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Fonctionnalités clés</h3>
                  <ul className="space-y-3">
                    {[
                      'Suivi en temps réel de votre production solaire',
                      'Analyse de consommation détaillée',
                      'Prévisions énergétiques IA',
                      'Gestion de l\'autoconsommation collective',
                      'Rapports et statistiques avancés'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80">
                        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" size="lg">
                  Découvrir ABE Prodigy
                </Button>
              </CardContent>
            </Card>

            {/* ABE Thunder */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-white">ABE Thunder</CardTitle>
                </div>
                <CardDescription className="text-white/70 text-lg">
                  Solution d'automatisation des tests industriels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Placeholder Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-transparent rounded-xl flex items-center justify-center">
                  <p className="text-white/50 text-center px-4">
                    [Screenshot ABE Thunder]
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Fonctionnalités clés</h3>
                  <ul className="space-y-3">
                    {[
                      'Automatisation complète des tests',
                      'Interface intuitive no-code',
                      'Tests de qualité industrielle',
                      'Rapports de conformité automatisés',
                      'Intégration CI/CD'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80">
                        <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" size="lg">
                  Découvrir ABE Thunder
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/20 to-transparent rounded-3xl p-12 border border-primary/30 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à optimiser votre gestion énergétique ?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour une démonstration personnalisée de nos solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default">
                Demander une démo
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Voir les tarifs
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


