import Navbar from "@/components/app/navbar/Navbar"
import { Button } from "@/components/ui/button";
import { ContainerTrackBeam } from "@/components/ui/containerTrackBeam"
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="relative">
            <Navbar mode="absolute" />
            <div className="relative xl:px-24 py-24 px-0 md:px-8">
                <ContainerTrackBeam>

                    <div className="max-w-3xl mx-auto px-12">
                        <h1 className="text-4xl font-semibold mb-10">À Propos de Notre Entreprise</h1>
                        <p className="mb-6">
                            <strong>
                                Qui Sommes-Nous ?
                            </strong> Nous sommes une entreprise innovante spécialisée dans la conception et la fabrication de solutions énergétiques intelligentes. Notre mission est de simplifier la vie quotidienne de nos clients en proposant des produits fiables, durables et faciles à utiliser.
                        </p>
                        <p className="mb-6">
                            <strong>
                                Notre Histoire :
                            </strong> Fondée par une équipe passionnée, notre entreprise est née d’une réflexion approfondie sur les besoins du marché et les lacunes existantes. Nous avons choisi de combiner notre expertise dans les batteries, les prises connectées et les connecteurs Linky pour créer des solutions complètes et adaptées aux besoins de nos clients en terme de stockage / gestion energétique.
                        </p>
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Nos Valeurs</h2>
                            <ul className="list-disc pl-6">
                                <li>Innovation : Nous sommes constamment à la recherche de nouvelles idées pour améliorer la vie de nos utilisateurs. Notre approche créative nous permet de développer des produits uniques et performants.</li>
                                <li>Qualité : La qualité est au cœur de tout ce que nous faisons. Nos produits sont rigoureusement testés pour garantir leur fiabilité et leur durabilité.</li>
                                <li>Service Client : Nous sommes à l&apos;écoute de nos clients et nous nous efforçons de répondre à leurs besoins. Notre équipe dévouée est là pour vous accompagner à chaque étape.</li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Nos Produits</h2>
                            <p className="mb-4 ml-4">
                                <strong>Batteries</strong>: Nos batteries sont conçues pour offrir une alimentation fiable et durable. Que ce soit pour alimenter des appareils électroniques, des véhicules électriques ou des systèmes de stockage d’énergie, nos batteries répondent aux normes les plus strictes.
                            </p>
                            <p className="mb-4 ml-4">
                                <strong>Prises Connectées</strong>: Nos prises connectées vous permettent de contrôler vos appareils électriques à distance. Allumez ou éteignez vos lumières, votre chauffage ou vos appareils multimédias en un seul clic depuis votre smartphone. De plus, notre suivi de consommation énergétique vous aide à économiser de l’énergie et à réduire vos factures.
                            </p>
                            <p className="ml-4">
                                <strong>Connecteurs Linky</strong>: Les connecteurs Linky sont au cœur de notre écosystème. Ils permettent une communication fluide entre nos produits, garantissant une expérience utilisateur optimale. Que ce soit pour la maison, le bureau ou l’industrie, nos connecteurs Linky sont là pour simplifier votre quotidien.
                            </p>
                        </div>
                        <p className="mb-4">
                            <strong>Contactez-Nous :</strong> Vous avez des questions ou des commentaires ? N’hésitez pas à <Link href="/Contact" passHref>
                                <Button variant="link" className="px-0">
                                    nous contacter
                                </Button>
                            </Link> . Notre équipe se fera un plaisir de vous assister.
                        </p>
                        <p>
                            Nous sommes fiers de notre entreprise et de notre engagement envers nos clients. Merci de nous faire confiance.
                        </p>
                    </div>
                </ContainerTrackBeam>
            </div>
        </div>
    );
}