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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionTitle light center subtitle={dict.distributor.subtitle}>
            {dict.distributor.title}
          </SectionTitle>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-blue-100">{dict.distributor.content}</p>

        {/* Benefits Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            const titleKey = `${benefit.key}Title` as keyof typeof dict.distributor
            const descKey = `${benefit.key}Desc` as keyof typeof dict.distributor

            return (
              <Card key={benefit.key} className="border-0 bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{dict.distributor[titleKey] as string}</h3>
                  <p className="text-blue-100 text-sm">{dict.distributor[descKey] as string}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Requirements */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {(dict.distributor.requirements as string[]).map((req, idx) => (
            <div key={idx} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm">{req}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold" asChild>
            <a href="#contact">{dict.distributor.ctaPrimary}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white/10"
            asChild
          >
            <a href="mailto:info@ramanasa.com">{dict.distributor.ctaSecondary}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
