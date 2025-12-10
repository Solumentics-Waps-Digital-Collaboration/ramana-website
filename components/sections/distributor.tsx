import { TrendingUp, HandshakeIcon, Package, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface DistributorSectionProps {
  dict: Dictionary
}

const benefits = [
  { key: "benefit1", icon: TrendingUp },
  { key: "benefit2", icon: HandshakeIcon },
  { key: "benefit3", icon: Package },
] as const

export function DistributorSection({ dict }: DistributorSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#2d1b4e] via-[#1a2332] to-[#0f3460] text-white relative overflow-hidden">
      {/* Subtle background gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <SectionTitle light center subtitle={dict.distributor.subtitle}>
            {dict.distributor.title}
          </SectionTitle>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-blue-100 text-base">{dict.distributor.content}</p>

        {/* Benefits Grid - Soft Pastel Cards like Canal+ */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const titleKey = `${benefit.key}Title` as keyof typeof dict.distributor
            const descKey = `${benefit.key}Desc` as keyof typeof dict.distributor

            // Soft pastel colors matching Canal+ style
            const cardColors = [
              {
                bg: "bg-[#fef5e7]", // Soft cream/beige
                iconBg: "bg-gradient-to-br from-[#FDB913] to-[#f5a623]",
                textColor: "text-gray-800"
              },
              {
                bg: "bg-[#fce4ec]", // Soft pink
                iconBg: "bg-gradient-to-br from-[#E6007E] to-[#D4006F]",
                textColor: "text-gray-800"
              },
              {
                bg: "bg-[#ffe4e1]", // Soft peach/light coral
                iconBg: "bg-gradient-to-br from-[#E20613] to-[#c91519]",
                textColor: "text-gray-800"
              },
            ]

            const colors = cardColors[index % cardColors.length]

            return (
              <Card 
                key={benefit.key} 
                className={`border-0 ${colors.bg} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${colors.iconBg} mb-4 shadow-md`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${colors.textColor}`}>{dict.distributor[titleKey] as string}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{dict.distributor[descKey] as string}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Requirements - Subtle Pills with borders */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {(dict.distributor.requirements as string[]).map((req, idx) => (
            <div key={idx} className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
              <Check className="h-4 w-4 text-[#FDB913]" />
              <span className="text-sm font-medium">{req}</span>
            </div>
          ))}
        </div>

        {/* CTAs - Canal+ Style */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#FDB913] to-[#f5a623] text-black hover:from-[#f5a623] hover:to-[#FDB913] font-bold px-8 py-6 shadow-lg hover:shadow-xl transition-all border-0" 
            asChild
          >
            <a href="#contact">{dict.distributor.ctaPrimary}</a>
          </Button>
          <Button
            size="lg"
            className="bg-[#fce4ec] text-gray-800 hover:bg-[#fad5e5] font-bold px-8 py-6 shadow-lg hover:shadow-xl transition-all border-0"
            asChild
          >
            <a href="mailto:info@ramanasa.com">{dict.distributor.ctaSecondary}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}