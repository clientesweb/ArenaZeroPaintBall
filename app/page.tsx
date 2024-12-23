import { Navigation } from '../components/navigation'
import { Hero } from '../components/hero'
import { Services } from '../components/services'
import { Gallery } from '../components/gallery'
import { InstagramReels } from '../components/instagram-reels'
import { Pricing } from '../components/pricing'
import { Testimonials } from '../components/testimonials'
import { WhatsAppButton } from '../components/whatsapp-button'
import { Footer } from '../components/footer'
import { Preloader } from '../components/preloader'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <InstagramReels />
        <Pricing />
        <Testimonials />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

