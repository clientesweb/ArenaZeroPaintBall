import { militaryFont } from '../utils/fonts'
import { Instagram } from 'lucide-react'

const reels = [
  "https://www.instagram.com/reel/ABC123/",
  "https://www.instagram.com/reel/DEF456/",
  "https://www.instagram.com/reel/GHI789/"
]

export function InstagramReels() {
  return (
    <section id="reels" className="py-20 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <h2 className={`${militaryFont.className} text-4xl md:text-5xl text-[#006400] mb-12 text-center flex items-center justify-center`}>
          <Instagram className="w-10 h-10 mr-4" />
          ACCIÓN EN VIVO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <div key={index} className="aspect-[9/16] w-full max-w-[350px] mx-auto">
              <iframe
                src={`${reel}embed`}
                className="w-full h-full rounded-lg shadow-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

