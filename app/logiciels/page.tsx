import { Metadata } from "next";
import Navbar from "@/components/app/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Zap,
  BarChart3,
  Shield,
  Users,
  TrendingUp,
  Battery,
  Plug,
  DollarSign,
  Network,
  TestTube,
  Settings,
  CheckCircle,
  Clock,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Nos Logiciels | ABE Metasystems",
  description:
    "Découvrez nos solutions logicielles : ABE Prodigy pour la gestion énergétique et ABE Thunder pour l'automatisation industrielle.",
};

export default function LogicielsPage() {
  return (
    <>
    
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-7xl py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Nos solutions<span className="text-primary"> Logiciels</span>
          </h1>

          <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
            Des solutions logicielles puissantes pour optimiser votre gestion
            énergétique et automatiser vos processus industriels
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* ABE Prodigy */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="bg-primary/20 rounded-lg p-3"
                    aria-hidden="true"
                  >
                    <Network className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-white">
                    ABE Prodigy
                  </CardTitle>
                </div>
                <CardDescription className="text-white/70 text-lg">
                  Gestion des opérations d'ACC et optimisation énergétique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Placeholder Image */}
                <div
                  className="overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-transparent rounded-xl flex items-center justify-center"
                  role="img"
                  aria-label="Aperçu du logiciel ABE Prodigy"
                >
                  <Image
                    src="/img/software/prodigy.png"
                    alt="ABE Prodigy"
                    width={400}
                    height={400}
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    Fonctionnalités clés
                  </h3>
                  <ul
                    className="space-y-3"
                    aria-label="Liste des fonctionnalités d'ABE Prodigy"
                  >
                    {[
                      {
                        icon: Users,
                        text: "Gestion des utilisateurs et des ACC (autoconsommation collective)",
                      },
                      {
                        icon: TrendingUp,
                        text: "Suivi détaillé des flux énergétiques en temps réel",
                      },
                      {
                        icon: BarChart3,
                        text: "Retour détaillé sur consommation et production pour chaque utilisateur",
                      },
                      {
                        icon: DollarSign,
                        text: "Tarifs d'achat et de revente plus avantageux qu'EDF",
                      },
                      {
                        icon: Battery,
                        text: "Gestion intelligente des batteries et stockage",
                      },
                      {
                        icon: Plug,
                        text: "Optimisation des prises et appareils connectés",
                      },
                      {
                        icon: Network,
                        text: "Optimisation de l'utilisation du réseau de la collectivité",
                      },
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <feature.icon
                          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  aria-label="Découvrir ABE Prodigy en détail"
                >
                  Découvrir ABE Prodigy
                </Button>
              </CardContent>
            </Card>

            {/* ABE Thunder */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="bg-primary/20 rounded-lg p-3"
                    aria-hidden="true"
                  >
                    <TestTube className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-white">
                    ABE Thunder
                  </CardTitle>
                </div>
                <CardDescription className="text-white/70 text-lg">
                  Plateforme de tests automatisés pour l'industrie
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Thunder Image */}
                <div
                  className="overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-transparent rounded-xl flex items-center justify-center"
                  role="img"
                  aria-label="Aperçu du logiciel ABE Thunder"
                >
                  <Image
                    src="/img/software/thunder.webp"
                    alt="ABE Thunder"
                    width={400}
                    height={400}
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    Fonctionnalités clés
                  </h3>
                  <ul
                    className="space-y-3"
                    aria-label="Liste des fonctionnalités d'ABE Thunder"
                  >
                    {[
                      {
                        icon: TestTube,
                        text: "Tests automatisés complets pour équipements industriels",
                      },
                      {
                        icon: Settings,
                        text: "Configuration et paramétrage simplifié des tests",
                      },
                      {
                        icon: CheckCircle,
                        text: "Validation automatique de conformité et qualité",
                      },
                      {
                        icon: Clock,
                        text: "Exécution de tests en continu et programmés",
                      },
                      {
                        icon: Wrench,
                        text: "Maintenance prédictive et diagnostic avancé",
                      },
                      {
                        icon: BarChart3,
                        text: "Rapports détaillés et analyses de performance",
                      },
                      {
                        icon: Code2,
                        text: "Intégration API et connectivité industrielle",
                      },
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <feature.icon
                          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  aria-label="Découvrir ABE Thunder en détail"
                >
                  Découvrir ABE Thunder
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <section
            className="bg-gradient-to-r from-primary/20 to-transparent rounded-3xl p-12 border border-primary/30 text-center"
            aria-labelledby="cta-heading"
          >
            <h2 id="cta-heading" className="text-3xl font-bold text-white mb-4">
              Prêt à optimiser votre gestion énergétique ?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour une démonstration personnalisée de nos
              solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="default"
                  aria-label="Demander une démonstration de nos logiciels"
                >
                  Demander une démo
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
