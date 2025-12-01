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

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              {testimonialKeys.map((key) => {
                const quoteKey = `${key}Quote` as keyof typeof dict.testimonials
                const nameKey = `${key}Name` as keyof typeof dict.testimonials
                const roleKey = `${key}Role` as keyof typeof dict.testimonials

                return (
                  <div key={key} className="w-full flex-shrink-0 px-4">
                    <Card className="mx-auto max-w-3xl border-0 bg-white shadow-lg">
                      <CardContent className="p-8 md:p-12">
                        <Quote className="h-12 w-12 text-blue-200 mb-6" />
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                          &ldquo;{dict.testimonials[quoteKey] as string}&rdquo;
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                          <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-xl font-bold text-blue-600">
                              {(dict.testimonials[nameKey] as string).charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{dict.testimonials[nameKey] as string}</div>
                            <div className="text-sm text-gray-500">{dict.testimonials[roleKey] as string}</div>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
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
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonialKeys.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
