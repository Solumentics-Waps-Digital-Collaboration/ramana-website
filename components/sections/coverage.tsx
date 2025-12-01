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
    <section id="coverage" className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center subtitle={dict.coverage.subtitle}>
          {dict.coverage.title}
        </SectionTitle>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">{dict.coverage.content}</p>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            const numberKey = `${stat.key}Number` as keyof typeof dict.coverage
            const labelKey = `${stat.key}Label` as keyof typeof dict.coverage
            const subKey = `${stat.key}Sub` as keyof typeof dict.coverage

            return (
              <Card
                key={stat.key}
                className="border-0 bg-white shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600">{dict.coverage[numberKey] as string}</div>
                  <div className="mt-1 font-semibold text-gray-900">{dict.coverage[labelKey] as string}</div>
                  <div className="text-sm text-gray-500">{dict.coverage[subKey] as string}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Cities */}
        <div className="mt-12 rounded-2xl bg-blue-600 p-8 text-center text-white">
          <h3 className="text-lg font-semibold mb-4">{dict.coverage.cities}</h3>
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
            <a href="#contact">{dict.coverage.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
