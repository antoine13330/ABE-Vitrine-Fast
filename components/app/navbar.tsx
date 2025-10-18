'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Linkedin, Twitter, Facebook } from 'lucide-react'
import { Button } from '../ui/button'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Écosystème TruePower™', href: '/ecosysteme' },
  { name: 'Simuler', href: '/simuler' },
  { name: 'Logiciels', href: '/logiciels' },
  { name: 'Professionnel', href: '/professionnel' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Fermer le menu quand on clique ailleurs (desktop uniquement)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobile && menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen && !isMobile) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen, isMobile])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 relative z-[100]" aria-label="Retour à l'accueil - ABE Metasystems">
              <Image
                src="/img/ABE_LOGO/LOGO ABE WEB/abe_logo_64X64.png"
                width={64}
                height={64}
                alt="Logo ABE Metasystems"
              />
            </Link>

            {/* Boutons à droite */}
            <div className="flex items-center gap-4 relative z-[100]">

              {/* Menu Button Container */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors"
                  aria-expanded={menuOpen}
                  aria-controls="navigation-menu"
                  aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                  {menuOpen ? (
                    <>
                      <X size={20} aria-hidden="true" />
                      <span className="text-sm font-semibold uppercase hidden sm:inline">Fermer</span>
                    </>
                  ) : (
                    <>
                      <Menu size={20} aria-hidden="true" />
                      <span className="text-sm font-semibold uppercase hidden sm:inline">Menu</span>
                    </>
                  )}
                </button>

                {/* Menu Dropdown Desktop */}
                <AnimatePresence>
                  {menuOpen && !isMobile && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                      className="absolute top-full right-0 mt-2 z-[95] w-80 bg-zinc-900 rounded-2xl shadow-2xl border border-white/10"
                      id="navigation-menu"
                      role="menu"
                      aria-label="Menu de navigation"
                    >
                      <div className="p-6">
                        {/* Header avec FR/EN */}
                        <div className="flex items-center justify-end gap-3 mb-6 pb-4 border-b border-white/10" role="group" aria-label="Sélection de langue">
                          <button className="text-white font-bold text-sm hover:text-primary transition-colors" aria-label="Français" aria-current="true">
                            FR
                          </button>
                          <span className="text-white/30" aria-hidden="true">|</span>
                          <button className="text-white/50 font-bold text-sm hover:text-primary transition-colors" aria-label="English">
                            EN
                          </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="space-y-2" aria-label="Liens de navigation">
                          {navLinks.map((link, index) => (
                            <motion.div
                              key={link.href}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                              <Link
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="group block py-3 px-4 text-xl font-bold text-white hover:text-primary hover:bg-white/5 rounded-lg transition-all"
                                role="menuitem"
                              >
                                {link.name}
                              </Link>
                            </motion.div>
                          ))}
                        </nav>

                        {/* Footer Section */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="border-t border-white/10 pt-6 mt-6"
                        >
                          {/* Social Links */}
                          <div className="flex items-center gap-4 mb-6" role="group" aria-label="Réseaux sociaux">
                            <a
                              href="https://www.linkedin.com/company/abe-metasystems/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-red-400 transition-colors"
                              aria-label="Suivez-nous sur LinkedIn"
                            >
                              <Linkedin size={20} aria-hidden="true" />
                            </a>
                            <a
                              href="https://twitter.com/abe_metasystems"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-red-400 transition-colors"
                              aria-label="Suivez-nous sur Twitter"
                            >
                              <Twitter size={20} aria-hidden="true" />
                            </a>
                            <a
                              href="https://www.facebook.com/abe.metasystems"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-red-400 transition-colors"
                              aria-label="Suivez-nous sur Facebook"
                            >
                              <Facebook size={20} aria-hidden="true" />
                            </a>
                          </div>

                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile Full Screen */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[95] bg-zinc-900 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation mobile"
          >
            <div className="h-full flex flex-col p-6">
              {/* Bouton de fermeture mobile */}
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/img/ABE_LOGO/LOGO ABE WEB/abe_logo_64X64.png"
                  width={48}
                  height={48}
                  alt="Logo ABE Metasystems"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X size={20} aria-hidden="true" />
                  <span className="text-sm font-semibold uppercase">Fermer</span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center" aria-label="Liens de navigation principaux">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group block py-4 text-4xl sm:text-5xl font-black text-white hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="border-t border-white/10 pt-6 mt-6"
              >
                {/* Social Links */}
                <div className="flex items-center gap-4 mb-6" role="group" aria-label="Réseaux sociaux">
                  <a
                    href="#"
                    className="text-primary hover:text-red-400 transition-colors"
                    aria-label="Suivez-nous sur LinkedIn"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-red-400 transition-colors"
                    aria-label="Suivez-nous sur Twitter"
                  >
                    <Twitter size={20} aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-red-400 transition-colors"
                    aria-label="Suivez-nous sur Facebook"
                  >
                    <Facebook size={20} aria-hidden="true" />
                  </a>
                </div>

                {/* Language Selector (mobile) */}
                <div className="flex items-center gap-4 mb-6" role="group" aria-label="Sélection de langue">
                  <button className="text-white font-bold uppercase text-sm hover:text-primary transition-colors" aria-label="Français" aria-current="true">
                    FR
                  </button>
                  <span className="text-white/30" aria-hidden="true">|</span>
                  <button className="text-white/50 font-bold uppercase text-sm hover:text-primary transition-colors" aria-label="English">
                    EN
                  </button>
                </div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


