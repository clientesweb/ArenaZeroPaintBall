'use client'

import { useEffect, useState } from 'react'
import { militaryFont } from '../utils/fonts'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight, Target, Users, Trophy } from 'lucide-react'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../utils/constants'

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1610140752669-c69e7e09367c?auto=format&fit=crop&q=80',
    title: 'Experiencia Táctica',
    subtitle: 'Campos diseñados para el combate estratégico'
  },
  {
    url: 'https://images.unsplash.com/photo-1551892589-865f69869476?auto=format&fit=crop&q=80',
    title: 'Equipamiento Pro',
    subtitle: 'La mejor tecnología en paintball'
  },
  {
    url: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&q=80',
    title: 'Acción Total',
    subtitle: 'Adrenalina pura en cada partida'
  }
]

const features = [
  { icon: Target, text: "Precisión" },
  { icon: Users, text: "Trabajo en Equipo" },
  { icon: Trophy, text: "Victoria" }
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImage].url}
            alt={heroImages[currentImage].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
        <motion.h1 
          className={`${militaryFont.className} text-6xl md:text-8xl text-white mb-6 tracking-wider text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ARENA ZERO
          <span className="block text-green-500">PAINTBALL</span>
        </motion.h1>

        <motion.div 
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-white">
              <feature.icon className="w-8 h-8 mb-2" />
              <span className="text-sm font-semibold">{feature.text}</span>
            </div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 text-center"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
              {heroImages[currentImage].title}
            </h2>
            <p className="text-gray-200 text-xl">
              {heroImages[currentImage].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              ¡RESERVA AHORA!
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Image Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex justify-center gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImage(index)
                setIsAutoPlaying(false)
              }}
              className={`w-16 h-2 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-green-500 w-24' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

