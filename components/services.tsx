import { militaryFont } from '../utils/fonts'
import { Shield, Users, Trophy, Target, Map, Calendar } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Shield,
    title: "Equipamiento Profesional",
    description: "Marcadoras de última generación, máscaras de protección y equipamiento táctico completo para tu seguridad. Nuestro equipo es mantenido y actualizado regularmente para garantizar la mejor experiencia.",
    image: "https://images.unsplash.com/photo-1560269507-c4e1d17d0f7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    icon: Users,
    title: "Eventos Grupales",
    description: "Organización de eventos corporativos, despedidas de soltero, cumpleaños y competencias. Ofrecemos paquetes personalizados para grupos de todos los tamaños, con opciones de catering y servicios adicionales.",
    image: "https://images.unsplash.com/photo-1610140752669-c69e7e09367c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    icon: Trophy,
    title: "Diferentes Modalidades",
    description: "Escenarios variados con distintas modalidades de juego: Captura la bandera, Eliminación, Supervivencia, Asalto a la base, y misiones personalizadas. Cada modalidad ofrece un desafío único para poner a prueba tus habilidades.",
    image: "https://images.unsplash.com/photo-1551892589-865f69869476?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRiYWxsfGVufDB8fDB8fHww"
  },
  {
    icon: Target,
    title: "Instrucción Táctica",
    description: "Instructores capacitados que te guiarán en estrategias y tácticas de juego para maximizar tu experiencia. Aprende técnicas de movimiento, comunicación en equipo y uso efectivo del terreno.",
    image: "https://images.unsplash.com/photo-1599134842279-fe807d97f104?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    icon: Map,
    title: "Campos Temáticos",
    description: "Disfruta de nuestros campos temáticos que simulan diferentes entornos de combate: urbano, selvático, y fortificaciones. Cada campo ofrece desafíos únicos y requiere estrategias específicas.",
    image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpbnRiYWxsfGVufDB8fDB8fHww"
  },
  {
    icon: Calendar,
    title: "Torneos y Ligas",
    description: "Participa en nuestros torneos mensuales y únete a la liga de paintball de Calamuchita. Compite contra otros equipos, mejora tus habilidades y gana premios emocionantes.",
    image: "https://images.unsplash.com/photo-1619204715997-1367fe5812f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D"
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`${militaryFont.className} text-4xl md:text-5xl text-[#006400] mb-6`}>
            NUESTROS SERVICIOS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Arena Zero Paintball, ofrecemos una experiencia completa de combate simulado con los mejores equipos y campos de la región. Descubre todo lo que tenemos para ofrecerte:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <service.icon className="w-12 h-12 text-[#006400] mb-4 mx-auto" />
                <h3 className={`${militaryFont.className} text-xl mb-4 text-center`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

