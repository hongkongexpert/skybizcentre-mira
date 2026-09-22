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
  Train,
  Ship,
} from "lucide-react"
import { BookingForm } from "@/components/booking-form"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/LanguageContext"

const ImagePopup = ({ src, alt, isOpen, onClose, onPrev, onNext, showNavigation = false }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={alt}>
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {showNavigation && (
          <>
            <button
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={onNext}
              aria-label="Next image"
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

const FACILITY_ICONS = [Clock, Wifi, Shield, Coffee, Printer, Users, Phone, Building]

function getEarlyBirdDeadline(lang: "en" | "zh") {
  const now = new Date()
  const deadline = new Date(now.getFullYear(), now.getMonth() + 2, 0)
  if (lang === "zh") return `${deadline.getFullYear()}年${deadline.getMonth() + 1}月${deadline.getDate()}日`
  return deadline.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function HomePage() {
  const { lang, setLang, t } = useLanguage()
  const [popupImage, setPopupImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageGallery, setImageGallery] = useState([])

  const deadline = getEarlyBirdDeadline(lang)

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

  const Kicker = ({ children, align = "center" }: { children: React.ReactNode; align?: "center" | "left" }) => (
    <p
      className={`flex items-center gap-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-secondary mb-3 sm:mb-4 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="h-px w-10 bg-secondary/50" />
      {children}
      {align === "center" && <span className="h-px w-10 bg-secondary/50" />}
    </p>
  )

  const galleryButton = (
    image: { src: string; alt: string },
    index: number,
    gallery: { src: string; alt: string }[],
    aspectClass = "aspect-square sm:aspect-[4/3]",
  ) => (
    <button
      type="button"
      className={`${aspectClass} w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
      onClick={() => openImagePopup(image.src, image.alt, gallery, index)}
      aria-label={`View photo: ${image.alt}`}
    >
      <img
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
    </button>
  )

  const receptionImages = [
    { src: "/images/mira/reception-1.jpg", alt: t.imgReception1 },
    { src: "/images/mira/reception-2.jpg", alt: t.imgReception2 },
    { src: "/images/mira/reception-3.jpg", alt: t.imgReception3 },
  ]

  const loungeImages = [
    { src: "/images/mira/lounge-1.jpg", alt: t.imgLounge1 },
    { src: "/images/mira/lounge-2.jpg", alt: t.imgLounge2 },
    { src: "/images/mira/lounge-3.jpg", alt: t.imgLounge3 },
    { src: "/images/mira/corridor-1.jpg", alt: t.imgCorridor },
  ]

  const officeImages = [
    { src: "/images/mira/office-1.jpg", alt: t.imgOffice1 },
    { src: "/images/mira/office-2.jpg", alt: t.imgOffice2 },
    { src: "/images/mira/office-3.jpg", alt: t.imgOffice3 },
    { src: "/images/mira/office-4.jpg", alt: t.imgOffice4 },
    { src: "/images/mira/office-5.jpg", alt: t.imgOffice5 },
    { src: "/images/mira/office-6.jpg", alt: t.imgOffice6 },
  ]

  const pantryImages = [
    { src: "/images/mira/pantry-1.jpg", alt: t.imgPantry1 },
    { src: "/images/mira/pantry-2.jpg", alt: t.imgPantry2 },
  ]

  const meetingImages = [
    { src: "/images/mira/meeting-1.jpg", alt: t.imgMeeting1 },
    { src: "/images/mira/meeting-2.jpg", alt: t.imgMeeting2 },
    { src: "/images/mira/meeting-3.jpg", alt: t.imgMeeting3 },
    { src: "/images/mira/meeting-4.jpg", alt: t.imgMeeting4 },
    { src: "/images/mira/meeting-5.jpg", alt: t.imgMeeting5 },
  ]

  const reviewAvatars: Record<string, { img?: string; initials?: string; gradient?: string }> = {
    "Sarah Liu": { img: "/professional-asian-woman-with-short-black-hair-in-.png" },
    "Michael Chen": { img: "/professional-asian-man-with-glasses-in-business-su.png" },
    "Amanda Wong": { initials: "AW", gradient: "from-pink-500 to-rose-600" },
    "David Kim": { img: "/professional-korean-man-in-business-attire-with-fr.png" },
    "Jennifer Tan": { initials: "JT", gradient: "from-purple-500 to-indigo-600" },
    "Robert Lee": { initials: "RL", gradient: "from-cyan-500 to-blue-600" },
    "Lisa Zhang": { img: "/professional-chinese-woman-with-long-hair-in-busin.png" },
    "Mark Harrison": { initials: "MH", gradient: "from-yellow-500 to-orange-600" },
    "Sophie Taylor": { initials: "ST", gradient: "from-red-500 to-pink-600" },
  }

  return (
    <div id="top" className="min-h-screen bg-background">
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
      <header className="border-b border-border/40 bg-background/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-8xl">
          <a href="#top" aria-label="Sky Business Centre - back to top" className="flex items-center gap-3">
            <Image src="/sky-logo.png" alt="Sky Business Centre" width={40} height={40} className="h-10 w-auto" />
          </a>

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-full border border-border overflow-hidden text-xs font-semibold" role="group" aria-label="Language selector">
              <button
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-white" : "text-foreground/70 hover:text-primary"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("zh")}
                aria-pressed={lang === "zh"}
                className={`px-3 py-1.5 transition-colors ${lang === "zh" ? "bg-primary text-white" : "text-foreground/70 hover:text-primary"}`}
              >
                繁
              </button>
            </div>
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
              <span className="font-semibold text-sm">{t.phoneDisplay}</span>
            </a>
            <BookingForm
              trigger={
                <Button className="bg-primary hover:bg-primary/90 shadow-md font-semibold text-sm px-6 hover:shadow-lg transition-all duration-300">
                  {t.bookTourCta}
                </Button>
              }
            />
          </div>
        </div>
      </header>

      <div className="bg-muted/50 py-3 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="flex items-center justify-center gap-4 sm:gap-6 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="font-semibold">{t.trustClients}</span>
            </div>
            <span className="text-border">•</span>
            <span className="font-semibold">{t.trustScmp}</span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="font-semibold hidden sm:inline">{t.trustFortune}</span>
          </div>
        </div>
      </div>

      {/* Hero Banner - half height image */}
      <section className="relative h-[48vh] sm:h-[55vh]">
        <img
          src="/images/mira/hero.jpg"
          alt={t.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </section>

      {/* Hero Content */}
      <section className="py-12 sm:py-16 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              {t.heroBadge}
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
              {t.heroTitleA} <span className="text-secondary">{t.heroTitleB}</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-[1.7] font-medium">
              {t.heroSubtitle}
            </p>

            <div className="border-l-2 border-secondary pl-4 sm:pl-5">
              <p className="text-foreground font-semibold text-sm sm:text-base uppercase tracking-[0.15em]">
                {t.offerTitle}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mt-1">{t.offerBody(deadline)}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <BookingForm
                trigger={
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-8 h-12 sm:h-14 font-bold tracking-wide"
                  >
                    {t.heroCtaPrimary}
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
                  className="text-base sm:text-lg px-8 h-12 sm:h-14 bg-transparent font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 w-full"
                >
                  {t.heroCtaCall}
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-muted-foreground text-sm font-medium">
              <span>{t.heroPoint1}</span>
              <span className="text-border">·</span>
              <span>{t.heroPoint2}</span>
              <span className="text-border">·</span>
              <span>{t.heroPoint3}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Numbers Section */}
      <section className="py-10 sm:py-14 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 tracking-tight">
                500+
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">{t.statClients}</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 tracking-tight">
                15+
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">{t.statYears}</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 tracking-tight">
                3
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">{t.statCentres}</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 tracking-tight">
                24/7
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">{t.statAccess}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-10 sm:mb-14">
            <Kicker>{t.kServices}</Kicker>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight leading-[1.1]">
              {t.servicesTitle}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.6] font-medium">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            <Card className="group hover:shadow-lg transition-all duration-500 border border-border/70 shadow-none hover:-translate-y-1">
              <CardContent className="p-4 sm:p-6">
                <button
                  type="button"
                  className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={() => openImagePopup("/images/mira/office-1.jpg", t.imgOffice1)}
                  aria-label={`View photo: ${t.imgOffice1}`}
                >
                  <img
                    src="/images/mira/office-1.jpg"
                    alt={t.imgOffice1}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </button>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.svcOfficeTitle}</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {t.svcOfficeDesc}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-primary font-bold text-base sm:text-lg">{t.svcOfficePrice}</span>
                  <BookingForm
                    trigger={
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm hover:shadow-md transition-all duration-300"
                      >
                        {t.bookTour}
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-500 border border-border/70 shadow-none hover:-translate-y-1">
              <CardContent className="p-4 sm:p-6">
                <button
                  type="button"
                  className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={() => openImagePopup("/images/mira/meeting-1.jpg", t.imgMeeting1)}
                  aria-label={`View photo: ${t.imgMeeting1}`}
                >
                  <img
                    src="/images/mira/meeting-1.jpg"
                    alt={t.imgMeeting1}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </button>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.svcMeetingTitle}</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {t.svcMeetingDesc}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-primary font-bold text-base sm:text-lg">{t.svcMeetingPrice}</span>
                  <BookingForm
                    trigger={
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm hover:shadow-md transition-all duration-300"
                      >
                        {t.bookNow}
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-500 border border-border/70 shadow-none hover:-translate-y-1">
              <CardContent className="p-4 sm:p-6">
                <button
                  type="button"
                  className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={() => openImagePopup("/images/mira/lounge-1.jpg", t.imgLounge1)}
                  aria-label={`View photo: ${t.imgLounge1}`}
                >
                  <img
                    src="/images/mira/lounge-1.jpg"
                    alt={t.imgLounge1}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </button>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.svcLoungeTitle}</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {t.svcLoungeDesc}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-primary font-bold text-base sm:text-lg">{t.svcLoungePrice}</span>
                  <a href="#gallery">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm hover:shadow-md transition-all duration-300"
                    >
                      {t.viewMore}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-500 border border-border/70 shadow-none hover:-translate-y-1">
              <CardContent className="p-4 sm:p-6">
                <button
                  type="button"
                  className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={() => openImagePopup("/images/mira/reception-1.jpg", t.imgReception1)}
                  aria-label={`View photo: ${t.imgReception1}`}
                >
                  <img
                    src="/images/mira/reception-1.jpg"
                    alt={t.imgReception1}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </button>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.svcVirtualTitle}</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {t.svcVirtualDesc}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-primary font-bold text-base sm:text-lg">{t.svcVirtualPrice}</span>
                  <BookingForm
                    trigger={
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm hover:shadow-md transition-all duration-300"
                      >
                        {t.bookNow}
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Gallery Section */}
      <section id="gallery" className="py-14 sm:py-20 bg-muted/40 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-10 sm:mb-14">
            <Kicker>{t.kGallery}</Kicker>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight leading-[1.1]">
              {t.galleryTitle}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">{t.gallerySubtitle}</p>
          </div>

          {/* Reception Areas */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center tracking-tight">
              {t.galleryReception}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {receptionImages.map((image, index) => galleryButton(image, index, receptionImages))}
            </div>
          </div>

          {/* Lounge & Common Areas */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center tracking-tight">
              {t.galleryLounge}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {loungeImages.map((image, index) => galleryButton(image, index, loungeImages))}
            </div>
          </div>

          {/* Private Offices & Workspaces */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center tracking-tight">
              {t.galleryOffices}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {officeImages.map((image, index) => galleryButton(image, index, officeImages))}
            </div>
          </div>

          {/* Pantry & Kitchen Facilities */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center tracking-tight">
              {t.galleryPantry}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {pantryImages.map((image, index) =>
                galleryButton(image, index, pantryImages, "aspect-[16/10]"),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Meeting Rooms */}
      <section className="py-14 sm:py-20 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-10 sm:mb-14">
            <Kicker>{t.kMeeting}</Kicker>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
              {t.meetingTitle}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.meetingSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {meetingImages.map((image, index) => galleryButton(image, index, meetingImages))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-14 sm:py-20 bg-muted/40 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-10 sm:mb-14">
            <Kicker>{t.kPricing}</Kicker>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight leading-[1.1]">
              {t.pricingTitle}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">{t.pricingSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="p-5 sm:p-6 hover:shadow-xl transition-all duration-300 border border-border/70 shadow-none">
              <div className="text-center">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 tracking-tight">{t.priceOfficeTitle}</h3>
                <div className="mb-4 sm:mb-5">
                  <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">{t.priceOfficeAmount}</span>
                  <span className="text-muted-foreground text-base sm:text-lg font-medium">{t.pricePerMonth}</span>
                </div>
                <ul className="space-y-2 text-muted-foreground mb-5 sm:mb-6">
                  <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    {t.priceOffice1A}
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    {t.priceOffice1B}
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    {t.priceOffice1C}
                  </li>
                </ul>
                <BookingForm
                  trigger={
                    <Button
                      variant="outline"
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white font-semibold h-11 sm:h-12 text-sm sm:text-base"
                    >
                      {t.bookTour}
                    </Button>
                  }
                />
              </div>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary relative shadow-none">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white px-4 py-1 font-semibold">{t.mostPopular}</Badge>
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.priceMeetingTitle}</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">{t.priceMeetingAmount}</span>
                  <span className="text-muted-foreground text-base sm:text-lg">{t.pricePerHour}</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-muted-foreground mb-6 sm:mb-8">
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    {t.priceMeetingA}
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    {t.priceMeetingB}
                  </li>
                </ul>
                <BookingForm
                  trigger={
                    <Button className="w-full bg-primary hover:bg-primary/90 font-semibold h-11 sm:h-12 text-sm sm:text-base">
                      {t.bookNow}
                    </Button>
                  }
                />
              </div>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-border/70 shadow-none">
              <div className="text-center">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.priceOffice2Title}</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">{t.priceTeamAmount}</span>
                  <span className="text-muted-foreground text-base sm:text-lg">{t.pricePerWorkstation}</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-muted-foreground mb-6 sm:mb-8">
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    {t.priceOffice2A}
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    {t.priceOffice2B}
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    {t.priceOffice2C}
                  </li>
                </ul>
                <BookingForm
                  trigger={
                    <Button
                      variant="outline"
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white font-semibold h-11 sm:h-12 text-sm sm:text-base"
                    >
                      {t.bookTour}
                    </Button>
                  }
                />
              </div>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">{t.pricingOffer(deadline)}</p>
            <BookingForm
              trigger={
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 font-bold px-6 sm:px-8 h-12 sm:h-14 shadow-lg text-sm sm:text-base"
                >
                  {t.pricingCta}
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-14 sm:py-20 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-10 sm:mb-14">
            <Kicker>{t.kReviews}</Kicker>
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1]">
                {t.reviewsTitle}
              </h2>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold text-lg">4.9</span>
              <span className="text-muted-foreground font-medium">{t.reviewsCount}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {t.reviews.map((review, index) => {
              const avatar = reviewAvatars[review.name] || {}
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border border-border/70">
                  <div className="flex items-start gap-3 mb-4">
                    {avatar.img ? (
                      <img
                        src={avatar.img}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${avatar.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-white font-semibold text-sm">{avatar.initials}</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{review.name}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.when}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                    <span>{t.postedOnGoogle}</span>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-8"></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 sm:py-20 bg-muted/40 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-10 sm:mb-14">
            <Kicker>{t.kWhy}</Kicker>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-tight leading-[1.1]">
              {t.whyTitle}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">{t.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-5 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3 tracking-tight">{t.why1Title}</h3>
              <p className="text-muted-foreground font-medium leading-[1.5]">{t.why1Desc}</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{t.why2Title}</h3>
              <p className="text-muted-foreground">{t.why2Desc}</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{t.why3Title}</h3>
              <p className="text-muted-foreground">{t.why3Desc}</p>
            </Card>
          </div>

          <p className="text-center text-muted-foreground font-medium text-sm sm:text-base mt-8 sm:mt-10 max-w-3xl mx-auto leading-relaxed">
            {t.centresInfo}
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-14 sm:py-20 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-10 sm:mb-14">
            <Kicker>{t.kFacilities}</Kicker>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              {t.facilitiesTitle}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">{t.facilitiesSubtitle}</p>
          </div>

          <div className="mb-8 sm:mb-12">
            <button
              type="button"
              className="aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl cursor-pointer group hover:shadow-2xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => openImagePopup("/images/mira/pantry-1.jpg", t.facilitiesImageAlt)}
              aria-label={`View photo: ${t.facilitiesImageAlt}`}
            >
              <img
                src="/images/mira/pantry-1.jpg"
                alt={t.facilitiesImageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.facilities.map((facility, index) => {
              const Icon = FACILITY_ICONS[index % FACILITY_ICONS.length]
              return (
                <Card
                  key={index}
                  className="text-center p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/60 shadow-none"
                >
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{facility.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{facility.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 sm:py-20 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-10 sm:mb-14">
            <Kicker>{t.kFaq}</Kicker>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">{t.faqTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground">{t.faqSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {t.faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <BookingForm
              trigger={
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-8 sm:px-12 w-full sm:w-auto font-semibold"
                >
                  {t.faqCta}
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-14 sm:py-20 bg-muted/40 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Kicker align="left">{t.kLocation}</Kicker>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                {t.locationTitle}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">{t.locationSubtitle}</p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{t.addressLine1}</p>
                    <p className="text-muted-foreground text-sm sm:text-base">{t.addressLine2}</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base mb-2">{t.transportTitle}</p>
                  <ul className="space-y-2">
                    {t.transport.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        {item.icon === "ship" ? (
                          <Ship className="h-4 sm:h-5 w-4 sm:w-5 text-primary flex-shrink-0" />
                        ) : (
                          <Train className="h-4 sm:h-5 w-4 sm:w-5 text-primary flex-shrink-0" />
                        )}
                        <span className="text-sm sm:text-base flex-1">{item.name}</span>
                        <span className="text-muted-foreground text-xs sm:text-sm font-medium whitespace-nowrap">
                          {item.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <BookingForm
                  trigger={
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 w-full sm:w-auto font-semibold text-sm sm:text-base"
                    >
                      {t.locationCta}
                    </Button>
                  }
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mira+Place+Tower+A,+132+Nathan+Road,+Tsim+Sha+Tsui,+Hong+Kong"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto bg-transparent font-medium border-primary text-primary hover:bg-primary hover:text-white text-sm sm:text-base"
                  >
                    {t.getDirections}
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps?q=Mira+Place+Tower+A,+132+Nathan+Road,+Tsim+Sha+Tsui,+Hong+Kong&output=embed"
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
      <section id="contact" className="py-14 sm:py-20 bg-muted/40 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <Kicker>{t.kContact}</Kicker>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
                {t.contactTitle}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">{t.contactSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <Card className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t.contactPhone}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">(852) 2162 7306</p>
              </Card>

              <Card className="text-center p-4 sm:p-6">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t.contactEmail}</h3>
                <a href="mailto:sales@skybizcentre.com" className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors">
                  sales@skybizcentre.com
                </a>
              </Card>

              <Card className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t.contactVisit}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{t.locationShort}</p>
              </Card>
            </div>

            <div className="text-center">
              <BookingForm
                trigger={
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 font-bold px-8 sm:px-12 w-full sm:w-auto font-semibold text-sm sm:text-base"
                  >
                    {t.contactCta}
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-foreground text-background py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
            <Image
              src="/sky-logo.png"
              alt="Sky Business Centre"
              width={40}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="font-playfair text-lg sm:text-xl font-bold tracking-wide">{t.brand}</p>
            <div className="h-px w-16 bg-background/30" />
            <p className="text-sm text-background/80 leading-relaxed">
              {t.addressLine1}
              <br />
              {t.addressLine2}
            </p>
            <a
              href="tel:+85221627306"
              onClick={(e) => {
                if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                  ;(window as any).gtag_report_conversion()
                }
              }}
              className="flex items-center gap-2 text-sm hover:text-background/80"
            >
              <Phone className="h-4 w-4" />
              (852) 2162 7306
            </a>
            <p className="text-xs text-background/60 mt-2">
              {t.footerCopyright} · {t.footerLegal}
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-3 sm:p-4 z-40 lg:hidden">
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
              {t.callNow}
            </Button>
          </a>
          <BookingForm
            trigger={
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 font-bold transition-all duration-300 hover:shadow-lg"
              >
                {t.bookTourCta}
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
              {t.whatsappTooltip}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
