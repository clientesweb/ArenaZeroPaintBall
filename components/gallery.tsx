'use client'

import { useState } from 'react'
import Image from 'next/image'
import { militaryFont } from '../utils/fonts'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: "https://images.unsplash.com/photo-1551892589-865f69869476?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRiYWxsfGVufDB8fDB8fHww",
    alt: "Jugadores de paintball en acción"
  },
  {
    src: "https://images.unsplash.com/photo-1560269507-c4e1d17d0f7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Marcadora de paintball de cerca"
  },
  {
    src: "https://images.unsplash.com/photo-1619204715997-1367fe5812f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Equipo de protección de paintball"
  },
  {
    src: "https://images.unsplash.com/photo-1610140752669-c69e7e09367c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Equipo de paintball en formación"
  },
  {
    src: "https://images.unsplash.com/photo-1599134842279-fe807d97f104?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Jugador de paintball en posición de disparo"
  },
  {
    src: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpbnRiYWxsfGVufDB8fDB8fHww",
    alt: "Campo de paintball con obstáculos"
  }
]

export function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="galeria" className="py-20 bg-[#006400] relative z-10">
      <div className="container mx-auto px-4">
        <h2 className={`${militaryFont.className} text-4xl md:text-5xl text-white mb-12 text-center`}>
          GALERÍA DE COMBATE
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl z-20"
            />
          </div>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`aspect-w-1 aspect-h-1 cursor-pointer ${
                index === currentImage ? 'ring-4 ring-white' : ''
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

