import { Award, Clock, MapPin, Shield, Users, Headphones, Package, TrendingUp, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface WhyUsSectionProps {
  dict: Dictionary
}

const advantages = [
  { key: "advantage1", icon: Award },
  { key: "advantage2", icon: Clock },
  { key: "advantage3", icon: MapPin },
  { key: "advantage4", icon: Shield },
  { key: "advantage5", icon: Users },
  { key: "advantage6", icon: Headphones },
  { key: "advantage7", icon: Package },
  { key: "advantage8", icon: TrendingUp },
  { key: "advantage9", icon: Star },
] as const

export function WhyUsSection({ dict }: WhyUsSectionProps) {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background elements - static */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FDB913]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#E6007E]/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle center subtitle={dict.whyUs.subtitle}>
          {dict.whyUs.title}
        </SectionTitle>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            const titleKey = `${advantage.key}Title` as keyof typeof dict.whyUs
            const descKey = `${advantage.key}Desc` as keyof typeof dict.whyUs

            // Vibrant color schemes cycling through yellow, pink, red
            const cardColors = [
              {
                iconBg: "bg-gradient-to-br from-[#FDB913] to-[#f5a623]",
                iconColor: "text-white",
                border: "border-l-4 border-l-[#FDB913]",
                shadow: "shadow-[0_4px_20px_rgba(253,185,19,0.15)]",
                hoverShadow: "hover:shadow-[0_8px_30px_rgba(253,185,19,0.25)]"
              },
              {
                iconBg: "bg-gradient-to-br from-[#E6007E] to-[#D4006F]",
                iconColor: "text-white",
                border: "border-l-4 border-l-[#E6007E]",
                shadow: "shadow-[0_4px_20px_rgba(230,0,126,0.15)]",
                hoverShadow: "hover:shadow-[0_8px_30px_rgba(230,0,126,0.25)]"
              },
              {
                iconBg: "bg-gradient-to-br from-[#E20613] to-[#c91519]",
                iconColor: "text-white",
                border: "border-l-4 border-l-[#E20613]",
                shadow: "shadow-[0_4px_20px_rgba(226,6,19,0.15)]",
                hoverShadow: "hover:shadow-[0_8px_30px_rgba(226,6,19,0.25)]"
              },
            ]

            const colors = cardColors[index % cardColors.length]

            return (
              <Card 
                key={advantage.key} 
                className={`group border-0 bg-white ${colors.border} ${colors.shadow} ${colors.hoverShadow} transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconColor} shadow-lg flex-shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1.5 text-base">{dict.whyUs[titleKey] as string}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{dict.whyUs[descKey] as string}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}