import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import type { Dictionary } from "@/i18n/get-dictionary"

interface TeamGallerySectionProps {
  dict: Dictionary
}

export function TeamGallerySection({ dict }: TeamGallerySectionProps) {
  // We define the images here. 
  // 'span' controls if the image takes up 2 columns (wide) or 1.
  const galleryItems = [
    {
      key: "img1",
      src: "/team-convention.jpg", // The Valmorel 2015 image
      color: "border-[#FDB913]", // Yellow
      span: "md:col-span-2", // Make this one wide
    },
    {
      key: "img2",
      src: "/team-shop.jpg", // The Shop/Field image
      color: "border-[#E6007E]", // Pink
      span: "md:col-span-1",
    },
    {
      key: "img3",
      src: "/team-group.jpg", // The Outdoor Steps image
      color: "border-[#E20613]", // Red
      span: "md:col-span-1",
    },
    {
      key: "img4",
      src: "/team-training.jpg", // The Indoor Group image
      color: "border-[#0f3460]", // Blue
      span: "md:col-span-2", // Make this one wide
    },
  ]

  return (
    <section id="team-gallery" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E6007E]/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle center subtitle={dict.teamGallery.subtitle}>
          {dict.teamGallery.title}
        </SectionTitle>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600 mb-12">
          {dict.teamGallery.description}
        </p>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const captionKey = `${item.key}Caption` as keyof typeof dict.teamGallery
            
            return (
              <Card 
                key={index} 
                className={`overflow-hidden border-2 ${item.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] ${item.span}`}
              >
                <CardContent className="p-0 relative group">
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-80 w-full">
                    <Image
                      src={item.src}
                      alt={dict.teamGallery[captionKey] as string}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                    
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className={`h-1 w-12 mb-3 bg-white/80 rounded-full`} />
                      <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">
                        {dict.teamGallery[captionKey] as string}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}