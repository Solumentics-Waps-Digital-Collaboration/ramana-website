import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"
import { cn } from "@/lib/utils"

interface PackagesSectionProps {
  dict: Dictionary
}

// Configuration to match the Flyer colors exactly
const themeConfig = {
  gray: {
    borderColor: "border-gray-200",
    headerBg: "bg-gray-100",
    headerText: "text-gray-900",
    priceText: "text-gray-900",
    button: "bg-gray-900 hover:bg-gray-800 text-white",
    checkBg: "bg-gray-100",
    checkColor: "text-gray-700",
  },
  yellow: {
    // Evasion Package - Yellow
    borderColor: "border-[#FFCC00]",
    headerBg: "bg-[#FFCC00]",
    headerText: "text-black",
    priceText: "text-black",
    button: "bg-[#FFCC00] hover:bg-[#E6B800] text-black",
    checkBg: "bg-[#FFCC00]/20",
    checkColor: "text-black",
  },
  pink: {
    // Access+ Package - Pink/Red
    borderColor: "border-[#E6007E]",
    headerBg: "bg-[#E6007E]",
    headerText: "text-white",
    priceText: "text-white",
    button: "bg-[#E6007E] hover:bg-[#C4006B] text-white",
    checkBg: "bg-[#E6007E]/10",
    checkColor: "text-[#E6007E]",
  },
  black: {
    // Tout Canal+ - Black
    borderColor: "border-gray-900",
    headerBg: "bg-black",
    headerText: "text-white",
    priceText: "text-white",
    button: "bg-black hover:bg-gray-800 text-white",
    checkBg: "bg-black/10",
    checkColor: "text-black",
  },
}

export function PackagesSection({ dict }: PackagesSectionProps) {
  // We strictly look for the 4 specific packages defined in the new JSON structure
  const packageKeys = ["package1", "package2", "package3", "package4"] as const

  return (
    <section id="packages" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center subtitle={dict.packages.subtitle}>
          {dict.packages.title}
        </SectionTitle>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">{dict.packages.intro}</p>

        {/* Grid adjusted to 4 columns to match the flyer layout */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
          {packageKeys.map((key) => {
            // Access the specific package object from the dictionary
            // We use 'as any' here because the dictionary type might not strictly define the nested theme keys yet
            const pkgData = dict.packages[key] as any
            
            // Determine theme: Default to gray if missing
            const theme = themeConfig[pkgData.theme as keyof typeof themeConfig] || themeConfig.gray

            return (
              <Card
                key={key}
                className={cn(
                  "relative border-2 transition-all hover:shadow-xl flex flex-col h-full overflow-hidden",
                  theme.borderColor
                )}
              >
                {/* Header Section (Color Block) */}
                <div className={cn("p-6 text-center", theme.headerBg)}>
                  <h3 className={cn("text-2xl font-bold uppercase tracking-wider", theme.headerText)}>
                    {pkgData.title}
                  </h3>
                  <div className={cn("mt-2 flex items-center justify-center gap-1", theme.priceText)}>
                    <span className="text-xl font-bold">{pkgData.price}</span>
                    <span className="text-sm opacity-80">{pkgData.period}</span>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="pt-6 flex-grow">
                  <p className="text-sm text-gray-600 mb-6 text-center italic min-h-[40px]">
                    {pkgData.desc}
                  </p>
                  <ul className="space-y-3">
                    {(pkgData.features as string[]).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={cn(
                          "flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0 mt-0.5",
                          theme.checkBg,
                          theme.checkColor
                        )}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-gray-700 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Footer Section */}
                <CardFooter className="pb-6">
                  <Button
                    className={cn("w-full font-bold shadow-sm transition-colors", theme.button)}
                    asChild
                  >
                    <a href="https://wa.me/237699759900" target="_blank" rel="noopener noreferrer">
                        {dict.packages.cta}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        
        {/* Additional Options Info Box (Thematic Packages) */}
        <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-3xl mx-auto shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-2">{dict.packages.package4Title}</h4>
            <p className="text-gray-600 mb-6">{dict.packages.package4Desc}</p>
            
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
               <a href="#contact">{dict.packages.ctaAll}</a>
            </Button>

            <p className="mt-6 text-xs text-gray-500 italic">{dict.packages.priceInfo}</p>
        </div>

      </div>
    </section>
  )
}