'use client'

import { useEffect, useState } from 'react'
import { militaryFont } from '../utils/fonts'
import { Button } from '../components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../utils/constants'

const heroImages = [
  '/paintball-action-1.jpg',
  '/paintball-action-2.jpg',
  '/paintball-action-3.jpg',
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={heroImages[currentImage]}
            alt={`Paintball action ${currentImage + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className={`${militaryFont.className} text-6xl md:text-8xl mb-6 tracking-wider`}>
            ARENA ZERO
            <span className="block text-green-500">PAINTBALL</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-12 font-bold">
            ADRENALINA • ESTRATEGIA • VICTORIA
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 text-xl md:text-2xl rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              ¡RESERVA AHORA!
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? 'bg-green-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

