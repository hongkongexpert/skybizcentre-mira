"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookingForm } from "@/components/booking-form"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Wifi,
  Shield,
  Clock,
  Users,
  Coffee,
  Printer,
  Building,
  Star,
  CheckCircle,
  Award,
  TrendingUp,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-white/98 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-8xl">
          <div className="flex items-center gap-3">
            <Image src="/sky-logo.png" alt="Sky Business Centre" width={40} height={40} className="h-10 w-auto" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+85221627306"
              className="hidden sm:flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold text-sm">+852 2162 7306</span>
            </a>
            <BookingForm
              trigger={
                <Button className="bg-primary hover:bg-primary/90 shadow-md font-semibold text-sm px-6">
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
                <a href="tel:+85221627306">
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
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent z-10" />
              <div className="relative h-full">
                <div className="absolute inset-0">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Times%20Square.jpg-28hpRP9MTx2sxbNJz3xD1zL8TUIEyE.jpeg"
                    alt="Times Square Building - Sky Business Centre Location"
                    className="w-full h-full object-cover"
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
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-4 sm:p-6">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TS3419.jpg-d9dUZvuIX1hnADgOxgPYaynWDmTKTk.jpeg"
                    alt="Private Office with Glass Walls"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                    className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm"
                  >
                    Book Tour
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-4 sm:p-6">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meeting%20Room_Gobi_3.jpg-NJB8gDP4ikhGtWYIFdJxMyoOILBsJY.jpeg"
                    alt="Professional Conference Room with Modern Lighting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">Meeting Rooms</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Professional conference facilities. Book by the hour.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-primary font-bold text-base sm:text-lg">From HK$200/hour</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TS3402.jpg-5QyC5VKQdSIVK2DJmd2plg6ckyNPap.jpeg"
                    alt="Team Office with City Views"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 sm:mb-3">Hot Desks</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Flexible workspace. No contracts required.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-primary font-bold text-base sm:text-lg">From HK$500/day</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm"
                  >
                    Start Today
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reception%20Area_1.jpg-w5aSK776Spupq1TnjrikKEQOEoxx3M.jpeg"
                alt="Main Reception and Lounge Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meeting%20Room_Gobi_1.jpg-HV7YcDzOAGhjzUcs3o67GUOOYwa5pa.jpeg"
                alt="Gobi Conference Room with Abstract Art"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pantry_3.jpg-RcUNBnEhmF3H4Rr3lI7n2jHvS5RSIB.jpeg"
                alt="Modern Pantry with Professional Coffee Machines"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meeting%20Room_Salzbury_2.jpg-7cCJnwvbtOvyYBWeAzrPS35PidfzSv.jpeg"
                alt="Salzburg Meeting Room Entrance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sky_20201113_32.jpg-7HzBnQLjA2JceEyLUSN2Drbp3gqRlw.jpeg"
                alt="Open Workspace with City Views"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TS_Meeting%20Room_Gobi_1.jpg-ieIKJi4L9rwgT095FtjczZMkJyyte7.jpeg"
                alt="Professional Conference Room Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-13%20at%2016.29.30.jpg-JUFAVhHYhxN6jSkSIf3UjGq97e9IMn.jpeg"
                alt="Individual Workstation Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TS_Meeting%20Room_Gobi_2.jpg-RurJXyTL1M7NfddZVeuKrogi5w4O9t.jpeg"
                alt="Modern Meeting Room with LED Lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Common%20Area_Booth_1.jpg-DNszjJtJYLlFW1WtUp7SS964lbwjvt.jpeg"
                alt="Private Booth Seating Areas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meeting%20Room_Salzbury_1.jpg-CGpG7yBbPmxrDe3JT94RXRttwAdtun.jpeg"
                alt="Salzburg Conference Room Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meeting%20Room_Gobi_4.jpg-OicNAZEonMYryo4eg2oilDqrWBZNgF.jpeg"
                alt="Gobi Meeting Room Glass Door"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meeting%20Room_Gobi_2.jpg-e5KwHLgDhvlVquONan967bX7tbWr3o.jpeg"
                alt="Executive Conference Room with Artwork"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <BookingForm
              trigger={
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 w-full sm:w-auto font-semibold text-sm sm:text-base shadow-lg"
                >
                  Schedule Your Private Tour - Save 20%
                </Button>
              }
            />
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
                    Professional boardroom
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    Video conferencing
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-600" />
                    Presentation equipment
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 font-semibold h-11 sm:h-12 text-sm sm:text-base">
                  Book Now
                </Button>
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">SL</span>
                </div>
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
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">MC</span>
                </div>
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
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">DK</span>
                </div>
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
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">LZ</span>
                </div>
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

          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
              View All Google Reviews
            </Button>
          </div>
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
            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pantry_4.jpg-xh8GtDtsriNwe5MBiAhOuu3LCM4t6l.jpeg"
                alt="Premium Coffee Machines and Pantry Facilities"
                className="w-full h-full object-cover"
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
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-md transition-shadow">
                <facility.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{facility.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{facility.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Everything you need to know about Sky Business Centre
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

      {/* Office Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              See Why Clients Choose Us
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Premium facilities in Hong Kong's most prestigious business address
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Common%20Area_11.jpg-q01DSNEB93BSs87wsj6X8Ms7D3UkDG.jpeg"
                alt="Modern Lounge with Kitchen and Bar Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Common%20Area_7.jpg-HCHIAxjfvqstPrdNpmAkVWI55dU6Sq.jpeg"
                alt="Active Common Area with Kitchen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sky_20201113_12.jpg-VutctFm0lnXMYSz7LYtYlf2QY35ZYy.jpeg"
                alt="Team Office with Multiple Workstations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Common%20Area_1.jpg-D7tUKuM7ldbTmMvovbnlybDoJLkWvK.jpeg"
                alt="Elegant Meeting and Seating Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sky_20201113_26.jpg-cPYgIp8W9fyOIM18bYlGRDJErlvy3m.jpeg"
                alt="Private Office with Stunning City Views"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reception%20Area_2.jpg-eCEGPeQnTHhDiXt5qmSC1OlhMumbAM.jpeg"
                alt="Modern Reception Desk and Waiting Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <BookingForm
              trigger={
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 w-full sm:w-auto font-semibold text-sm sm:text-base"
                >
                  Book Your Tour - Save 20%
                </Button>
              }
            />
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
            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pantry_4.jpg-xh8GtDtsriNwe5MBiAhOuu3LCM4t6l.jpeg"
                alt="Premium Coffee Machines and Pantry Facilities"
                className="w-full h-full object-cover"
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
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-md transition-shadow">
                <facility.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{facility.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{facility.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-12 sm:py-16 lg:py-20">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8944!2d114.1823!3d22.2783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f9df0e7b85%3A0x8d8d8d8d8d8d8d8d!2sTimes%20Square%2C%20Causeway%20Bay%2C%20Hong%20Kong!5e0!3m2!1sen!2shk!4v1234567890"
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
              <a href="tel:+85239510100" className="flex items-center gap-2 hover:text-background/80">
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

      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/98 backdrop-blur-md border-t border-border/40 shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <a href="tel:+85239510100" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-11 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold bg-white text-sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
            <div className="flex-[2]">
              <BookingForm
                trigger={
                  <Button className="w-full h-11 bg-primary hover:bg-primary/90 font-bold text-white shadow-lg text-sm">
                    Book Tour - Save 20%
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 md:hidden" />
    </div>
  )
}
