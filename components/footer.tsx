import { militaryFont } from '../utils/fonts'
import { Facebook, Instagram, PhoneIcon as WhatsApp } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../utils/constants'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#006400] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="Arena Zero Paintball"
              width={150}
              height={150}
              className="mb-4"
            />
            <p className="text-gray-300 text-center md:text-left">
              La mejor experiencia de paintball en Calamuchita. ¡Vive la adrenalina en un ambiente seguro y profesional!
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className={`${militaryFont.className} text-xl mb-4`}>CONTACTO</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Calamuchita, Córdoba</li>
              <li>Tel: +54 354-654-5506</li>
              <li>info@arenazero.com</li>
              <li>Horarios: Sábados y Domingos 10:00 - 18:00</li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className={`${militaryFont.className} text-xl mb-4`}>SÍGUENOS</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <WhatsApp className="h-6 w-6" />
              </a>
            </div>
            <div className="text-sm text-gray-300">
              <p className="mb-2">¿Tienes alguna pregunta?</p>
              <p>¡Contáctanos por WhatsApp y te responderemos a la brevedad!</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
          <p>&copy; {currentYear} Arena Zero Paintball. Todos los derechos reservados.</p>
          <p className="mt-2">Powered by Duality Domain</p>
        </div>
      </div>
    </footer>
  )
}

