'use client'

import Navbar from '@/components/app/navbar'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Pré-remplir le message depuis l'URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const message = urlParams.get('message')
    if (message) {
      setFormData(prev => ({ ...prev, message: decodeURIComponent(message) }))
    }
  }, [])

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message || 'Message envoyé ! Nous vous répondrons dans les plus brefs délais.')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        toast.error(data.error || 'Une erreur est survenue lors de l\'envoi du message.')
      }
    } catch (error) {
      console.error('Erreur:', error)
      toast.error('Impossible de se connecter au serveur. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
     
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            Contactez-<span className="text-primary">nous</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulaire de contact">
                <div>
                  <label htmlFor="contact-name" className="block text-white mb-2">Nom complet</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Jean Dupont"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-white mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="jean.dupont@email.com"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-white mb-2">Téléphone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="06 12 34 56 78"
                    aria-label="Téléphone (optionnel)"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={5}
                    placeholder="Votre message..."
                    required
                    aria-required="true"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </div>

            {/* Informations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-lg p-3">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white text-lg">contact@abe-metasystems.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-lg p-3">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Téléphone</p>
                      <p className="text-white text-lg">06 99 95 67 20</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-lg p-3">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Adresse</p>
                      <p className="text-white text-lg">
                        9 Impasse de la Tour<br />
                        13330 Pélissane, France
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-8 border border-primary/30">
                <h3 className="text-xl font-bold text-white mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-white/80" role="list">
                  <p role="listitem"><span className="font-medium">Lundi - Vendredi:</span> 9h00 - 18h00</p>
                  <p role="listitem"><span className="font-medium">Samedi/Dimanche:</span> Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
