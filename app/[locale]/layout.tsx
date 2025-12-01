import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { locales, type Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords:
      locale === "fr"
        ? [
            "CANAL+ Cameroun",
            "distributeur CANAL+",
            "installation satellite Yaoundé",
            "abonnement CANAL+",
            "RAMANA",
            "bouquet CANAL+",
            "grossiste CANAL+",
          ]
        : [
            "CANAL+ Cameroon",
            "CANAL+ distributor",
            "satellite installation Yaoundé",
            "CANAL+ subscription",
            "RAMANA",
            "CANAL+ packages",
            "CANAL+ wholesaler",
          ],
    openGraph: {
      title: locale === "fr" ? "RAMANA S.A. - Votre Télé N'a Pas de Limite" : "RAMANA S.A. - Your TV Has No Limits",
      description:
        locale === "fr"
          ? "Distributeur officiel CANAL+ depuis 1995. 100+ points de vente au Cameroun et RCA."
          : "Official CANAL+ distributor since 1995. 100+ sales points in Cameroon and CAR.",
      type: "website",
      locale: locale === "fr" ? "fr_CM" : "en_CM",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
