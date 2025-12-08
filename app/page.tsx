"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Wifi,
  Shield,
  Coffee,
  Printer,
  Users,
  Building,
  Award,
  TrendingUp,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Zap,
  Mail,
} from "lucide-react"
import { BookingForm } from "@/components/booking-form"
import Image from "next/image"

const ImagePopup = ({ src, alt, isOpen, onClose, onPrev, onNext, showNavigation = false }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {showNavigation && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </>
        )}

        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )
}

export default function HomePage() {
  const [popupImage, setPopupImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageGallery, setImageGallery] = useState([])

  const openImagePopup = (src, alt, gallery = [], index = 0) => {
    setPopupImage({ src, alt })
    setImageGallery(gallery)
    setCurrentImageIndex(index)
  }

  const closeImagePopup = () => {
    setPopupImage(null)
    setImageGallery([])
  }

  const navigateImage = (direction) => {
    if (imageGallery.length === 0) return

    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % imageGallery.length
        : (currentImageIndex - 1 + imageGallery.length) % imageGallery.length

    setCurrentImageIndex(newIndex)
    setPopupImage(imageGallery[newIndex])
  }

  return (
    <div className="min-h-screen bg-background">
      <ImagePopup
        src={popupImage?.src || "/placeholder.svg"}
        alt={popupImage?.alt}
        isOpen={!!popupImage}
        onClose={closeImagePopup}
        onPrev={() => navigateImage("prev")}
        onNext={() => navigateImage("next")}
        showNavigation={imageGallery.length > 1}
      />

      {/* Header */}
      <header className="border-b border-border/40 bg-white/98 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-8xl">
          <div className="flex items-center gap-3">
            <Image src="/sky-logo.png" alt="Sky Business Centre" width={40} height={40} className="h-10 w-auto" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+85221627306"
              onClick={(e) => {
                if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                  ;(window as any).gtag_report_conversion()
                }
              }}
              className="hidden sm:flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold text-sm">+852 2162 7306</span>
            </a>
            <BookingForm
              trigger={
                <Button className="bg-primary hover:bg-primary/90 shadow-md font-semibold text-sm px-6 hover:shadow-lg transition-all duration-300">
                  Book Tour - Save 20%
                </Button>
              }
            />
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-r from-primary/8 to-secondary/8 py-3 border-b border-border/20">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="flex items-center justify-center gap-4 sm:gap-6 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="font-semibold">500+ Happy Clients</span>
            </div>
            <span className="text-border">•</span>
            <span className="font-semibold">Featured in SCMP</span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="font-semibold hidden sm:inline">Fortune 500 Neighbors</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Reduced padding and optimized typography for better viewport fit */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary/3 via-background to-secondary/3">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
              <Badge
                variant="secondary"
                className="w-fit text-xs sm:text-sm font-bold bg-amber-50 text-amber-800 border-amber-200 px-3 sm:px-4 py-1.5"
              >
                ⚡ ONLY 3 OFFICES LEFT • Times Square Level 34
              </Badge>
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
                Prime Hong Kong Office Space <span className="text-primary">Times Square • Move In Today</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-[1.6] max-w-2xl font-medium">
                Hong Kong's leading provider of premium office spaces since 2011. Fully furnished. Move in today.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 sm:p-5 rounded-xl border border-amber-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-amber-700" />
                  <span className="font-bold text-amber-800 text-base sm:text-lg">ENDS FRIDAY</span>
                </div>
                <p className="text-amber-800 font-semibold text-sm sm:text-base">20% off first month</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <BookingForm
                  trigger={
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 shadow-lg font-bold tracking-wide"
                    >
                      Claim Your 20% Discount
                    </Button>
                  }
                />
                <a
                  href="tel:+85221627306"
                  onClick={(e) => {
                    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                      ;(window as any).gtag_report_conversion()
                    }
                  }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 bg-white font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 w-full"
                  >
                    Call Now: +852 2162 7306
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Move In Today</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Zero Setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">No Contract</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() =>
                openImagePopup(
                  "/images/reception-20area-3.jpeg",
                  "Elegant Reception Area - Sky Business Centre Times Square",
                )
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent z-10 group-hover:from-slate-900/10 transition-all duration-300" />
              <div className="relative h-full">
                <div className="absolute inset-0">
                  <img
                    src="/images/reception-20area-3.jpeg"
                    alt="Elegant Reception Area - Sky Business Centre Times Square"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Numbers Section - Reduced padding for better viewport optimization */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 tracking-tight">
                500+
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 tracking-tight">
                12
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 tracking-tight">
                99%
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 tracking-tight">
                24/7
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">Access Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Reduced padding and improved typography hierarchy */}
      <section id="services" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight leading-[1.1]">
              Choose Your Office. Move In Today.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.6] font-medium">
              Complete office solutions for SMEs, MNCs, and professional firms. All fully equipped and ready for
              immediate occupancy.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1">
              <CardContent className="p-4 sm:p-6">
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden mb-4 cursor-pointer"
                  onClick={() => openImagePopup("/images/ts3419.jpeg", "Private Office with Glass Walls")}
                >
                  <img
                    src="/images/ts3419.jpeg"
                    alt="Private Office with Glass Walls"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">Private Offices</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Fully furnished private offices for 1-20 people. Premium location.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-primary font-bold text-base sm:text-lg">From HK$6,000/month</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm hover:shadow-md transition-all duration-300"
                  >
                    Book Tour
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1">
              <CardContent className="p-4 sm:p-6">
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden mb-4 cursor-pointer"
                  onClick={() =>
                    openImagePopup(
                      "/images/meeting-20room-gobi-3.jpeg",
                      "Professional Conference Room with Modern Lighting",
                    )
                  }
                >
                  <img
                    src="/images/meeting-20room-gobi-3.jpeg"
                    alt="Professional Conference Room with Modern Lighting"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">Meeting Rooms</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Professional conference facilities. Book by the hour.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-primary font-bold text-base sm:text-lg">From HK$200/hour</span>
                  <BookingForm
                    trigger={
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm hover:shadow-md transition-all duration-300"
                      >
                        Book Now
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg col-span-2 lg:col-span-1 hover:-translate-y-1">
              <CardContent className="p-4 sm:p-6">
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden mb-4 cursor-pointer"
                  onClick={() => openImagePopup("/images/common-20area-booth-1.jpeg", "Private Booth Seating Areas")}
                >
                  <img
                    src="/images/common-20area-booth-1.jpeg"
                    alt="Private Booth Seating Areas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">Business Lounges</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Premium networking and relaxation spaces.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-primary font-bold text-base sm:text-lg">Included</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm hover:shadow-md transition-all duration-300"
                  >
                    View More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Gallery Section - Now positioned after Services for better conversion flow */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-muted/20 to-background">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight leading-[1.1]">
              Tour Our Premium Office Spaces
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">
              Level 34 Times Square - Where business excellence meets stunning design
            </p>
          </div>

          {/* Reception Areas */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center tracking-tight">
              Reception Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  src: "/images/reception-20area-1.jpeg",
                  alt: "Main Reception and Lounge Area",
                },
                {
                  src: "/images/reception-20area-3.jpeg",
                  alt: "Spacious Reception with Modern Design",
                },
                {
                  src: "/images/reception-20area-5.jpeg",
                  alt: "Private Booth Reception Areas",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500"
                  onClick={() => openImagePopup(image.src, image.alt)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Lounge & Common Areas */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center tracking-tight">
              Lounge & Common Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  src: "/images/common-20area-1.jpeg",
                  alt: "Elegant Seating Area with Modern Furniture",
                },
                {
                  src: "/images/common-20area-11.jpeg",
                  alt: "Modern Lounge with Kitchen and Bar Area",
                },
                {
                  src: "/images/common-20area-7.jpeg",
                  alt: "Active Common Area with Kitchen",
                },
                {
                  src: "/images/common-20area-booth-1.jpeg",
                  alt: "Private Booth Seating Areas",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500"
                  onClick={() => openImagePopup(image.src, image.alt)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Private Offices & Workspaces */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center tracking-tight">
              Private Offices & Workspaces
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  src: "/images/sky-20201113-32.jpeg",
                  alt: "Open Workspace with City Views",
                },
                {
                  src: "/images/whatsapp-20image-202025-08-13-20at-2016.jpeg",
                  alt: "Individual Workstation Setup",
                },
                {
                  src: "/images/ts3402.jpeg",
                  alt: "Team Office with Harbor Views",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500"
                  onClick={() => openImagePopup(image.src, image.alt)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pantry & Kitchen Facilities */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center tracking-tight">
              Pantry & Kitchen Facilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  src: "/images/pantry-3.jpeg",
                  alt: "Modern Kitchen with Premium Appliances",
                },
                {
                  src: "/images/pantry-4.jpeg",
                  alt: "Professional Coffee Machines",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="aspect-[16/10] rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500"
                  onClick={() => openImagePopup(image.src, image.alt)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Meeting Rooms */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
              Professional Meeting Rooms
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              State-of-the-art conference facilities with advanced AV equipment and professional ambiance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                src: "/images/meeting-20room-gobi-3.jpeg",
                alt: "Gobi Conference Room with Modern Lighting",
              },
              {
                src: "/images/meeting-20room-gobi-1.jpeg",
                alt: "Gobi Meeting Room with Abstract Art",
              },
              {
                src: "/images/meeting-20room-salzbury-2.jpeg",
                alt: "Salzburg Meeting Room Entrance",
              },
              {
                src: "/images/ts-meeting-20room-gobi-1.jpeg",
                alt: "Executive Conference Room",
              },
              {
                src: "/images/ts-meeting-20room-gobi-2.jpeg",
                alt: "Modern Meeting Space with AV Equipment",
              },
              {
                src: "/images/meeting-20room-salzbury-1.jpeg",
                alt: "Salzburg Conference Room Interior",
              },
              {
                src: "/images/meeting-20room-gobi-4.jpeg",
                alt: "Gobi Room Entrance with Branding",
              },
              {
                src: "/images/meeting-20room-gobi-2.jpeg",
                alt: "Premium Conference Room with City Views",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500"
                onClick={() => openImagePopup(image.src, image.alt)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Reduced padding and improved typography */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight leading-[1.1]">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">
              All-inclusive rates. No hidden fees. Move in today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="p-5 sm:p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="text-center">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 tracking-tight">Private Office</h3>
                <div className="mb-4 sm:mb-5">
                  <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">HK$6,000</span>
                  <span className="text-muted-foreground text-base sm:text-lg font-medium">/month</span>
                </div>
                <ul className="space-y-2 text-muted-foreground mb-5 sm:mb-6">
                  <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    1-20 person capacity
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    Fully furnished
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    Premium location
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white font-semibold h-11 sm:h-12 text-sm sm:text-base"
                >
                  Book Tour
                </Button>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white px-4 py-1 font-semibold">Most Popular</Badge>
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Meeting Room</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">HK$200</span>
                  <span className="text-muted-foreground text-base sm:text-lg">/hour</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-muted-foreground mb-6 sm:mb-8">
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    Video conferencing
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    Presentation equipment
                  </li>
                </ul>
                <BookingForm
                  trigger={
                    <Button className="w-full bg-primary hover:bg-primary/90 font-semibold h-11 sm:h-12 text-sm sm:text-base">
                      Book Now
                    </Button>
                  }
                />
              </div>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="text-center">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Private Office</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">HK$8,000</span>
                  <span className="text-muted-foreground text-base sm:text-lg">/month</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-muted-foreground mb-6 sm:mb-8">
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    Fully furnished office
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    City views included
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    24/7 access
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white font-semibold h-11 sm:h-12 text-sm sm:text-base"
                >
                  Book Tour
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
              🔥 Limited Time: 20% off first month + HK$5,000 setup fee waived
            </p>
            <BookingForm
              trigger={
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 font-bold px-6 sm:px-8 h-12 sm:h-14 shadow-lg text-sm sm:text-base"
                >
                  Claim Your 20% Discount
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Google Reviews Section - Reduced padding for better viewport fit */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1]">
                Google Reviews
              </h2>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold text-lg">4.9</span>
              <span className="text-muted-foreground font-medium">(127 reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <img
                  src="/professional-asian-woman-with-short-black-hair-in-.png"
                  alt="Sarah Liu"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Sarah Liu</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">2 weeks ago</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                "Moved in same day! The location is perfect and the facilities are top-notch. Best business decision we
                made. The Times Square location gives us incredible credibility with clients."
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span>Posted on Google</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <img
                  src="/professional-asian-man-with-glasses-in-business-su.png"
                  alt="Michael Chen"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Michael Chen</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">1 month ago</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                "Professional environment, amazing views, and the staff is incredibly helpful. Worth every dollar. The
                24/7 access and premium amenities make this the best office space in Hong Kong."
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span>Posted on Google</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">AW</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Amanda Wong</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">3 weeks ago</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                "The flexibility and premium location helped us close deals faster. Our clients are always impressed
                when they visit. Sky Business Centre exceeded all expectations."
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span>Posted on Google</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <img
                  src="/professional-korean-man-in-business-attire-with-fr.png"
                  alt="David Kim"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">David Kim</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">5 days ago</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                "As a startup founder, this place gave us the professional image we needed. The meeting rooms are
                perfect for investor presentations. Highly recommend!"
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span>Posted on Google</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">JT</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Jennifer Tan</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">1 week ago</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                "The concierge service is exceptional. They handle all our mail and calls professionally. The networking
                opportunities with other businesses here are invaluable."
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span>Posted on Google</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">RL</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Robert Lee</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">4 days ago</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                "Switched from a traditional lease and saved 40% on overhead costs. The flexibility to scale up during
                busy periods is exactly what our consulting firm needed."
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span>Posted on Google</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <img
                  src="/professional-chinese-woman-with-long-hair-in-busin.png"
                  alt="Lisa Zhang"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Lisa Zhang</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">2 months ago</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                "The IT support is fantastic - never had any downtime. The location impresses every client who visits.
                Worth every penny for the professional image it gives our law firm."
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span>Posted on Google</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">MH</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Mark Harrison</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">6 days ago</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                "Perfect for international business. The prestigious address and professional setup helped us establish
                credibility in the Hong Kong market immediately."
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span>Posted on Google</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">ST</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Sophie Taylor</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">3 days ago</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                "The hot desk option is perfect for my freelance work. Great networking environment and the coffee is
                actually good! The views from Level 34 are incredible."
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span>Posted on Google</span>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8"></div>
        </div>
      </section>

      {/* Why Choose Us Section - Reduced padding and improved typography */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight leading-[1.1]">
              Why 500+ Businesses Choose Sky Business Centre
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">
              The smart choice for growing businesses in Hong Kong
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-5 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3 tracking-tight">Move In Today</h3>
              <p className="text-muted-foreground font-medium leading-[1.5]">
                Fully furnished offices ready for immediate occupancy. No waiting, no setup delays.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Premium Location</h3>
              <p className="text-muted-foreground">
                Times Square Level 34 - Hong Kong's most prestigious business address with Fortune 500 neighbors.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Flexible Terms</h3>
              <p className="text-muted-foreground">Scale up or down as your business grows. Monthly terms available.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Everything Included. No Hidden Fees.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">Premium amenities at no extra cost</p>
          </div>

          <div className="mb-8 sm:mb-12">
            <div
              className="aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl cursor-pointer group hover:shadow-2xl transition-all duration-500"
              onClick={() => openImagePopup("/images/pantry-4.jpeg", "Premium Coffee Machines and Pantry Facilities")}
            >
              <img
                src="/images/pantry-4.jpeg"
                alt="Premium Coffee Machines and Pantry Facilities"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Clock,
                title: "24/7 Secure Access",
                desc: "Round-the-clock access with advanced security systems",
              },
              {
                icon: Wifi,
                title: "Enterprise-Grade Internet",
                desc: "Dedicated high-speed fiber with backup connections",
              },
              {
                icon: Shield,
                title: "On-Site IT Support",
                desc: "Professional technical assistance and troubleshooting",
              },
              {
                icon: Coffee,
                title: "Premium Refreshments",
                desc: "Complimentary barista-quality coffee and beverages",
              },
              {
                icon: Printer,
                title: "Professional Print Center",
                desc: "High-quality printing, scanning, and copying services",
              },
              {
                icon: Users,
                title: "Equipped Meeting Spaces",
                desc: "Boardrooms with video conferencing and presentation tech",
              },
              {
                icon: Phone,
                title: "Private Phone Booths",
                desc: "Soundproof spaces for confidential calls and video meetings",
              },
              {
                icon: Building,
                title: "Dedicated Concierge",
                desc: "Professional reception and business support services",
              },
            ].map((facility, index) => (
              <Card
                key={index}
                className="text-center p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 shadow-sm"
              >
                <facility.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{facility.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{facility.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Everything you need to know about our premium office spaces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Can I really move in today?</h3>
              <p className="text-muted-foreground">
                Yes! Our offices are fully furnished and ready for immediate occupancy. Complete the booking process and
                you can start working the same day.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">What's included in the price?</h3>
              <p className="text-muted-foreground">
                Everything - furniture, high-speed internet, utilities, cleaning, security, reception services, meeting
                room access, and all amenities. No hidden fees.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">What are the contract terms?</h3>
              <p className="text-muted-foreground">
                Private offices have flexible monthly terms. You can scale up or down as your business needs change.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">How does the 20% discount work?</h3>
              <p className="text-muted-foreground">
                Book your tour this week and get 20% off your first month. Offer ends Friday - limited to first 3
                bookings.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">What makes Times Square location special?</h3>
              <p className="text-muted-foreground">
                Level 34 offers stunning city views, direct MTR access, and you'll be neighbors with Fortune 500
                companies. It's Hong Kong's most prestigious business address.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <BookingForm
              trigger={
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-8 sm:px-12 w-full sm:w-auto font-semibold"
                >
                  Still Have Questions? Book a Tour
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Hong Kong's #1 Business Address
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Premium locations in Causeway Bay and Tsim Sha Tsui. Direct MTR access. Fortune 500 neighbors.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Level 34, Tower One, Times Square</p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      1 Matheson St., Causeway Bay, Hong Kong
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Tsim Sha Tsui Location</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Also available - Contact for details</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="h-4 sm:h-5 w-4 sm:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base">Direct MTR Station Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 sm:h-5 w-4 sm:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base">Central Business District</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <BookingForm
                  trigger={
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 w-full sm:w-auto font-semibold text-sm sm:text-base"
                    >
                      Secure Your Office - 20% Off
                    </Button>
                  }
                />
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent font-medium border-primary text-primary hover:bg-primary hover:text-white text-sm sm:text-base"
                >
                  Get Directions
                </Button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8944!2d114.1823!3d22.2783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f9df0e7b85%3A0x8d8d8d8d8d8d8d8d!2s\`\`\`
d22.2783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f9df0e7b85%3A0x8d8d8d8d8d8d8d8d!2sTimes%20Square%2C%20Causeway%20Bay%2C%20Hong%20Kong!5e0!3m2!1sen!2shk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
                Don't Miss Out. Only 3 Offices Left.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Book your tour today and secure 20% off your first month.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <Card className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Phone</h3>
                <p className="text-muted-foreground text-sm sm:text-base">(852) 2162 7306</p>
              </Card>

              <Card className="text-center p-4 sm:p-6">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
                <p className="text-muted-foreground text-sm sm:text-base">info@skybizcentre.com</p>
              </Card>

              <Card className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Visit Us</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Times Square, Causeway Bay</p>
              </Card>
            </div>

            <div className="text-center">
              <BookingForm
                trigger={
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 font-bold px-8 sm:px-12 w-full sm:w-auto font-semibold text-sm sm:text-base"
                  >
                    Claim Your Office - 20% Off Ends Friday
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-foreground text-background py-6 sm:py-8">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/sky-logo.png"
                alt="Sky Business Centre"
                width={32}
                height={32}
                className="h-6 sm:h-8 w-auto brightness-0 invert"
              />
              <span className="font-playfair text-base sm:text-lg font-bold">Sky Business Centre</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm">
              <a
                href="tel:+85239510100"
                onClick={(e) => {
                  if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                    ;(window as any).gtag_report_conversion("tel:+85239510100")
                  }
                }}
                className="flex items-center gap-2 hover:text-background/80"
              >
                <Phone className="h-4 w-4" />
                (852) 3951 0100
              </a>
              <span className="text-background/60">|</span>
              <span>Times Square, Causeway Bay</span>
              <span className="text-background/60">|</span>
              <span className="text-background/80">© 2024 Sky Business Centre</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg p-3 sm:p-4 z-40 lg:hidden">
        <div className="flex gap-2 sm:gap-3">
          <a
            href="tel:+85221627306"
            onClick={(e) => {
              if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                ;(window as any).gtag_report_conversion()
              }
            }}
            className="flex-1"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-primary text-primary font-bold bg-transparent"
            >
              Call Now
            </Button>
          </a>
          <BookingForm
            trigger={
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 font-bold transition-all duration-300 hover:shadow-lg"
              >
                Book Tour
              </Button>
            }
          />
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/85295461308"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 lg:bottom-8 lg:right-8 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>

          {/* Main button */}
          <div className="relative bg-[#25D366] hover:bg-[#20BA5A] rounded-full p-4 sm:p-5 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Chat with us on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
