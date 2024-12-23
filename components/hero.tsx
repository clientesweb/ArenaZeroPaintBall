'use client'

import { useEffect, useRef, useState } from 'react'
import { militaryFont } from '../utils/fonts'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Target, Users, Trophy } from 'lucide-react'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../utils/constants'

const features = [
  {
    icon: Target,
    text: "Precisión"
  },
  {
    icon: Users,
    text: "Trabajo en Equipo"
  },
  {
    icon: Trophy,
    text: "Victoria"
  }
]

const heroMessages = [
  {
    title: 'Experiencia Táctica',
    subtitle: 'Campos diseñados para el combate estratégico'
  },
  {
    title: 'Equipamiento Pro',
    subtitle: 'La mejor tecnología en paintball'
  },
  {
    title: 'Acción Total',
    subtitle: 'Adrenalina pura en cada partida'
  }
]

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % heroMessages.length)
    }, 5000)

    return () => clearInterval(messageInterval)
  }, [])

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className={`object-cover w-full h-full transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/paintball-video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-4 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          {/* Title */}
          <motion.h1 
            className={`${militaryFont.className} text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            ARENA ZERO
            <span className="block text-green-500">PAINTBALL</span>
          </motion.h1>

          {/* Features */}
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

          {/* Changing Messages */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8 h-24" // Fixed height to prevent layout shift
            >
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {heroMessages[currentMessage].title}
              </h2>
              <p className="text-gray-200 text-lg md:text-xl">
                {heroMessages[currentMessage].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                ¡RESERVA AHORA!
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Message Navigation */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-center gap-4">
            {heroMessages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMessage(index)}
                className={`w-16 h-2 rounded-full transition-all duration-300 ${
                  index === currentMessage 
                    ? 'bg-green-500 w-24' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Ver mensaje ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

