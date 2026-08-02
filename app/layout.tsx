import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Suspense } from "react"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bacresultat.com"),
  title: "حاسبة نتائج البكالوريا المغربية 2026 | Bac Resultat",
  description:
    "احسب معدل البكالوريا المغربية بدقة وسهولة. حاسبة مجانية لجميع الشعب والمسالك - العلوم الرياضية، الفيزيائية، الآداب. نتائج الباك 2026",
  keywords:
    "حاسبة البكالوريا, معدل الباك, نتائج البكالوريا 2026, حساب معدل الباك المغربي, الامتحان الوطني, bac maroc, resultat bac",
  authors: [{ name: "Bac Resultat" }],
  creator: "Bac Resultat",
  publisher: "Bac Resultat",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.bacresultat.com",
  },
  openGraph: {
    type: "website",
    locale: "ar_MA",
    url: "https://www.bacresultat.com",
    title: "حاسبة نتائج البكالوريا المغربية 2026 | Bac Resultat",
    description: "احسب معدل البكالوريا المغربية بدقة وسهولة. حاسبة مجانية لجميع الشعب والمسالك",
    siteName: "Bac Resultat",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "حاسبة البكالوريا المغربية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "حاسبة نتائج البكالوريا المغربية 2026",
    description: "احسب معدل البكالوريا المغربية بدقة وسهولة",
    images: ["/og-image.jpg"],
  },
  verification: {
    other: {
      a2ff008dda83ea487ef3ae08272299c4547ac4e9: "a2ff008dda83ea487ef3ae08272299c4547ac4e9",
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>

        {/* Google Analytics — loaded after page becomes interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YY232N7GWV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YY232N7GWV');
          `}
        </Script>

        {/* Google AdSense — loaded lazily after page interaction */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1097439023725884"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
