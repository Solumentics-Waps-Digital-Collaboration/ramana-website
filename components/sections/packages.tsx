import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"
import { cn } from "@/lib/utils"
import Image from "next/image"

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
  },
  yellow: {
    borderColor: "border-[#FFCC00]",
    headerBg: "bg-[#FFCC00]",
    headerText: "text-black",
    priceText: "text-black",
    button: "bg-[#FFCC00] hover:bg-[#E6B800] text-black",
  },
  pink: {
    borderColor: "border-[#E6007E]",
    headerBg: "bg-[#E6007E]",
    headerText: "text-white",
    priceText: "text-white",
    button: "bg-[#E6007E] hover:bg-[#C4006B] text-white",
  },
  black: {
    borderColor: "border-gray-900",
    headerBg: "bg-black",
    headerText: "text-white",
    priceText: "text-white",
    button: "bg-black hover:bg-gray-800 text-white",
  },
}

// Map package keys to their image filenames
const packageImages = {
  package1: "/access-bouquet.jpg",
  package2: "/evasion-bouquet.png",
  package3: "/access-plus-bouquet.png",
  package4: "/tout-canal-plus-bouquet.png",
}

export function PackagesSection({ dict }: PackagesSectionProps) {
  const packageKeys = ["package1", "package2", "package3", "package4"] as const

  return (
    <section id="packages" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center subtitle={dict.packages.subtitle}>
          {dict.packages.title}
        </SectionTitle>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">{dict.packages.intro}</p>

        {/* Grid with 4 bouquet cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
          {packageKeys.map((key) => {
            const pkgData = dict.packages[key] as any
            const theme = themeConfig[pkgData.theme as keyof typeof themeConfig] || themeConfig.gray
            const imageSrc = packageImages[key]

            return (
              <Card
                key={key}
                className={cn(
                  "relative border-2 transition-all hover:shadow-xl flex flex-col h-full overflow-hidden",
                  theme.borderColor
                )}
              >
                {/* Header Section */}
                <div className={cn("p-4 text-center", theme.headerBg)}>
                  <h3 className={cn("text-2xl font-bold uppercase tracking-wider", theme.headerText)}>
                    {pkgData.title}
                  </h3>
                  <div className={cn("mt-2 flex items-center justify-center gap-1", theme.priceText)}>
                    <span className="text-xl font-bold">{pkgData.price}</span>
                    <span className="text-sm opacity-80">{pkgData.period}</span>
                  </div>
                </div>

                {/* Bouquet Image - This is the key addition */}
                <div className="relative w-full bg-white">
                  <Image
                    src={imageSrc}
                    alt={`${pkgData.title} bouquet channels`}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority={key === "package1"}
                  />
                </div>

                {/* Footer with "+ ACCESS" button */}
                <CardFooter className="pb-4 pt-2 bg-gray-100">
                  <Button
                    className="w-full font-bold bg-gray-600 hover:bg-gray-700 text-white"
                    size="sm"
                  >
                    + ACCESS
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        
        {/* Options Section - L'APP CANAL+, Netflix, DSTV, CHARME */}
        <div className="mt-12">
          <Image
            src="/options-section.png"
            alt="CANAL+ Options - App, Netflix, DSTV English Plus, CHARME"
            width={1200}
            height={250}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Legal text from the flyer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 italic max-w-5xl mx-auto leading-relaxed">
            {dict.packages.priceInfo}
          </p>
        </div>
      </div>
    </section>
  )
}