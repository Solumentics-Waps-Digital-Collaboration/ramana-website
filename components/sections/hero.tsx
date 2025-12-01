"use client"

import { Button } from "@/components/ui/button"
import { Satellite, Store, Globe, Zap, ChevronDown, MessageCircle } from "lucide-react"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

interface HeroSectionProps {
  dict: Dictionary
  locale: Locale
}

const badges = [
  { key: "badge1", icon: Satellite },
  { key: "badge2", icon: Store },
  { key: "badge3", icon: Globe },
  { key: "badge4", icon: Zap },
] as const

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/satellite-dish-installation-with-family-watching-t.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/50 to-transparent" />

      {/* Animated elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <Satellite className="h-64 w-64 text-white animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-balance">{dict.hero.headline}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100/90 sm:text-xl leading-relaxed text-pretty">
          {dict.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
            asChild
          >
            <a href="#packages">{dict.hero.ctaPrimary}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 py-6 text-lg"
            asChild
          >
            <a href="https://wa.me/237699759900" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {dict.hero.ctaSecondary}
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.key}
                className="flex flex-col items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm p-4 border border-white/20"
              >
                <Icon className="h-6 w-6 text-blue-200" />
                <span className="text-sm font-medium text-white">{dict.hero[badge.key]}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
