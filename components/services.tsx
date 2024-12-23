'use client'

import { militaryFont } from '../utils/fonts'
import { Shield, Users, Trophy, Target, Map, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Shield,
    title: "Equipamiento Profesional",
    description: "Marcadoras de última generación, máscaras de protección y equipamiento táctico completo para tu seguridad.",
  },
  {
    icon: Users,
    title: "Eventos Grupales",
    description: "Organización de eventos corporativos, despedidas de soltero, cumpleaños y competencias con paquetes personalizados.",
  },
  {
    icon: Trophy,
    title: "Diferentes Modalidades",
    description: "Escenarios variados: Captura la bandera, Eliminación, Supervivencia, Asalto a la base, y misiones personalizadas.",
  },
  {
    icon: Target,
    title: "Instrucción Táctica",
    description: "Instructores capacitados que te guiarán en estrategias y tácticas de juego para maximizar tu experiencia.",
  },
  {
    icon: Map,
    title: "Campos Temáticos",
    description: "Campos que simulan diferentes entornos de combate: urbano, selvático, y fortificaciones para desafíos únicos.",
  },
  {
    icon: Calendar,
    title: "Torneos y Ligas",
    description: "Participa en torneos mensuales y únete a la liga de paintball de Calamuchita. Compite y gana premios emocionantes.",
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-[#006400] to-[#004d00]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`${militaryFont.className} text-4xl md:text-5xl text-white mb-6`}>
            NUESTROS SERVICIOS
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            En Arena Zero Paintball, ofrecemos una experiencia completa de combate simulado con los mejores equipos y campos de la región. Descubre todo lo que tenemos para ofrecerte:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#006400] rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`${militaryFont.className} text-xl ml-4 text-[#006400]`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
                <div className="bg-[#006400] p-4">
                  <button className="w-full text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-[#004d00]">
                    Más Información
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

