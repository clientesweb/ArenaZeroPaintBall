'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { militaryFont } from '../utils/fonts'

const images = [
  {
    src: "https://images.unsplash.com/photo-1551892589-865f69869476?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRiYWxsfGVufDB8fDB8fHww",
    alt: "Jugadores de paintball en acción",
    width: 4,
    height: 3
  },
  {
    src: "https://images.unsplash.com/photo-1560269507-c4e1d17d0f7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Marcadora de paintball de cerca",
    width: 3,
    height: 4
  },
  {
    src: "https://images.unsplash.com/photo-1619204715997-1367fe5812f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Equipo de protección de paintball",
    width: 4,
    height: 3
  },
  {
    src: "https://images.unsplash.com/photo-1610140752669-c69e7e09367c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Equipo de paintball en formación",
    width: 3,
    height: 2
  },
  {
    src: "https://images.unsplash.com/photo-1599134842279-fe807d97f104?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Jugador de paintball en posición de disparo",
    width: 3,
    height: 4
  },
  {
    src: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpbnRiYWxsfGVufDB8fDB8fHww",
    alt: "Campo de paintball con obstáculos",
    width: 16,
    height: 9
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev === null ? null : (prev + 1) % images.length))
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length))
  }

  return (
    <section id="galeria" className="py-20 bg-[#006400]">
      <div className="container mx-auto px-4">
        <h2 className={`${militaryFont.className} text-4xl md:text-5xl text-white mb-12 text-center`}>
          GALERÍA DE COMBATE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400 * (image.height / image.width)}
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                layout="fill"
                objectFit="contain"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 transition-all"
                onClick={prevImage}
              >
                &lt;
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 transition-all"
                onClick={nextImage}
              >
                &gt;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

