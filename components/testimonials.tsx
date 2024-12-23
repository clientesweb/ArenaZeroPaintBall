'use client'

import { useEffect, useState } from 'react'
import { militaryFont } from '../utils/fonts'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: "Juan Pérez",
    role: "Jugador frecuente",
    comment: "Arena Zero ofrece la mejor experiencia de paintball que he tenido. Los campos son increíbles y el personal es muy profesional. ¡Altamente recomendado!",
    rating: 5
  },
  {
    name: "María González",
    role: "Organizadora de eventos corporativos",
    comment: "Organizamos un evento de team building aquí y fue un éxito total. El equipo de Arena Zero se encargó de todo y nuestros empleados lo pasaron genial.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    role: "Principiante entusiasta",
    comment: "Como novato, estaba un poco nervioso, pero los instructores fueron muy pacientes y me ayudaron a sentirme cómodo. ¡Ahora estoy enganchado!",
    rating: 4
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonios" className="py-20 bg-[#006400] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className={`${militaryFont.className} text-4xl md:text-5xl mb-12 text-center`}>
          LO QUE DICEN NUESTROS SOLDADOS
        </h2>
        <div className="relative h-64">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-green-800 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonials[currentIndex].comment}"</p>
                </div>
                <div>
                  <p className="font-bold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-300">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

