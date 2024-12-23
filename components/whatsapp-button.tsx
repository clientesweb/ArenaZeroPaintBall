import Image from 'next/image'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../utils/constants'

export function WhatsAppButton() {
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200"
      aria-label="Reservar por WhatsApp"
    >
      <Image
        src="/logo.png"
        alt="Arena Zero Paintball Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
    </a>
  )
}

