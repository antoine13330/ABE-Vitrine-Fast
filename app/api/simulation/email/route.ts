import { NextRequest, NextResponse } from 'next/server'
import { createEmailTransporter, getDefaultEmailConfig, SimulationEmailData } from '@/lib/email'

// Types déjà définis dans lib/email.ts

export async function POST(request: NextRequest) {
  try {
    const { simulationData, simulationResult }: SimulationEmailData = await request.json()

    // Validation des données
    if (!simulationData?.contactEmail || !simulationResult) {
      return NextResponse.json(
        { error: 'Données de simulation manquantes' },
        { status: 400 }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(simulationData.contactEmail)) {
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

    // Template email magnifique pour les résultats de simulation
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Votre simulation carports solaires - ABE Metasystems</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background-color: #f8fafc;
          }
          .container { 
            max-width: 500px; 
            margin: 0 auto; 
            background: white; 
            border-radius: 8px; 
            overflow: hidden; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }
          .header { 
            background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%); 
            color: white; 
            padding: 24px 20px;
            text-align: center;
          }
          .logo { 
            width: 48px;
            height: 48px;
            margin: 0 auto 12px auto;
            display: block;
          }
          .header h1 { 
            font-size: 20px; 
            margin: 0 0 8px 0;
            font-weight: 600;
            color: white;
          }
          .header p { 
            font-size: 14px; 
            margin: 0; 
            opacity: 0.9;
          }
          .content { 
            padding: 24px 20px; 
          }
          .summary-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 20px;
          }
          .summary-card {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 1px solid #0ea5e9;
            border-radius: 8px;
            padding: 16px;
            text-align: center;
          }
          .summary-card.green {
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            border-color: #22c55e;
          }
          .summary-card .amount {
            font-size: 24px;
            font-weight: 700;
            color: #0ea5e9;
            margin-bottom: 6px;
          }
          .summary-card.green .amount {
            color: #22c55e;
          }
          .summary-card .label {
            font-size: 12px;
            color: #64748b;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.3px;
          }
          .details-section {
            background: #f8fafc;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 20px;
          }
          .details-section h3 {
            color: #1e293b;
            font-size: 16px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid #e2e8f0;
          }
          .detail-row .detail-value {
            text-align: right !important;
          }
          .detail-value {
            text-align: right !important;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .detail-label {
            color: #64748b;
            font-size: 12px;
            font-weight: 500;
          }
          .detail-value {
            color: #1e293b;
            font-size: 12px;
            font-weight: 600;
          }
          .collective-benefits {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 1px solid #0ea5e9;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 20px;
          }
          .collective-benefits h3 {
            color: #0c4a6e;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
          }
          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .benefit-item {
            text-align: center;
          }
          .benefit-number {
            font-size: 18px;
            font-weight: 700;
            color: #0c4a6e;
            margin-bottom: 3px;
          }
          .benefit-label {
            font-size: 10px;
            color: #0369a1;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.3px;
          }
          .cta-section {
            text-align: center;
            background: #f1f5f9;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 16px;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            margin: 8px;
            transition: transform 0.2s;
          }
          .cta-button:hover {
            transform: translateY(-2px);
          }
          .footer {
            background: #1e293b;
            color: white;
            padding: 30px;
            text-align: center;
          }
          .footer h4 {
            margin-bottom: 15px;
            font-size: 18px;
          }
          .footer p {
            color: #94a3b8;
            font-size: 14px;
            margin-bottom: 10px;
          }
          .footer .contact-info {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #334155;
          }
          .footer .contact-info a {
            color: #60a5fa;
            text-decoration: none;
          }
          .icon {
            width: 20px;
            height: 20px;
            display: inline-block;
          }
          @media (max-width: 600px) {
            .summary-cards, .benefits-grid {
              grid-template-columns: 1fr;
            }
            .container {
              margin: 10px;
            }
            .header, .content, .footer {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header -->
          <div class="header">
            <img src="https://abe-metasystems.com/img/ABE_LOGO/LOGO%20ABE%20WEB/abe_logo_64X64.png" alt="ABE Metasystems" class="logo">
            <h1>🚗⚡ Votre simulation carports solaires</h1>
            <p>Autoconsommation collective avec carport ABE 6 kWc</p>
          </div>

          <!-- Content -->
          <div class="content">
            <!-- Summary Cards -->
            <div class="summary-cards">
              <div class="summary-card green">
                <div class="amount">${Math.round(simulationResult.monthlyConsumptionSavings * 12)}€</div>
                <div class="label">Économies annuelles</div>
              </div>
              <div class="summary-card blue">
                <div class="amount">${Math.round(simulationResult.monthlySolarRevenue * 12)}€</div>
                <div class="label">Revenus solaire annuels</div>
              </div>
              <div class="summary-card primary">
                <div class="amount">${Math.round(simulationResult.totalMonthlyBenefits * 12)}€</div>
                <div class="label">Bénéfices totaux annuels</div>
              </div>
            </div>

            <!-- Project Details -->
            <div class="details-section">
              <h3>📊 Détails de votre projet</h3>
              <div class="detail-row">
                <span class="detail-label">Installation</span>
                <span class="detail-value">Carport ABE 6 kWc (gratuit)</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Production totale</span>
                <span class="detail-value">${simulationResult.totalSolarPower} kWc</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Économies sur facture</span>
                <span class="detail-value">25% moins cher qu'EDF</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Revenus solaire</span>
                <span class="detail-value">2x plus qu'EDF (0.08€/kWh)</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Total des bénéfices</span>
                <span class="detail-value" style="color: #22c55e; font-size: 18px; text-align: right;">${Math.round(simulationResult.totalMonthlyBenefits * 12)}€/an</span>
              </div>
            </div>

            <!-- ABE Benefits -->
            <div class="collective-benefits">
              <h3>⚡ Avantages du réseau communautaire ABE</h3>
              <div class="benefits-grid">
                <div class="benefit-item">
                  <div class="benefit-number">25%</div>
                  <div class="benefit-label">Moins cher qu'EDF</div>
                </div>
                <div class="benefit-item">
                  <div class="benefit-number">2x</div>
                  <div class="benefit-label">Plus pour votre solaire</div>
                </div>
                <div class="benefit-item">
                  <div class="benefit-number">6 kWc</div>
                  <div class="benefit-label">Carport gratuit inclus</div>
                </div>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="cta-section">
              <h3 style="margin-bottom: 20px; color: #1e293b;">🎯 Prêt à passer à l'action ?</h3>
              <p style="color: #64748b; margin-bottom: 25px;">
                Notre équipe d'experts vous accompagne dans votre projet de carports solaires.
              </p>
              <a href="mailto:contact@abe-metasystems.com?subject=Demande de devis - Simulation carports" class="cta-button">
                📧 Demander un devis personnalisé
              </a>
              <a href="tel:+33123456789" class="cta-button" style="background: linear-gradient(135deg, #059669 0%, #047857 100%);">
                📞 Appeler un expert
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <h4>ABE Metasystems</h4>
            <p>Spécialiste de l'autoconsommation collective depuis 2018</p>
            <p>📍 ${simulationData.address}</p>
            
            <div class="contact-info">
              <p><strong>Contact :</strong></p>
              <p>📧 <a href="mailto:contact@abe-metasystems.com">contact@abe-metasystems.com</a></p>
              <p>📞 <a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
              <p>🌐 <a href="https://abe-metasystems.com">abe-metasystems.com</a></p>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #334155; font-size: 12px; color: #94a3b8;">
              <p>Cette simulation a été générée le ${new Date().toLocaleString('fr-FR', { 
                timeZone: 'Europe/Paris',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
              <p>Les estimations sont basées sur les données moyennes du marché français et peuvent varier selon les conditions locales.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // Version texte pour les clients qui ne supportent pas HTML
    const emailText = `
VOTRE SIMULATION CARPORTS SOLAIRES - ABE METASYSTEMS
====================================================

Bonjour,

Voici votre simulation personnalisée pour votre carport solaire ABE :

📊 RÉSULTATS PRINCIPAUX
- Économies annuelles : ${Math.round(simulationResult.monthlyConsumptionSavings * 12)}€
- Revenus solaire annuels : ${Math.round(simulationResult.monthlySolarRevenue * 12)}€
- Bénéfices totaux annuels : ${Math.round(simulationResult.totalMonthlyBenefits * 12)}€

🚗 DÉTAILS DU PROJET
- Installation : Carport ABE 6 kWc (gratuit)
- Production totale : ${simulationResult.totalSolarPower} kWc
- Économies sur facture : 25% moins cher qu'EDF
- Revenus solaire : 2x plus qu'EDF (0.08€/kWh)

⚡ AVANTAGES DU RÉSEAU COMMUNITAIRE ABE
- 25% moins cher qu'EDF
- 2x plus pour votre solaire
- 6 kWc carport gratuit inclus

🎯 PROCHAINES ÉTAPES
Contactez notre équipe d'experts pour un devis personnalisé :
- Email : contact@abe-metasystems.com
- Téléphone : +33 1 23 45 67 89
- Site web : https://abe-metasystems.com

Localisation : ${simulationData.address}

---
ABE Metasystems - Spécialiste de l'autoconsommation collective
Simulation générée le ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}
    `

    // Configuration de l'email
    const mailOptions = {
      from: emailConfig.from,
      to: simulationData.contactEmail,
      replyTo: emailConfig.replyTo,
      subject: `🚗⚡ Votre simulation carports solaires - ${simulationResult.monthlySavings}€/mois d'économies`,
      html: emailHtml,
      text: emailText,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email de simulation envoyé avec succès !' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email de simulation:', error)
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}
