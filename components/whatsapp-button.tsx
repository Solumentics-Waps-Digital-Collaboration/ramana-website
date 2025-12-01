"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

interface WhatsAppButtonProps {
  tooltip: string
}

export function WhatsAppButton({ tooltip }: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://wa.me/237699759900"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{tooltip}</span>
      </div>

      {/* Button */}
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />

        {/* Button */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors">
          <MessageCircle className="h-7 w-7" />
        </div>
      </div>
    </a>
  )
}
