"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Satellite } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

interface HeaderProps {
  locale: Locale
  dict: Dictionary
}

const navItems = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "whyUs", href: "#why-us" },
  { key: "products", href: "#packages" },
  { key: "coverage", href: "#coverage" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
] as const

export function Header({ locale, dict }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-gradient-to-r from-black via-[#1a1a2e] to-black backdrop-blur-md shadow-[0_4px_30px_rgba(253,185,19,0.3)]" 
          : "bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300",
                isScrolled 
                  ? "bg-gradient-to-br from-[#FDB913] to-[#f5a623] shadow-[0_4px_20px_rgba(253,185,19,0.4)]" 
                  : "bg-gradient-to-br from-[#E6007E] to-[#D4006F] shadow-[0_4px_20px_rgba(230,0,126,0.4)]",
              )}
            >
              <Satellite className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className={cn(
              "text-xl font-bold transition-all duration-300",
              isScrolled 
                ? "text-white drop-shadow-[0_2px_10px_rgba(253,185,19,0.5)]" 
                : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            )}>
              RAMANA S.A.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md relative group",
                  isScrolled
                    ? "text-white hover:text-[#FDB913]"
                    : "text-white/90 hover:text-[#FDB913]",
                )}
              >
                {dict.nav[item.key as keyof typeof dict.nav]}
                {/* Underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FDB913] to-[#E6007E] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} isScrolled={isScrolled} />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "lg:hidden transition-colors",
                isScrolled 
                  ? "text-[#FDB913] hover:text-white hover:bg-[#FDB913]/20" 
                  : "text-white hover:text-[#FDB913] hover:bg-white/10"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Canal+ Style */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-black via-[#1a1a2e] to-[#16213e] border-t-2 border-[#FDB913] shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-2">
            {navItems.map((item, index) => {
              // Alternate colors for mobile menu items
              const colors = [
                "hover:bg-gradient-to-r hover:from-[#FDB913]/20 hover:to-[#f5a623]/10 hover:border-l-[#FDB913]",
                "hover:bg-gradient-to-r hover:from-[#E6007E]/20 hover:to-[#D4006F]/10 hover:border-l-[#E6007E]",
                "hover:bg-gradient-to-r hover:from-[#E20613]/20 hover:to-[#c91519]/10 hover:border-l-[#E20613]",
              ]
              const colorClass = colors[index % colors.length]
              
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={handleNavClick}
                  className={cn(
                    "block px-4 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 border-l-4 border-transparent",
                    colorClass
                  )}
                >
                  {dict.nav[item.key as keyof typeof dict.nav]}
                </a>
              )
            })}
            
            {/* Mobile CTA Button */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href="https://wa.me/237651841190"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 text-base font-bold text-black bg-gradient-to-r from-[#FDB913] to-[#f5a623] rounded-lg shadow-[0_4px_20px_rgba(253,185,19,0.4)] hover:shadow-[0_6px_30px_rgba(253,185,19,0.6)] transition-all hover:scale-[1.02]"
              >
                {dict.hero.ctaSecondary}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}