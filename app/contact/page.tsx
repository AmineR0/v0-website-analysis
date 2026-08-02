import type { Metadata } from "next"
import Link from "next/link"
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
                  لأي استفسار حول الحاسبة أو الخصوصية أو الإعلانات أو تصحيح معلومة، يمكنك مراسلتنا عبر البريد
                  الإلكتروني:
                </p>

                <a
                  href="mailto:contact@bacresultat.com"
                  className="inline-block text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  dir="ltr"
                >
                  contact@bacresultat.com
                </a>

                <p className="text-muted-foreground pt-4">
                  نحاول الرد على الرسائل المهمة في أقرب وقت ممكن، خصوصا الملاحظات المتعلقة بدقة الحسابات أو سياسات
                  الموقع.
                </p>
              </div>

              <div className="pt-6 text-center">
                <Link href="/" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  ← العودة إلى الصفحة الرئيسية
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
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
