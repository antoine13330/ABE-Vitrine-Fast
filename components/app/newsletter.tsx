'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Merci ! Vous êtes maintenant abonné.')
        setEmail('')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        setStatus('error')
        setMessage(data.error || 'Une erreur est survenue')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 4000)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Erreur de connexion')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 4000)
    }
  }

  return (
    <section className="relative pb-32 pt-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white" aria-labelledby="newsletter-heading">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Newsletter Cartouche */}
          <div className="border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm bg-black shadow-lg">
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 border border-white/20 rounded-full"
              role="img"
              aria-label="Newsletter"
            >
              <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-white/70 text-sm font-medium">Newsletter</span>
            </motion.div>

            <motion.h2 
              id="newsletter-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Restez informé de nos actualités
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Recevez les dernières nouvelles sur la transition énergétique et l'autoconsommation collective
            </motion.p>
          </div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            aria-label="Formulaire d'inscription à la newsletter"
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex-1 relative group">
                <label htmlFor="newsletter-email" className="sr-only">
                  Adresse email pour la newsletter
                </label>
                <input 
                  id="newsletter-email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white/15 transition-all"
                  required
                  disabled={status === 'loading' || status === 'success'}
                  aria-required="true"
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' && message ? 'newsletter-error' : undefined}
                />
                <div className="absolute inset-0 rounded-xl bg-primary/0 group-focus-within:bg-primary/10 transition-colors pointer-events-none" aria-hidden="true" />
              </div>
              
              <motion.button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                whileHover={{ scale: status === 'loading' || status === 'success' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' || status === 'success' ? 1 : 0.98 }}
                aria-label={status === 'loading' ? 'Envoi en cours' : status === 'success' ? 'Inscription réussie' : 'S\'abonner à la newsletter'}
              >
                {status === 'loading' ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      aria-hidden="true"
                    />
                    <span>Envoi...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" aria-hidden="true" />
                    <span>Inscrit !</span>
                  </>
                ) : (
                  <>
                    <span>S'abonner</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </div>
            
            {/* Status message */}
            {message && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border ${
                  status === 'success' 
                    ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                    : 'bg-primary/10 border-primary/20 text-primary'
                }`}
                role="alert"
                aria-live="polite"
                id={status === 'error' ? 'newsletter-error' : undefined}
              >
                {status === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                )}
                <span className="font-medium">{message}</span>
              </motion.div>
            )}

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              role="list"
              aria-label="Avantages de la newsletter"
            >
              <div className="flex items-center gap-2" role="listitem">
                <div className="w-1 h-1 bg-green-500 rounded-full" aria-hidden="true" />
                <span>Gratuit</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <div className="w-1 h-1 bg-green-500 rounded-full" aria-hidden="true" />
                <span>Sans spam</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <div className="w-1 h-1 bg-green-500 rounded-full" aria-hidden="true" />
                <span>Désinscription à tout moment</span>
              </div>
            </motion.div>
          </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
