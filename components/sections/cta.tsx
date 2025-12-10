import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dictionary } from "@/i18n/get-dictionary"

interface CTASectionProps {
  dict: Dictionary
}

export function CTASection({ dict }: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background - Canal+ Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a2e] to-[#0f3460]" />
      
      {/* Vibrant accent overlays */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#FDB913]/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#E6007E]/30 to-transparent blur-3xl" />
      
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/happy-family-watching-tv-entertainment.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance drop-shadow-lg">
          {dict.cta.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 text-pretty">
          {dict.cta.subheadline}
        </p>

        {/* CTAs - Canal+ Style */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#FDB913] to-[#f5a623] text-black hover:from-[#f5a623] hover:to-[#FDB913] font-bold px-8 py-6 shadow-[0_8px_30px_rgba(253,185,19,0.4)] hover:shadow-[0_10px_40px_rgba(253,185,19,0.6)] transition-all border-2 border-[#FDB913]" 
            asChild
          >
            <a href="#contact">{dict.cta.ctaPrimary}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#E6007E] text-white bg-gradient-to-r from-[#E6007E]/20 to-[#D4006F]/20 hover:from-[#E6007E]/40 hover:to-[#D4006F]/40 font-bold px-8 py-6 shadow-[0_4px_20px_rgba(230,0,126,0.3)] hover:shadow-[0_6px_30px_rgba(230,0,126,0.5)] transition-all"
            asChild
          >
            <a href="#contact">{dict.cta.ctaSecondary}</a>
          </Button>
        </div>

        {/* Contact Info - With Color Accents */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
          <a 
            href="tel:+237699759900" 
            className="flex items-center gap-2 hover:text-[#FDB913] transition-colors group"
          >
            <div className="p-2 rounded-lg bg-[#FDB913]/20 group-hover:bg-[#FDB913]/30 transition-colors">
              <Phone className="h-5 w-5" />
            </div>
            <span className="font-medium">{dict.cta.phone}: 651 841 190</span>
          </a>
          <a
            href="https://wa.me/237651841190"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#E6007E] transition-colors group"
          >
            <div className="p-2 rounded-lg bg-[#E6007E]/20 group-hover:bg-[#E6007E]/30 transition-colors">
              <MessageCircle className="h-5 w-5" />
            </div>
            <span className="font-medium">{dict.cta.whatsapp}: 651 841 190</span>
          </a>
        </div>
      </div>
    </section>
  )
}