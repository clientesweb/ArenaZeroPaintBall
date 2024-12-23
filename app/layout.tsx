import { Navigation } from '../components/navigation'
import { Footer } from '../components/footer'
import { WhatsAppButton } from '../components/whatsapp-button'
import { Preloader } from '../components/preloader'
import '../styles/globals.css'

export const metadata = {
  title: 'Arena Zero Paintball',
  description: 'La mejor experiencia de paintball en Calamuchita',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Preloader />
        <Navigation />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}

