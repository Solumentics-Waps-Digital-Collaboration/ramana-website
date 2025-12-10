import { Target, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface MissionSectionProps {
  dict: Dictionary
}

export function MissionSection({ dict }: MissionSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Vibrant background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FDB913]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007E]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle center>{dict.mission.title}</SectionTitle>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Mission Card - Yellow/Gold Theme */}
          <Card className="border-2 border-[#FDB913]/40 bg-gradient-to-br from-white to-[#FDB913]/5 hover:shadow-[0_20px_60px_rgba(253,185,19,0.3)] hover:border-[#FDB913] transition-all duration-300 hover:scale-[1.02] group overflow-hidden relative">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/0 via-[#FDB913]/5 to-[#FDB913]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="p-8 relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FDB913] to-[#f5a623] text-white mb-6 shadow-[0_8px_30px_rgba(253,185,19,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FDB913] transition-colors">
                {dict.mission.missionTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {dict.mission.missionContent}
              </p>
              
              {/* Bottom accent line */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#FDB913] to-[#f5a623] rounded-full group-hover:w-full transition-all duration-500" />
            </CardContent>
          </Card>

          {/* Vision Card - Magenta/Pink Theme */}
          <Card className="border-2 border-[#E6007E]/40 bg-gradient-to-br from-white to-[#E6007E]/5 hover:shadow-[0_20px_60px_rgba(230,0,126,0.3)] hover:border-[#E6007E] transition-all duration-300 hover:scale-[1.02] group overflow-hidden relative">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E6007E]/0 via-[#E6007E]/5 to-[#E6007E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="p-8 relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E6007E] to-[#D4006F] text-white mb-6 shadow-[0_8px_30px_rgba(230,0,126,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E6007E] transition-colors">
                {dict.mission.visionTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {dict.mission.visionContent}
              </p>
              
              {/* Bottom accent line */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#E6007E] to-[#D4006F] rounded-full group-hover:w-full transition-all duration-500" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}