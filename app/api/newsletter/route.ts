import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    // Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' }, 
        { status: 400 }
      )
    }
    
    // Vérifier si déjà inscrit
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email }
    })
    
    if (existing) {
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit' }, 
        { status: 409 }
      )
    }
    
    // Ajouter à la DB
    const newSubscriber = await prisma.newsletterSubscriber.create({
      data: { email }
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Inscription réussie ! Merci de votre confiance.',
      unsubscribeId: newSubscriber.unsubscribeId
    })
    
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' }, 
      { status: 500 }
    )
  }
}
