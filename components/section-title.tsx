import type React from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionTitle({ children, subtitle, center = false, light = false }: SectionTitleProps) {
  return (
    <div className={cn(center && "text-center")}>
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl text-balance",
          light ? "text-white" : "text-gray-900",
        )}
      >
        {children}
      </h2>
      {subtitle && <p className={cn("mt-2 text-lg", light ? "text-blue-100" : "text-gray-600")}>{subtitle}</p>}
    </div>
  )
}
