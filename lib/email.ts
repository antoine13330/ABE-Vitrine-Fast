import nodemailer from 'nodemailer'

// Configuration SMTP réutilisable
export const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

// Vérification de la connexion SMTP
export const verifyEmailConnection = async () => {
  try {
    const transporter = createEmailTransporter()
    await transporter.verify()
    return true
  } catch (error) {
    console.error('Erreur de connexion SMTP:', error)
    return false
  }
}

// Configuration par défaut des emails
export const getDefaultEmailConfig = () => ({
  from: `"ABE Metasystems" <${process.env.EMAIL_FROM || process.env.SMTP_USER}>`,
  replyTo: process.env.EMAIL_TO || 'contact@abe-metasystems.com',
})

// Types pour les emails
export interface EmailTemplate {
  subject: string
  html: string
  text: string
}

export interface SimulationEmailData {
  simulationData: {
    address: string
    hasParkingSpace: boolean
    parkingExposure: 'sunny' | 'partial' | 'shaded'
    monthlyElectricityBill: number
    contactEmail: string
  }
  simulationResult: {
    monthlyConsumptionSavings: number
    monthlySolarRevenue: number
    totalMonthlyBenefits: number
    totalSolarPower: number
    consumptionSavingsRate: number
    solarRevenueIncrease: number
    carportPower: number
  }
}
