import { Tv, Wrench, Monitor, GraduationCap, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface ServicesSectionProps {
  dict: Dictionary
}

const services = [
  { key: "service1", icon: Tv },
  { key: "service2", icon: Wrench },
  { key: "service3", icon: Monitor },
  { key: "service4", icon: GraduationCap },
] as const

export function ServicesSection({ dict }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Vibrant background elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-[#FDB913]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#E6007E]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E20613]/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle center subtitle={dict.services.subtitle}>
          {dict.services.title}
        </SectionTitle>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            const titleKey = `${service.key}Title` as keyof typeof dict.services
            const descKey = `${service.key}Desc` as keyof typeof dict.services
            const featuresKey = `${service.key}Features` as keyof typeof dict.services
            const features = dict.services[featuresKey] as string[]

            // Vibrant color schemes for each service
            const cardColors = [
              {
                border: "border-[#FDB913]/40 hover:border-[#FDB913]",
                bg: "bg-gradient-to-br from-white to-[#FDB913]/5",
                iconBg: "bg-gradient-to-br from-[#FDB913]/20 to-[#f5a623]/10",
                iconBgHover: "group-hover:from-[#FDB913] group-hover:to-[#f5a623]",
                iconColor: "text-[#FDB913] group-hover:text-white",
                shadow: "hover:shadow-[0_15px_50px_rgba(253,185,19,0.25)]",
                checkColor: "text-[#FDB913]",
                titleHover: "group-hover:text-[#FDB913]",
                accentBar: "bg-gradient-to-r from-[#FDB913] to-[#f5a623]"
              },
              {
                border: "border-[#E6007E]/40 hover:border-[#E6007E]",
                bg: "bg-gradient-to-br from-white to-[#E6007E]/5",
                iconBg: "bg-gradient-to-br from-[#E6007E]/20 to-[#D4006F]/10",
                iconBgHover: "group-hover:from-[#E6007E] group-hover:to-[#D4006F]",
                iconColor: "text-[#E6007E] group-hover:text-white",
                shadow: "hover:shadow-[0_15px_50px_rgba(230,0,126,0.25)]",
                checkColor: "text-[#E6007E]",
                titleHover: "group-hover:text-[#E6007E]",
                accentBar: "bg-gradient-to-r from-[#E6007E] to-[#D4006F]"
              },
              {
                border: "border-[#E20613]/40 hover:border-[#E20613]",
                bg: "bg-gradient-to-br from-white to-[#E20613]/5",
                iconBg: "bg-gradient-to-br from-[#E20613]/20 to-[#c91519]/10",
                iconBgHover: "group-hover:from-[#E20613] group-hover:to-[#c91519]",
                iconColor: "text-[#E20613] group-hover:text-white",
                shadow: "hover:shadow-[0_15px_50px_rgba(226,6,19,0.25)]",
                checkColor: "text-[#E20613]",
                titleHover: "group-hover:text-[#E20613]",
                accentBar: "bg-gradient-to-r from-[#E20613] to-[#c91519]"
              },
              {
                border: "border-[#FDB913]/40 hover:border-[#FDB913]",
                bg: "bg-gradient-to-br from-white via-[#FDB913]/3 to-[#E6007E]/3",
                iconBg: "bg-gradient-to-br from-[#FDB913]/20 via-[#E6007E]/15 to-[#E20613]/10",
                iconBgHover: "group-hover:from-[#FDB913] group-hover:via-[#E6007E] group-hover:to-[#E20613]",
                iconColor: "text-[#E6007E] group-hover:text-white",
                shadow: "hover:shadow-[0_15px_50px_rgba(253,185,19,0.25)]",
                checkColor: "text-[#E6007E]",
                titleHover: "group-hover:text-[#E6007E]",
                accentBar: "bg-gradient-to-r from-[#FDB913] via-[#E6007E] to-[#E20613]"
              },
            ]

            const colors = cardColors[index % cardColors.length]

            return (
              <Card
                key={service.key}
                className={`group border-2 ${colors.border} ${colors.bg} ${colors.shadow} transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 relative overflow-hidden`}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.iconBgHover} ${colors.iconColor} transition-all duration-300 mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className={`text-xl text-gray-900 ${colors.titleHover} transition-colors duration-300`}>
                    {dict.services[titleKey] as string}
                  </CardTitle>
                  <CardDescription className="text-gray-700 leading-relaxed text-sm">
                    {dict.services[descKey] as string}
                  </CardDescription>
                  
                  {/* Accent line */}
                  <div className={`mt-3 h-0.5 w-12 ${colors.accentBar} rounded-full group-hover:w-full transition-all duration-500`} />
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2.5">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                        <Check className={`h-4 w-4 ${colors.checkColor} mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}