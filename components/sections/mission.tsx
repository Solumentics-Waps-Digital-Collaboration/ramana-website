import { Target, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface MissionSectionProps {
  dict: Dictionary
}

export function MissionSection({ dict }: MissionSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center>{dict.mission.title}</SectionTitle>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <Card className="border-2 border-blue-100 bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.mission.missionTitle}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.mission.missionContent}</p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="border-2 border-blue-100 bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.mission.visionTitle}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.mission.visionContent}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
