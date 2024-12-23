'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { militaryFont } from '../utils/fonts'

const images = [
  {
    src: "/paintball.jpg",
    alt: "Jugadores de paintball en acción"
  },
  {
    src: "/paintball1.jpg",
    alt: "Marcadora de paintball de cerca"
  },
  {
    src: "/paintball2.jpg",
    alt: "Equipo de protección de paintball"
  },
  {
    src: "/paintball3.jpg",
    alt: "Equipo de paintball en formación"
  },
  {
    src: "/paintball4.jpg",
    alt: "Jugador de paintball en posición de disparo"
  },
  {
    src: "/paintball5.jpg",
    alt: "Campo de paintball con obstáculos"
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-square"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
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
              className="relative w-full h-full max-w-2xl max-h-2xl flex items-center justify-center"
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

