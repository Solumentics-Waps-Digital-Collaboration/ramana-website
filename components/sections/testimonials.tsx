"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface TestimonialsSectionProps {
  dict: Dictionary
}

const testimonialKeys = ["t1", "t2", "t3", "t4"] as const

export function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialKeys.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialKeys.length) % testimonialKeys.length)
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialKeys.length)
  }

  // Cycle through accent colors for each testimonial
  const accentColors = [
    {
      quote: "text-[#FDB913]",
      avatar: "bg-gradient-to-br from-[#FDB913] to-[#f5a623]",
      avatarText: "text-white",
      dot: "bg-[#FDB913]"
    },
    {
      quote: "text-[#E6007E]",
      avatar: "bg-gradient-to-br from-[#E6007E] to-[#D4006F]",
      avatarText: "text-white",
      dot: "bg-[#E6007E]"
    },
    {
      quote: "text-[#E20613]",
      avatar: "bg-gradient-to-br from-[#E20613] to-[#c91519]",
      avatarText: "text-white",
      dot: "bg-[#E20613]"
    },
    {
      quote: "text-[#FDB913]",
      avatar: "bg-gradient-to-br from-[#FDB913] via-[#E6007E] to-[#E20613]",
      avatarText: "text-white",
      dot: "bg-[#E6007E]"
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FDB913]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#E6007E]/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle center subtitle={dict.testimonials.subtitle}>
          {dict.testimonials.title}
        </SectionTitle>

        <div className="relative mt-12">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialKeys.map((key, index) => {
                const quoteKey = `${key}Quote` as keyof typeof dict.testimonials
                const nameKey = `${key}Name` as keyof typeof dict.testimonials
                const roleKey = `${key}Role` as keyof typeof dict.testimonials
                const colors = accentColors[index % accentColors.length]

                return (
                  <div key={key} className="w-full flex-shrink-0 px-4">
                    <Card className="mx-auto max-w-3xl border-0 bg-white shadow-xl">
                      <CardContent className="p-8 md:p-12">
                        <Quote className={`h-12 w-12 ${colors.quote} mb-6`} />
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                          &ldquo;{dict.testimonials[quoteKey] as string}&rdquo;
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                          <div className={`h-14 w-14 rounded-full ${colors.avatar} flex items-center justify-center shadow-lg`}>
                            <span className={`text-xl font-bold ${colors.avatarText}`}>
                              {(dict.testimonials[nameKey] as string).charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{dict.testimonials[nameKey] as string}</div>
                            <div className="text-sm text-gray-600">{dict.testimonials[roleKey] as string}</div>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-[#FDB913] fill-current" />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev} 
              className="rounded-full bg-white border-2 border-gray-200 hover:border-[#FDB913] hover:bg-[#FDB913] hover:text-white transition-colors shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonialKeys.map((_, idx) => {
                const colors = accentColors[idx % accentColors.length]
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === currentIndex ? `${colors.dot} w-8` : "bg-gray-300"
                    }`}
                  />
                )
              })}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next} 
              className="rounded-full bg-white border-2 border-gray-200 hover:border-[#E6007E] hover:bg-[#E6007E] hover:text-white transition-colors shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}