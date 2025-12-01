import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dictionary } from "@/i18n/get-dictionary"

interface CTASectionProps {
  dict: Dictionary
}

export function CTASection({ dict }: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/happy-family-watching-tv-entertainment.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">{dict.cta.headline}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 text-pretty">{dict.cta.subheadline}</p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8" asChild>
            <a href="#contact">{dict.cta.ctaPrimary}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white/10"
            asChild
          >
            <a href="#contact">{dict.cta.ctaSecondary}</a>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
          <a href="tel:+237699759900" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="h-5 w-5" />
            <span>{dict.cta.phone}: 699 759 900 | 677 781 015</span>
          </a>
          <a
            href="https://wa.me/237699759900"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{dict.cta.whatsapp}: 699 759 900</span>
          </a>
        </div>
      </div>
    </section>
  )
}
