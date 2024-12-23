'use client'

import { useEffect, useState } from 'react'
import { militaryFont } from '../utils/fonts'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../utils/constants'

const heroImages = [
  'https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&q=80',  // Action shot with players
  'https://images.unsplash.com/photo-1551892589-865f69869476?auto=format&fit=crop&q=80',  // Close up tactical shot
  'https://images.unsplash.com/photo-1610140752669-c69e7e09367c?auto=format&fit=crop&q=80'   // Team formation shot
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
    <section className="relative h-[90vh]">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative h-full"
          >
            <Image
              src={heroImages[currentImage]}
              alt={`Paintball action ${currentImage + 1}`}
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`${militaryFont.className} text-6xl md:text-8xl mb-6 tracking-wider drop-shadow-lg`}>
            ARENA ZERO
            <span className="block text-green-500 text-shadow">PAINTBALL</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-12 font-bold text-shadow-lg">
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
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-green-500 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

