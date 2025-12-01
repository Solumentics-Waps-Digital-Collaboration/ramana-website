"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

interface LanguageSwitcherProps {
  locale: Locale
  isScrolled?: boolean
}

export function LanguageSwitcher({ locale, isScrolled = false }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: Locale) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/20 p-0.5 bg-white/10">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale("fr")}
        className={cn(
          "h-7 px-3 text-xs font-semibold rounded-full transition-all",
          locale === "fr"
            ? "bg-white text-blue-600 shadow-sm"
            : isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/80 hover:text-white hover:bg-white/10",
        )}
      >
        FR
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale("en")}
        className={cn(
          "h-7 px-3 text-xs font-semibold rounded-full transition-all",
          locale === "en"
            ? "bg-white text-blue-600 shadow-sm"
            : isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/80 hover:text-white hover:bg-white/10",
        )}
      >
        EN
      </Button>
    </div>
  )
}
