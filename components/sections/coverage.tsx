import { MapPin, Store, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface CoverageSectionProps {
  dict: Dictionary
}

const stats = [
  { key: "stat1", icon: Globe },
  { key: "stat2", icon: Store },
  { key: "stat3", icon: Users },
  { key: "stat4", icon: MapPin },
] as const

export function CoverageSection({ dict }: CoverageSectionProps) {
  return (
    <section id="coverage" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#E6007E]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#FDB913]/15 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle center subtitle={dict.coverage.subtitle}>
          {dict.coverage.title}
        </SectionTitle>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-700 text-base">{dict.coverage.content}</p>

        {/* Stats Grid - Vibrant Colors */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const numberKey = `${stat.key}Number` as keyof typeof dict.coverage
            const labelKey = `${stat.key}Label` as keyof typeof dict.coverage
            const subKey = `${stat.key}Sub` as keyof typeof dict.coverage

            // Different vibrant colors for each stat
            const cardColors = [
              {
                iconBg: "bg-gradient-to-br from-[#FDB913] to-[#f5a623]",
                iconColor: "text-white",
                numberColor: "text-[#FDB913]",
                shadow: "shadow-[0_4px_20px_rgba(253,185,19,0.15)]",
                hoverShadow: "hover:shadow-[0_8px_30px_rgba(253,185,19,0.25)]",
                border: "border-t-4 border-t-[#FDB913]"
              },
              {
                iconBg: "bg-gradient-to-br from-[#E6007E] to-[#D4006F]",
                iconColor: "text-white",
                numberColor: "text-[#E6007E]",
                shadow: "shadow-[0_4px_20px_rgba(230,0,126,0.15)]",
                hoverShadow: "hover:shadow-[0_8px_30px_rgba(230,0,126,0.25)]",
                border: "border-t-4 border-t-[#E6007E]"
              },
              {
                iconBg: "bg-gradient-to-br from-[#E20613] to-[#c91519]",
                iconColor: "text-white",
                numberColor: "text-[#E20613]",
                shadow: "shadow-[0_4px_20px_rgba(226,6,19,0.15)]",
                hoverShadow: "hover:shadow-[0_8px_30px_rgba(226,6,19,0.25)]",
                border: "border-t-4 border-t-[#E20613]"
              },
              {
                iconBg: "bg-gradient-to-br from-[#FDB913] via-[#E6007E] to-[#E20613]",
                iconColor: "text-white",
                numberColor: "text-[#E6007E]",
                shadow: "shadow-[0_4px_20px_rgba(253,185,19,0.15)]",
                hoverShadow: "hover:shadow-[0_8px_30px_rgba(230,0,126,0.25)]",
                border: "border-t-4 border-t-[#FDB913]"
              },
            ]

            const colors = cardColors[index % cardColors.length]

            return (
              <Card
                key={stat.key}
                className={`border-0 bg-white ${colors.border} ${colors.shadow} ${colors.hoverShadow} text-center transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.iconColor} mb-4 shadow-lg`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className={`text-4xl font-bold ${colors.numberColor}`}>{dict.coverage[numberKey] as string}</div>
                  <div className="mt-1 font-semibold text-gray-900">{dict.coverage[labelKey] as string}</div>
                  <div className="text-sm text-gray-600">{dict.coverage[subKey] as string}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Cities CTA - Canal+ Style */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-black via-[#1a1a2e] to-black p-8 sm:p-10 text-center text-white border-2 border-[#FDB913] shadow-[0_10px_50px_rgba(253,185,19,0.3)] relative overflow-hidden">
          {/* Accent elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#FDB913]/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#E6007E]/20 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{dict.coverage.cities}</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FDB913] via-[#E6007E] to-[#E20613] rounded-full mx-auto mb-6" />
            
            <Button 
              className="bg-gradient-to-r from-[#FDB913] to-[#f5a623] text-black hover:from-[#f5a623] hover:to-[#FDB913] font-bold px-8 py-6 text-base shadow-[0_8px_30px_rgba(253,185,19,0.4)] hover:shadow-[0_10px_40px_rgba(253,185,19,0.6)] transition-all border-2 border-[#FDB913]" 
              asChild
            >
              <a href="#contact">{dict.coverage.cta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}