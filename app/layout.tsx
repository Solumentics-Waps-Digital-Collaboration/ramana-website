import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'RAMANA S.A. - Distributeur Officiel CANAL+ | Cameroun & Centrafrique',
  description: 'RAMANA S.A., partenaire grossiste CANAL+ depuis 1995. Expert dans la distribution des bouquets CANAL+ au Cameroun et en Centrafrique. Votre Télé N\'a Pas de Limite. Disponibilité et promptitude garanties.',
  keywords: ['CANAL+', 'RAMANA', 'télévision', 'Cameroun', 'Centrafrique', 'bouquets TV', 'satellite', 'distributeur CANAL+', 'abonnement CANAL+'],
  authors: [{ name: 'RAMANA S.A.' }],
  creator: 'RAMANA S.A.',
  publisher: 'RAMANA S.A.',
  openGraph: {
    title: 'RAMANA S.A. - Distributeur Officiel CANAL+',
    description: 'Partenaire grossiste CANAL+ depuis 1995. Distribution des bouquets CANAL+ au Cameroun et en Centrafrique.',
    url: 'https://ramanasa.com',
    siteName: 'RAMANA S.A.',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAMANA S.A. - Distributeur Officiel CANAL+',
    description: 'Partenaire grossiste CANAL+ depuis 1995 au Cameroun et en Centrafrique',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}