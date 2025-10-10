import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/providers/smooth-scroll-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABE Metasystems | Autoconsommation Collective & Énergie Solaire",
  description: "Réduisez votre facture d'électricité grâce à l'autoconsommation collective. Produisez et consommez localement votre énergie solaire avec vos voisins. Solutions pour particuliers, entreprises et collectivités.",
  keywords: [
    "autoconsommation collective",
    "économiser facture électricité",
    "énergie solaire",
    "production énergie locale",
    "panneau solaire",
    "réduction facture edf",
    "transition énergétique",
    "énergie renouvelable",
    "communauté énergétique",
    "autoconsommation énergétique"
  ],
  authors: [{ name: "ABE Metasystems" }],
  creator: "ABE Metasystems",
  publisher: "ABE Metasystems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abe-metasystems.com'),
  openGraph: {
    title: "ABE Metasystems | Autoconsommation Collective",
    description: "Réduisez votre facture d'électricité grâce à l'autoconsommation collective",
    url: 'https://abe-metasystems.com',
    siteName: 'ABE Metasystems',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ABE Metasystems | Autoconsommation Collective",
    description: "Réduisez votre facture d'électricité grâce à l'autoconsommation collective",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
