import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import Script from "next/script"
import "./globals.css"
import { Suspense } from "react"

const cairo = localFont({
  src: "./Cairo.woff2",
  weight: "200 1000",
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bacresultat.com"),
  title: "حساب معدل البكالوريا بالمغرب | Bac Resultat",
  description:
    "احسب معدل الباك من نقط المراقبة المستمرة والجهوي والوطني، واعرف النقطة التي تحتاجها في الامتحان الوطني للوصول إلى معدل 10/20.",
  authors: [{ name: "Bac Resultat" }],
  creator: "Bac Resultat",
  publisher: "Bac Resultat",
  robots: "index, follow",
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1097439023725884"
          crossOrigin="anonymous"
        />
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
      </body>
    </html>
  )
}
