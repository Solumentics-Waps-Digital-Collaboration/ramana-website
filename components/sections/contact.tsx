"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"
// Optional: If you want to use the toast system you already have installed
// import { toast } from "sonner" 

interface ContactSectionProps {
  dict: Dictionary
}

export function ContactSection({ dict }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // 1. STATE MANAGEMENT FOR INPUTS
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: ""
  })

  // 2. HANDLERS
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, type: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to send')

      // Success
      setIsSuccess(true)
      setFormData({ name: "", email: "", phone: "", type: "", message: "" }) // Reset form
      
      // If you prefer a toast notification, uncomment this:
      // toast.success("Message sent successfully!")

      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.") // Or use toast.error()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle center subtitle={dict.contact.subtitle}>
          {dict.contact.title}
        </SectionTitle>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-2 border-gray-100">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{dict.contact.formName} *</Label>
                    <Input
                      id="name"
                      required
                      placeholder="Jean Dupont"
                      className="border-gray-200 focus:border-blue-500"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{dict.contact.formEmail} *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="jean@example.com"
                      className="border-gray-200 focus:border-blue-500"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{dict.contact.formPhone} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+237 6XX XXX XXX"
                      className="border-gray-200 focus:border-blue-500"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">{dict.contact.formType} *</Label>
                    <Select required onValueChange={handleSelectChange} value={formData.type}>
                      <SelectTrigger className="border-gray-200 focus:border-blue-500">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {(dict.contact.formTypeOptions as string[]).map((option, idx) => (
                          <SelectItem key={idx} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{dict.contact.formMessage} *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="border-gray-200 focus:border-blue-500 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {dict.contact.formSubmit}
                    </>
                  )}
                </Button>

                {isSuccess && (
                  <div className="rounded-lg bg-green-50 p-4 text-center text-green-700">
                    {dict.contact.formSuccess}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Section */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{dict.contact.locationTitle}</h3>
                    <p className="mt-1 text-gray-600">{dict.contact.locationContent}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{dict.contact.phoneTitle}</h3>
                    <p className="mt-1 text-gray-600">{dict.contact.phoneMain}: +237 699 759 900</p>
                    <p className="text-gray-600">{dict.contact.phoneSecondary}: +237 651 841 190</p>
                    <Button variant="outline" size="sm" className="mt-3 bg-transparent" asChild>
                      <a href="tel:+23751841190">
                        <Phone className="mr-2 h-4 w-4" />
                        {dict.contact.phoneButton}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="border-2 border-green-200 bg-green-50 hover:border-green-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{dict.contact.whatsappTitle}</h3>
                    <p className="mt-1 text-gray-600">+237 651 841 190</p>
                    <Button size="sm" className="mt-3 bg-green-500 hover:bg-green-600" asChild>
                      <a href="https://wa.me/237651841190" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {dict.contact.whatsappButton}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{dict.contact.emailTitle}</h3>
                    <p className="mt-1 text-gray-600">Contact: info@ramanasa.com</p>
                    <p className="text-gray-600">Support: support@ramanasa.com</p>
                    <Button variant="outline" size="sm" className="mt-3 bg-transparent" asChild>
                      <a href="mailto:info@ramanasa.com">
                        <Mail className="mr-2 h-4 w-4" />
                        {dict.contact.emailButton}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{dict.contact.hoursTitle}</h3>
                    <p className="mt-1 text-gray-600">{dict.contact.hoursWeekday}</p>
                    <p className="text-gray-600">{dict.contact.hoursSaturday}</p>
                    <p className="text-gray-600">{dict.contact.hoursSunday}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}