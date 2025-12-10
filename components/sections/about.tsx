import { Calendar, Store, Globe, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface AboutSectionProps {
  dict: Dictionary
}

const stats = [
  { key: "stat1", icon: Calendar },
  { key: "stat2", icon: Store },
  { key: "stat3", icon: Globe },
  { key: "stat4", icon: Award },
] as const

export function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FDB913]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#E6007E]/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <SectionTitle>{dict.about.title}</SectionTitle>
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">{dict.about.content}</p>
              <p className="text-base sm:text-lg">{dict.about.content2}</p>
              <p className="text-base sm:text-lg font-medium text-gray-800">{dict.about.content3}</p>
            </div>
            
            {/* Accent bar */}
            <div className="mt-8 h-1.5 w-24 bg-gradient-to-r from-[#FDB913] via-[#E6007E] to-[#E20613] rounded-full" />
          </div>

          {/* Stats Grid - Canal+ Inspired */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const titleKey = `${stat.key}Title` as keyof typeof dict.about
              const descKey = `${stat.key}Desc` as keyof typeof dict.about
              
              // Alternate vibrant colors for each card
              const cardColors = [
                {
                  border: "border-[#FDB913]/40 hover:border-[#FDB913]",
                  bg: "bg-gradient-to-br from-[#FDB913]/10 to-[#f5a623]/5",
                  iconBg: "bg-gradient-to-br from-[#FDB913] to-[#f5a623]",
                  iconColor: "text-white",
                  shadow: "hover:shadow-[0_8px_30px_rgba(253,185,19,0.3)]",
                  glow: "shadow-[0_4px_20px_rgba(253,185,19,0.15)]"
                },
                {
                  border: "border-[#E6007E]/40 hover:border-[#E6007E]",
                  bg: "bg-gradient-to-br from-[#E6007E]/10 to-[#D4006F]/5",
                  iconBg: "bg-gradient-to-br from-[#E6007E] to-[#D4006F]",
                  iconColor: "text-white",
                  shadow: "hover:shadow-[0_8px_30px_rgba(230,0,126,0.3)]",
                  glow: "shadow-[0_4px_20px_rgba(230,0,126,0.15)]"
                },
                {
                  border: "border-[#E20613]/40 hover:border-[#E20613]",
                  bg: "bg-gradient-to-br from-[#E20613]/10 to-[#c91519]/5",
                  iconBg: "bg-gradient-to-br from-[#E20613] to-[#c91519]",
                  iconColor: "text-white",
                  shadow: "hover:shadow-[0_8px_30px_rgba(226,6,19,0.3)]",
                  glow: "shadow-[0_4px_20px_rgba(226,6,19,0.15)]"
                },
                {
                  border: "border-[#FDB913]/40 hover:border-[#FDB913]",
                  bg: "bg-gradient-to-br from-[#FDB913]/10 via-[#E6007E]/5 to-transparent",
                  iconBg: "bg-gradient-to-br from-[#FDB913] via-[#E6007E] to-[#E20613]",
                  iconColor: "text-white",
                  shadow: "hover:shadow-[0_8px_30px_rgba(253,185,19,0.3)]",
                  glow: "shadow-[0_4px_20px_rgba(253,185,19,0.15)]"
                },
              ]
              
              const colors = cardColors[index % cardColors.length]
              
              return (
                <Card
                  key={stat.key}
                  className={`border-2 ${colors.border} ${colors.bg} ${colors.glow} ${colors.shadow} transition-all duration-300 hover:scale-[1.03] group`}
                >
                  <CardContent className="p-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconColor} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-gray-950 transition-colors">
                      {dict.about[titleKey]}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 leading-snug">
                      {dict.about[descKey]}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}