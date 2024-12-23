import { militaryFont } from '../utils/fonts'
import { Shield, Users, Trophy, Target, Map, Calendar } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Shield,
    title: "Equipamiento Profesional",
    description: "Marcadoras de última generación, máscaras de protección y equipamiento táctico completo para tu seguridad. Nuestro equipo es mantenido y actualizado regularmente para garantizar la mejor experiencia.",
    image: "https://images.unsplash.com/photo-1623939012339-c5f7430afe35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    icon: Users,
    title: "Eventos Grupales",
    description: "Organización de eventos corporativos, despedidas de soltero, cumpleaños y competencias. Ofrecemos paquetes personalizados para grupos de todos los tamaños, con opciones de catering y servicios adicionales.",
    image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    icon: Trophy,
    title: "Diferentes Modalidades",
    description: "Escenarios variados con distintas modalidades de juego: Captura la bandera, Eliminación, Supervivencia, Asalto a la base, y misiones personalizadas. Cada modalidad ofrece un desafío único para poner a prueba tus habilidades.",
    image: "https://images.unsplash.com/photo-1626253836391-9a96da7d3b9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    icon: Target,
    title: "Instrucción Táctica",
    description: "Instructores capacitados que te guiarán en estrategias y tácticas de juego para maximizar tu experiencia. Aprende técnicas de movimiento, comunicación en equipo y uso efectivo del terreno.",
    image: "https://images.unsplash.com/photo-1655635949348-953b0e3c140a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    icon: Map,
    title: "Campos Temáticos",
    description: "Disfruta de nuestros campos temáticos que simulan diferentes entornos de combate: urbano, selvático, y fortificaciones. Cada campo ofrece desafíos únicos y requiere estrategias específicas.",
    image: "https://images.unsplash.com/photo-1533005346585-01796f94e3e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    icon: Calendar,
    title: "Torneos y Ligas",
    description: "Participa en nuestros torneos mensuales y únete a la liga de paintball de Calamuchita. Compite contra otros equipos, mejora tus habilidades y gana premios emocionantes.",
    image: "https://images.unsplash.com/photo-1593766788306-28561086694b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-white rounded-lg shadow-lg overflow-hidden`}
            >
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-[#006400] mr-4" />
                  <h3 className={`${militaryFont.className} text-2xl`}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">
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

