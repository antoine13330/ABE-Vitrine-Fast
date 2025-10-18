import { Metadata } from 'next'
import Navbar from '@/components/app/navbar'

export const metadata: Metadata = {
  title: 'A propos | ABE Metasystems',
  description: 'Decouvrez ABE Metasystems, producteur d energie national engage dans la transition energetique et l autoconsommation collective.',
}

export default function AboutPage() {
  return (
    <>
    
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl pt-20 pb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            A propos <span className="text-primary">d ABE</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Notre Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                ABE Metasystems est un producteur d'énergie national engage dans la démocratisation
                de l autoconsommation collective. Notre mission est de permettre a chaque francais
                de participer activement a la transition energetique tout en realisant des economies
                substantielles sur leur facture d electricite.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Notre Vision</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Nous croyons en un avenir ou l energie est produite localement, partagee equitablement,
                et accessible a tous. L autoconsommation collective permet de creer des communautes
                energetiques solidaires ou chacun gagne : producteurs et consommateurs.
              </p>
            </section>

            <section className="mb-12" aria-labelledby="values-heading">
              <h2 id="values-heading" className="text-3xl font-bold text-white mb-6">Nos Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
                {[
                  { title: 'Innovation', desc: 'Solutions energetiques de pointe' },
                  { title: 'Solidarite', desc: 'Economie locale et collaborative' },
                  { title: 'Transparence', desc: 'Prix justes et communication claire' },
                  { title: 'Durabilite', desc: 'Engagement pour l environnement' }
                ].map((value, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10" role="listitem">
                    <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-white/70">{value.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
