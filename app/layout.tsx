import { Navigation } from '../components/navigation'
import { Footer } from '../components/footer'
import { WhatsAppButton } from '../components/whatsapp-button'
import { Preloader } from '../components/preloader'
import '../styles/globals.css'

export const metadata = {
  title: 'Arena Zero Paintball | La mejor experiencia en Calamuchita',
  description: 'Vive la adrenalina del paintball en Santa Rosa de Calamuchita. Campos temáticos, equipamiento profesional y eventos grupales. ¡Reserva ahora!',
  keywords: 'paintball, Calamuchita, Santa Rosa de Calamuchita, actividades al aire libre, deportes extremos, eventos grupales',
  openGraph: {
    title: 'Arena Zero Paintball | Aventura en Calamuchita',
    description: 'Experimenta la emoción del paintball en el corazón de Calamuchita. Campos únicos y equipamiento de primera.',
    url: 'https://www.arenazero.com',
    siteName: 'Arena Zero Paintball',
    images: [
      {
        url: 'https://www.arenazero.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arena Zero Paintball | Adrenalina en Calamuchita',
    description: 'Descubre la mejor experiencia de paintball en Santa Rosa de Calamuchita. ¡Reserva tu aventura ahora!',
    images: ['https://www.arenazero.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.arenazero.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#006400" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Preloader />
        <Navigation />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}

