'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface UnsubscribePageProps {
  params: {
    unsubscribeId: string
  }
}

export default function UnsubscribePage({ params }: UnsubscribePageProps) {
  const [subscriber, setSubscriber] = useState<{ email: string } | null>(null)
  const [status, setStatus] = useState<'loading' | 'found' | 'not-found' | 'confirming' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (params.unsubscribeId) {
      fetchSubscriber(params.unsubscribeId)
    }
  }, [params.unsubscribeId])

  const fetchSubscriber = async (unsubscribeId: string) => {
    try {
      const response = await fetch(`/api/unsubscribe/${unsubscribeId}`)
      const data = await response.json()
      
      if (response.ok) {
        setSubscriber(data)
        setStatus('found')
      } else {
        setStatus('not-found')
        setMessage(data.error || 'Lien de désinscription invalide')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Erreur de connexion')
    }
  }

  const handleUnsubscribe = async () => {
    if (!params.unsubscribeId) return
    
    setStatus('confirming')
    
    try {
      const response = await fetch(`/api/unsubscribe/${params.unsubscribeId}`, {
        method: 'DELETE'
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setStatus('success')
        setMessage('Vous avez été désinscrit avec succès')
      } else {
        setStatus('error')
        setMessage(data.error || 'Erreur lors de la désinscription')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Erreur de connexion')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        {/* Newsletter Cartouche */}
        <div className="border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 border border-white/20 rounded-full"
            >
              <Mail className="w-4 h-4 text-red-500" />
              <span className="text-white/70 text-sm font-medium">Désinscription</span>
            </motion.div>

            <motion.h1 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {status === 'success' ? 'Désinscription confirmée' : 'Se désinscrire'}
            </motion.h1>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {status === 'loading' && (
              <div className="text-center">
                <motion.div
                  className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-gray-400">Vérification en cours...</p>
              </div>
            )}

            {status === 'not-found' && (
              <div className="text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <p className="text-gray-400 mb-6">{message}</p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour à l'accueil
                </Link>
              </div>
            )}

            {status === 'found' && (
              <div className="text-center">
                <p className="text-gray-400 mb-6">
                  Souhaitez-vous vous désinscrire de la newsletter ABE ?
                </p>
                <p className="text-white font-medium mb-8">
                  Email : <span className="text-red-500">{subscriber?.email}</span>
                </p>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleUnsubscribe}
                    className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all"
                  >
                    Oui, me désinscrire
                  </button>
                  <Link 
                    href="/"
                    className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all text-center"
                  >
                    Non, garder l'abonnement
                  </Link>
                </div>
              </div>
            )}

            {status === 'confirming' && (
              <div className="text-center">
                <motion.div
                  className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-gray-400">Désinscription en cours...</p>
              </div>
            )}

            {status === 'success' && (
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-gray-400 mb-6">{message}</p>
                <p className="text-gray-500 text-sm mb-8">
                  Vous ne recevrez plus nos newsletters. Vous pouvez vous réinscrire à tout moment.
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour à l'accueil
                </Link>
              </div>
            )}

            {status === 'error' && (
              <div className="text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <p className="text-gray-400 mb-6">{message}</p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour à l'accueil
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}



