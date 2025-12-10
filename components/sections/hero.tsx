"use client"

import Image from "next/image"
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
      {/* Background with Vibrant Gradient - Inspired by Canal+ Flyer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
      
      {/* Vibrant Accent Overlays */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#FDB913]/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#E6007E]/20 to-transparent blur-3xl" />
      
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/satellite-dish-installation-with-family-watching-t.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f3460]/90 via-[#16213e]/60 to-transparent" />

      {/* Animated Satellite Icon Background with Color Pop */}
      <div className="absolute top-20 right-20 opacity-20 pointer-events-none">
        <Satellite className="h-32 w-32 sm:h-64 sm:w-64 text-[#FDB913] animate-pulse" />
      </div>

      {/* Decorative accent elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-[#E6007E]/30 blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#FDB913]/20 blur-3xl animate-pulse delay-700" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 sm:py-32 text-center">
        
        {/* Official Partner Badge with Canal+ Branding Colors */}
        <div className="mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center justify-center rounded-full border-2 border-[#FDB913] bg-gradient-to-r from-[#000000] to-[#1a1a2e] px-4 py-2 backdrop-blur-md sm:px-6 sm:py-3 shadow-[0_0_30px_rgba(253,185,19,0.3)] hover:shadow-[0_0_50px_rgba(253,185,19,0.5)] transition-all hover:scale-105">
                <span className="mr-3 text-xs font-bold uppercase tracking-wider text-[#FDB913] sm:text-sm">
                    {dict.about.stat4Desc} 
                </span>
                <div className="h-4 w-px bg-[#FDB913]/50 sm:h-6" />
                
                {/* Canal+ Logo */}
                <div className="relative ml-3 h-5 w-16 sm:h-7 sm:w-24">
                    <Image 
                        src="/canal-plus.png" 
                        alt="Canal+ Logo" 
                        fill 
                        className="object-contain brightness-0 invert" 
                        priority
                    />
                </div>
            </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_4px_20px_rgba(253,185,19,0.3)]">
          <span className="block text-balance bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent animate-gradient">
            {dict.hero.headline}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 sm:text-xl leading-relaxed text-pretty drop-shadow-lg">
          {dict.hero.subheadline}
        </p>

        {/* CTA Buttons - Canal+ Inspired */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#FDB913] to-[#f5a623] text-black hover:from-[#f5a623] hover:to-[#FDB913] font-bold px-8 py-6 text-lg shadow-[0_8px_30px_rgba(253,185,19,0.4)] hover:shadow-[0_10px_40px_rgba(253,185,19,0.6)] transition-all hover:-translate-y-1 hover:scale-105 border-2 border-[#FDB913]"
            asChild
          >
            <a href="#packages">{dict.hero.ctaPrimary}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-[#E6007E] text-white bg-gradient-to-r from-[#E6007E]/20 to-[#D4006F]/20 hover:from-[#E6007E]/40 hover:to-[#D4006F]/40 font-bold px-8 py-6 text-lg transition-all hover:scale-105 shadow-[0_4px_20px_rgba(230,0,126,0.3)] hover:shadow-[0_6px_30px_rgba(230,0,126,0.5)]"
            asChild
          >
            <a href="https://wa.me/237651841190" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {dict.hero.ctaSecondary}
            </a>
          </Button>
        </div>

        {/* Trust Stats/Badges - Colorful Cards */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            const colors = [
              { bg: "from-[#FDB913]/20 to-[#f5a623]/10", border: "border-[#FDB913]/40", icon: "text-[#FDB913]", shadow: "shadow-[0_4px_20px_rgba(253,185,19,0.2)]" },
              { bg: "from-[#E6007E]/20 to-[#D4006F]/10", border: "border-[#E6007E]/40", icon: "text-[#E6007E]", shadow: "shadow-[0_4px_20px_rgba(230,0,126,0.2)]" },
              { bg: "from-[#E20613]/20 to-[#c91519]/10", border: "border-[#E20613]/40", icon: "text-[#E20613]", shadow: "shadow-[0_4px_20px_rgba(226,6,19,0.2)]" },
              { bg: "from-[#FDB913]/20 to-[#E6007E]/10", border: "border-[#FDB913]/40", icon: "text-[#FDB913]", shadow: "shadow-[0_4px_20px_rgba(253,185,19,0.2)]" },
            ]
            const color = colors[index % colors.length]
            
            return (
              <div
                key={badge.key}
                className={`flex flex-col items-center gap-2 rounded-xl bg-gradient-to-br ${color.bg} backdrop-blur-sm p-4 border-2 ${color.border} hover:scale-105 transition-all ${color.shadow} hover:shadow-lg group`}
              >
                <Icon className={`h-6 w-6 ${color.icon} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-white text-center text-balance leading-tight">
                  {dict.hero[badge.key]}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scroll indicator with Color */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#FDB913]/70 hover:text-[#FDB913] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </a>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}