import Link from "next/link"
import { Satellite, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

interface FooterProps {
  dict: Dictionary
  locale: Locale
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1 - About */}
            <div>
              <Link href={`/${locale}`} className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Satellite className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">RAMANA S.A.</span>
              </Link>
              <p className="mt-2 text-sm text-blue-200">{dict.footer.tagline}</p>
              <p className="mt-4 text-sm text-blue-300 leading-relaxed">{dict.footer.description}</p>
              {/* Social Icons */}
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-blue-200 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-blue-200 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-blue-200 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-blue-200 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">{dict.footer.quickLinks}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#hero" className="text-blue-300 hover:text-white transition-colors">
                    {dict.nav.home}
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-blue-300 hover:text-white transition-colors">
                    {dict.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-blue-300 hover:text-white transition-colors">
                    {dict.nav.services}
                  </a>
                </li>
                <li>
                  <a href="#packages" className="text-blue-300 hover:text-white transition-colors">
                    {dict.nav.products}
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="text-blue-300 hover:text-white transition-colors">
                    {dict.nav.coverage}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-blue-300 hover:text-white transition-colors">
                    {dict.nav.faq}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-300 hover:text-white transition-colors">
                    {dict.nav.contact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">{dict.footer.ourServices}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-blue-300 hover:text-white transition-colors">
                    {dict.footer.canalDistribution}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-blue-300 hover:text-white transition-colors">
                    {dict.footer.tvInstallation}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-blue-300 hover:text-white transition-colors">
                    {dict.footer.avEquipment}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-blue-300 hover:text-white transition-colors">
                    {dict.footer.technicalTraining}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-300 hover:text-white transition-colors">
                    {dict.footer.technicalSupport}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-300 hover:text-white transition-colors">
                    {dict.footer.afterSales}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">{dict.footer.contactUs}</h3>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Montée Tsinga, Yaoundé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>+237 699 759 900</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>+237 677 781 015</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📧</span>
                  <a href="mailto:info@ramanasa.com" className="hover:text-white transition-colors">
                    info@ramanasa.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span>🌐</span>
                  <span>ramanasa.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300">
            <p>{dict.footer.copyright}</p>
            <p className="font-semibold text-blue-200">{dict.footer.official}</p>
            <p>{dict.footer.designed}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
