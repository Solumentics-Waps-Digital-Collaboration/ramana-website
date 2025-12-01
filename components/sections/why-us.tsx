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
    <section id="why-us" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center subtitle={dict.whyUs.subtitle}>
          {dict.whyUs.title}
        </SectionTitle>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => {
            const Icon = advantage.icon
            const titleKey = `${advantage.key}Title` as keyof typeof dict.whyUs
            const descKey = `${advantage.key}Desc` as keyof typeof dict.whyUs

            return (
              <Card key={advantage.key} className="group border-0 bg-white shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{dict.whyUs[titleKey] as string}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{dict.whyUs[descKey] as string}</p>
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
