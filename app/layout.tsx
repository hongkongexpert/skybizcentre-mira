import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Premium Office Space Hong Kong | Times Square Level 34 | Sky Business Centre",
  description:
    "Premium serviced offices at Times Square Level 34, Causeway Bay. Fully furnished, all-inclusive, immediate move-in. Private offices, meeting rooms, coworking space. Book your tour today.",
  generator: "v0.app",
  keywords:
    "premium office space Hong Kong, serviced office Times Square, business centre Causeway Bay, private office rental Hong Kong, meeting rooms Hong Kong, coworking space, executive office, furnished office Hong Kong",
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
    title: "Move Into Premium Office Space This Week - Save 20%",
    description:
      "Premium offices at Times Square Level 34. No setup fees, immediate move-in. Limited time 20% discount.",
    type: "website",
    locale: "en_HK",
    siteName: "Sky Business Centre",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Office Space - Times Square Level 34",
    description: "Move in this week and save 20%. No setup fees, immediate availability.",
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
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-playfair: ${playfair.variable};
}
        `}</style>
      </head>
      <body className={`${playfair.variable} antialiased`}>{children}</body>
    </html>
  )
}
