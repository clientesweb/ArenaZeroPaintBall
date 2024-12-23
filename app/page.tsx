import { Hero } from '../components/hero'
import { Services } from '../components/services'
import { Gallery } from '../components/gallery'
import { InstagramReels } from '../components/instagram-reels'
import { Pricing } from '../components/pricing'
import { Testimonials } from '../components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <InstagramReels />
      <Pricing />
      <Testimonials />
    </>
  )
}

