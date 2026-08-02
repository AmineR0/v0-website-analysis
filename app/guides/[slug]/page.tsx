import type { Metadata } from "next"
import Link from "next/link"
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

              <section className="rounded-lg border bg-muted/40 p-5 text-right">
                <h2 className="text-xl font-bold text-foreground">منهجية الحساب والتنبيه</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  تعتمد الشروحات والحاسبات على الصيغة العامة المتداولة لحساب معدل البكالوريا المغربية: 50% للامتحان
                  الوطني، 25% للامتحان الجهوي، و25% للمراقبة المستمرة، مع استعمال معاملات مواد الوطني حسب الشعبة.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  هذه النتائج تقديرية وتهدف إلى المساعدة على الفهم والتخطيط. تبقى النتائج والوثائق الرسمية الصادرة عن
                  المؤسسات التعليمية والجهات المختصة هي المرجع النهائي.
                </p>
              </section>

              <div className="pt-6 text-center border-t">
                <Link href="/" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  ← استخدم الحاسبة الآن
                </Link>
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
                <Link href="/about" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  من نحن
                </Link>
                <span className="text-border">|</span>
                <Link href="/privacy" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  سياسة الخصوصية
                </Link>
                <span className="text-border">|</span>
                <Link href="/terms" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  شروط الاستخدام
                </Link>
                <span className="text-border">|</span>
                <Link href="/contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  تواصل معنا
                </Link>
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
