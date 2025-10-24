import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "تواصل معنا | حاسبة معدل البكالوريا المغربية",
  description: "تواصل معنا لأي استفسار أو اقتراح حول حاسبة معدل البكالوريا المغربية",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">تواصل معنا</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نحن هنا للإجابة على استفساراتك واقتراحاتك
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8 md:p-10 space-y-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-lg text-muted-foreground">
                  لأي استفسار أو اقتراح، يمكنك مراسلتنا عبر البريد الإلكتروني:
                </p>

                <a
                  href="mailto:bacresult.site@gmail.com"
                  className="inline-block text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  dir="ltr"
                >
                  bacresult.site@gmail.com
                </a>

                <p className="text-muted-foreground pt-4">أو راسلنا مباشرة عبر البريد الإلكتروني أعلاه.</p>
              </div>

              <div className="pt-6 text-center">
                <a href="/" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  ← العودة إلى الصفحة الرئيسية
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-card border-t border-border mt-24 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-6 text-base">
                <a href="/privacy" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  سياسة الخصوصية
                </a>
                <span className="text-border">|</span>
                <a href="/contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  تواصل معنا
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">© 2025 bacresultat.com</p>
                <p className="text-sm text-muted-foreground">
                  حاسبة معدل البكالوريا المغربية - نتائج الباك 2025 - جميع الحقوق محفوظة
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
