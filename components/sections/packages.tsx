import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"
import { cn } from "@/lib/utils"

interface PackagesSectionProps {
  dict: Dictionary
}

export function PackagesSection({ dict }: PackagesSectionProps) {
  const packages = [
    {
      key: "package1",
      featured: false,
    },
    {
      key: "package2",
      featured: true,
    },
    {
      key: "package3",
      featured: false,
    },
  ]

  return (
    <section id="packages" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center subtitle={dict.packages.subtitle}>
          {dict.packages.title}
        </SectionTitle>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">{dict.packages.intro}</p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => {
            const titleKey = `${pkg.key}Title` as keyof typeof dict.packages
            const badgeKey = `${pkg.key}Badge` as keyof typeof dict.packages
            const descKey = `${pkg.key}Desc` as keyof typeof dict.packages
            const featuresKey = `${pkg.key}Features` as keyof typeof dict.packages
            const features = dict.packages[featuresKey] as string[]

            return (
              <Card
                key={pkg.key}
                className={cn(
                  "relative border-2 transition-all hover:shadow-xl",
                  pkg.featured ? "border-blue-600 shadow-lg scale-105" : "border-gray-200",
                )}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      {dict.packages[badgeKey] as string}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <Badge variant="secondary" className={cn("w-fit mx-auto mb-2", pkg.featured && "invisible")}>
                    {dict.packages[badgeKey] as string}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900">{dict.packages[titleKey] as string}</h3>
                  <p className="mt-2 text-gray-600">{dict.packages[descKey] as string}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={cn(
                      "w-full",
                      pkg.featured ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800",
                    )}
                    asChild
                  >
                    <a href="#contact">{dict.packages.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Thematic packages */}
        <Card className="mt-8 border-2 border-dashed border-gray-200 bg-gray-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{dict.packages.package4Title}</h3>
            <p className="text-gray-600 mb-4">{dict.packages.package4Desc}</p>
            <Button variant="outline" asChild>
              <a href="#contact">{dict.packages.ctaAll}</a>
            </Button>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-gray-500">{dict.packages.priceInfo}</p>
      </div>
    </section>
  )
}
