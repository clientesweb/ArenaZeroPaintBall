import { militaryFont } from '../utils/fonts'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../utils/constants'

const packages = [
  {
    name: "Básico",
    price: "2500",
    features: [
      "Equipamiento completo",
      "50 bolas de pintura",
      "2 horas de juego",
      "Instructor básico",
    ],
    recommended: false
  },
  {
    name: "Comando",
    price: "4000",
    features: [
      "Equipamiento premium",
      "100 bolas de pintura",
      "3 horas de juego",
      "Instructor especializado",
      "Escenarios especiales",
      "Fotos del evento"
    ],
    recommended: true
  },
  {
    name: "Élite",
    price: "5500",
    features: [
      "Equipamiento profesional",
      "200 bolas de pintura",
      "4 horas de juego",
      "Instructor personal",
      "Todos los escenarios",
      "Fotos y video del evento",
      "Snacks y bebidas"
    ],
    recommended: false
  }
]

export function Pricing() {
  return (
    <section id="precios" className="py-20 bg-[#006400] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`${militaryFont.className} text-4xl md:text-5xl mb-6`}>
            PAQUETES Y PRECIOS
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Elige el paquete que mejor se adapte a tu misión. Todos incluyen equipamiento de seguridad completo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                pkg.recommended
                  ? 'bg-white text-gray-900 transform scale-105'
                  : 'bg-green-800'
              }`}
            >
              <h3 className={`${militaryFont.className} text-2xl mb-4 text-center`}>
                {pkg.name}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">${pkg.price}</span>
                <span className="text-sm opacity-80">/persona</span>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full ${
                  pkg.recommended
                    ? 'bg-[#006400] hover:bg-green-700 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                <a
                  href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
                    `${WHATSAPP_MESSAGE} - Paquete ${pkg.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar Ahora
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

