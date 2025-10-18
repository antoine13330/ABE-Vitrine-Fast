import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { unsubscribeId: string } }
) {
  try {
    const subscriber = await prisma.newsletterSubscriber.findUnique({
      where: { unsubscribeId: params.unsubscribeId },
      select: { email: true }
    })
    
    if (!subscriber) {
      return NextResponse.json(
        { error: 'Lien de désinscription invalide ou expiré' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(subscriber)
    
  } catch (error) {
    console.error('Unsubscribe GET error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { unsubscribeId: string } }
) {
  try {
    const subscriber = await prisma.newsletterSubscriber.findUnique({
      where: { unsubscribeId: params.unsubscribeId }
    })
    
    if (!subscriber) {
      return NextResponse.json(
        { error: 'Lien de désinscription invalide ou expiré' },
        { status: 404 }
      )
    }
    
    await prisma.newsletterSubscriber.delete({
      where: { unsubscribeId: params.unsubscribeId }
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Désinscription réussie' 
    })
    
  } catch (error) {
    console.error('Unsubscribe DELETE error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}



