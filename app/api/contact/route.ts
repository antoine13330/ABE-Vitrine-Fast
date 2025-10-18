import { NextRequest, NextResponse } from 'next/server'
import { createEmailTransporter, getDefaultEmailConfig } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validation des champs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Configuration du transporteur SMTP (optimisée)
    const transporter = createEmailTransporter()
    const emailConfig = getDefaultEmailConfig()

    // Vérifier la connexion SMTP
    await transporter.verify()

    // Configuration de l'email
    const mailOptions = {
      from: emailConfig.from,
      to: process.env.EMAIL_TO || 'contact@abe-metasystems.com',
      replyTo: email,
      subject: `Nouveau message de ${name} - Site ABE Metasystems`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #DC143C; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #DC143C; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">📧 Nouveau message de contact</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nom complet</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">Téléphone</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>Ce message a été envoyé depuis le formulaire de contact du site ABE Metasystems</p>
                <p>Date : ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nouveau message de contact - ABE Metasystems

Nom: ${name}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}

Message:
${message}

---
Date: ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}
      `,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Message envoyé avec succès !' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}

