import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface FAQSectionProps {
  dict: Dictionary
}

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const

export function FAQSection({ dict }: FAQSectionProps) {
  const leftFaqs = faqKeys.slice(0, 4)
  const rightFaqs = faqKeys.slice(4)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center subtitle={dict.faq.subtitle}>
          {dict.faq.title}
        </SectionTitle>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {leftFaqs.map((key) => {
              const questionKey = key as keyof typeof dict.faq
              const answerKey = key.replace("q", "a") as keyof typeof dict.faq
              return (
                <AccordionItem
                  key={key}
                  value={key}
                  className="rounded-xl border-2 border-gray-100 px-6 data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/50"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                    {dict.faq[questionKey] as string}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {dict.faq[answerKey] as string}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {rightFaqs.map((key) => {
              const questionKey = key as keyof typeof dict.faq
              const answerKey = key.replace("q", "a") as keyof typeof dict.faq
              return (
                <AccordionItem
                  key={key}
                  value={key}
                  className="rounded-xl border-2 border-gray-100 px-6 data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/50"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                    {dict.faq[questionKey] as string}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {dict.faq[answerKey] as string}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
