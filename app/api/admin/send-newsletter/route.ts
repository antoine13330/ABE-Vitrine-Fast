import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { subject, content } = await request.json()
    
    if (!subject || !content) {
      return NextResponse.json({ error: 'Sujet et contenu requis' }, { status: 400 })
    }
    
    // Récupérer tous les abonnés actifs
    const subscribers = await db.query(
      'SELECT email FROM newsletter_subscribers WHERE is_active = true'
    )
    
    // Ici vous pouvez intégrer avec un service d'email comme SendGrid, Resend, etc.
    // Pour l'instant, on simule l'envoi
    console.log(`Envoi de newsletter à ${subscribers.rows.length} abonnés`)
    console.log(`Sujet: ${subject}`)
    console.log(`Contenu: ${content}`)
    
    return NextResponse.json({ 
      success: true, 
      message: `Newsletter envoyée à ${subscribers.rows.length} abonnés`,
      subscribersCount: subscribers.rows.length
    })
    
  } catch (error) {
    console.error('Send newsletter error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}




