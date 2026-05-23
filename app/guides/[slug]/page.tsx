import type { Metadata } from "next"
import Script from "next/script"
import { notFound } from "next/navigation"
import { BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { guides } from "@/lib/guides"

type GuidePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const guide = guides.find((item) => item.slug === params.slug)

  if (!guide) {
    return {
      title: "دليل غير موجود | Bac Resultat",
    }
  }

  return {
    title: `${guide.title} | Bac Resultat`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `/guides/${guide.slug}`,
      type: "article",
      locale: "ar_MA",
    },
  }
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = guides.find((item) => item.slug === params.slug)

  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Script id="monetag-vignette-guides" strategy="afterInteractive">
        {`
          (function () {
            var storageKey = "monetagVignetteLoadedAt";
            var now = Date.now();
            var lastLoaded = Number(sessionStorage.getItem(storageKey) || 0);

            if (lastLoaded && now - lastLoaded < 30 * 60 * 1000) {
              return;
            }

            window.setTimeout(function () {
              sessionStorage.setItem(storageKey, String(Date.now()));
              (function(s){s.dataset.zone='11047976',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))
            }, 15000);
          })();
        `}
      </Script>
      <header className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">{guide.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {guide.description}
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <article className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8 md:p-10 space-y-8">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="space-y-8 text-right">
                {guide.sections.map((section) => (
                  <section key={section.heading} className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <aside aria-label="إعلان ممول" className="rounded-lg border border-secondary bg-secondary/10 p-5 text-center">
                <p className="text-sm font-semibold text-muted-foreground">إعلان</p>
                <h2 className="mt-2 text-xl font-bold text-foreground">اكتشف عروض وخدمات متاحة الآن</h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  رابط خارجي ممول يفتح في صفحة جديدة.
                </p>
                <a
                  href="https://omg10.com/4/11046614"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
                >
                  فتح العرض
                </a>
              </aside>

              <div className="pt-6 text-center border-t">
                <a href="/" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  ← استخدم الحاسبة الآن
                </a>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>

      <footer className="bg-card border-t border-border mt-24 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex flex-wrap items-center justify-center gap-4 text-base">
                <a href="/about" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  من نحن
                </a>
                <span className="text-border">|</span>
                <a href="/privacy" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  سياسة الخصوصية
                </a>
                <span className="text-border">|</span>
                <a href="/terms" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  شروط الاستخدام
                </a>
                <span className="text-border">|</span>
                <a href="/contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  تواصل معنا
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">© 2026 bacresultat.com</p>
                <p className="text-sm text-muted-foreground">
                  حاسبة معدل البكالوريا المغربية - نتائج الباك 2026 - جميع الحقوق محفوظة
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
