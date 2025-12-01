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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-lg",
                isScrolled ? "bg-blue-600" : "bg-white/20",
              )}
            >
              <Satellite className={cn("h-6 w-6", isScrolled ? "text-white" : "text-white")} />
            </div>
            <span className={cn("text-xl font-bold transition-colors", isScrolled ? "text-gray-900" : "text-white")}>
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
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10",
                )}
              >
                {dict.nav[item.key as keyof typeof dict.nav]}
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
              className={cn("lg:hidden", isScrolled ? "text-gray-700" : "text-white")}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={handleNavClick}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {dict.nav[item.key as keyof typeof dict.nav]}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
