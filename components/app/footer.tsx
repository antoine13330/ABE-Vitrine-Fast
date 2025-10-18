'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800 pt-20 pb-10" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Colonne 1 - Logo et description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Retour à l'accueil - ABE Metasystems">
              <Image
                src="/img/ABE_LOGO/LOGO ABE WEB/abe_logo_64X64.png"
                width={48}
                height={48}
                alt="Logo ABE Metasystems"
                className="w-12 h-12"
              />
              <span className="text-white font-bold text-xl">
                ABE Metasystems
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Producteur d'énergie national engagé dans la transition énergétique
              et l'autoconsommation collective.
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <nav aria-label="Navigation du pied de page">
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'À propos', href: '/about' },
                { name: 'Simuler', href: '/simuler' },
                { name: 'Logiciels', href: '/logiciels' },
                { name: 'Professionnel', href: '/professionnel' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="mailto:contact@abe-metasystems.com"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                  aria-label="Nous envoyer un email à contact@abe-metasystems.com"
                >
                  contact@abe-metasystems.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="tel:+330699956720"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                  aria-label="Nous appeler au 06 99 95 67 20"
                >
                  06 99 95 67 20
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="text-gray-400 text-sm not-italic">
                  9 Impasse de la Tour
                  <br />
                  13330 Pélissane, France
                </address>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Réseaux sociaux */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-4" role="group" aria-label="Réseaux sociaux">
              <a
                href="https://www.facebook.com/abe.metasystems"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-primary hover:text-white transition-all p-3 rounded-xl group"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/abe-metasystems/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-primary hover:text-white transition-all p-3 rounded-xl group"
                aria-label="Suivez-nous sur LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/abe_metasystems"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-primary hover:text-white transition-all p-3 rounded-xl group"
                aria-label="Suivez-nous sur Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" aria-hidden="true" />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              Rejoignez notre communauté pour suivre nos actualités et innovations.
            </p>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm" suppressHydrationWarning>
                © {new Date().getFullYear()} ABE Metasystems. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Ce site utilise uniquement des cookies essentiels au fonctionnement du site.
                <Link 
                  href="/politique-confidentialite#cookies" 
                  className="underline hover:text-primary transition-colors ml-1"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
            <nav className="flex gap-6" aria-label="Liens légaux">
              <Link
                href="/mentions-legales"
                className="text-gray-500 hover:text-primary transition-colors text-sm"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-500 hover:text-primary transition-colors text-sm"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/cgv"
                className="text-gray-500 hover:text-primary transition-colors text-sm"
              >
                CGV
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

