import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { MissionSection } from "@/components/sections/mission"
import { ServicesSection } from "@/components/sections/services"
import { WhyUsSection } from "@/components/sections/why-us"
import { PackagesSection } from "@/components/sections/packages"
import { CoverageSection } from "@/components/sections/coverage"
import { DistributorSection } from "@/components/sections/distributor"
import { FAQSection } from "@/components/sections/faq"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <main className="min-h-screen">
      <Header locale={locale} dict={dict} />
      <HeroSection dict={dict} locale={locale} />
      <AboutSection dict={dict} />
      <MissionSection dict={dict} />
      <ServicesSection dict={dict} />
      <WhyUsSection dict={dict} />
      <PackagesSection dict={dict} />
      <CoverageSection dict={dict} />
      <DistributorSection dict={dict} />
      <FAQSection dict={dict} />
      <TestimonialsSection dict={dict} />
      <CTASection dict={dict} />
      <ContactSection dict={dict} />
      <Footer dict={dict} locale={locale} />
      <WhatsAppButton tooltip={dict.whatsappTooltip} />
    </main>
  )
}
