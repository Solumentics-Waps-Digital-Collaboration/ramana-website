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
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center subtitle={dict.services.subtitle}>
          {dict.services.title}
        </SectionTitle>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            const titleKey = `${service.key}Title` as keyof typeof dict.services
            const descKey = `${service.key}Desc` as keyof typeof dict.services
            const featuresKey = `${service.key}Features` as keyof typeof dict.services
            const features = dict.services[featuresKey] as string[]

            return (
              <Card
                key={service.key}
                className="group border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <CardHeader className="pb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{dict.services[titleKey] as string}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {dict.services[descKey] as string}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
