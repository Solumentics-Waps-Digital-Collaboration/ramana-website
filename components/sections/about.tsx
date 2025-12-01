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
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <SectionTitle>{dict.about.title}</SectionTitle>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>{dict.about.content}</p>
              <p>{dict.about.content2}</p>
              <p>{dict.about.content3}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              const titleKey = `${stat.key}Title` as keyof typeof dict.about
              const descKey = `${stat.key}Desc` as keyof typeof dict.about
              return (
                <Card
                  key={stat.key}
                  className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-gray-900">{dict.about[titleKey]}</h3>
                    <p className="mt-1 text-sm text-gray-500">{dict.about[descKey]}</p>
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
