'use client'

import { militaryFont } from '../utils/fonts'
import { Instagram, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'

const reels = [
  "https://www.instagram.com/reel/DDqAxurOGDy",
  "https://www.instagram.com/reel/DDXm68NSD3m",
  "https://www.instagram.com/reel/DChkmaMyi8Y"
]

export function InstagramReels() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading of iframes
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="reels" className="py-20 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <h2 className={`${militaryFont.className} text-4xl md:text-5xl text-[#006400] mb-12 text-center flex items-center justify-center gap-4`}>
          <Instagram className="w-10 h-10" aria-hidden="true" />
          ACCIÓN EN VIVO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reels.map((reel, index) => {
            // Ensure the URL ends with /embed for proper iframe embedding
            const embedUrl = reel.endsWith('/embed') ? reel : `${reel}/embed`
            
            return (
              <div key={index} className="aspect-[9/16] w-full max-w-[350px] mx-auto relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <Loader2 className="w-8 h-8 animate-spin text-[#006400]" />
                  </div>
                )}
                <iframe
                  src={embedUrl}
                  className="w-full h-full rounded-lg shadow-lg"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                  title={`Instagram Reel ${index + 1}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

