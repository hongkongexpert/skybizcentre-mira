import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import { LanguageProvider } from "@/lib/i18n/LanguageContext"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Premium Office Space Tsim Sha Tsui | Mira Place, Nathan Road | Sky Business Centre",
  description:
    "Premium serviced offices opening November 2026 at 1001, 10/F Mira Place Tower A, 132 Nathan Road, Tsim Sha Tsui. Fully furnished, all-inclusive. Early bird: 2 months rent free on 12-month contracts. Private offices, meeting rooms, coworking space. Book your tour today.",
  generator: "v0.app",
  keywords:
    "premium office space Hong Kong, serviced office Tsim Sha Tsui, business centre Mira Place, private office rental Nathan Road, meeting rooms Hong Kong, coworking space Tsim Sha Tsui, executive office, furnished office Hong Kong",
  authors: [{ name: "Sky Business Centre" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "New Tsim Sha Tsui Centre Opening Nov 2026 - 2 Months Rent Free",
    description:
      "Premium offices at Mira Place Tower A, 132 Nathan Road, Tsim Sha Tsui. No setup fees. Early bird: 2 months rent free on 12-month contracts.",
    type: "website",
    locale: "en_HK",
    alternateLocale: "zh_HK",
    siteName: "Sky Business Centre",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Office Space - Mira Place, Tsim Sha Tsui",
    description: "Opening November 2026. Early bird: 2 months rent free on 12-month contracts.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sky Business Centre" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-959736544"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-959736544');
              
              function gtag_report_conversion() {
                gtag('event', 'conversion', {
                  'send_to': 'AW-959736544/xdNZCNS0q8IDEODV0ckD'
                });
                return true;
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
