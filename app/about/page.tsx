import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "من نحن | حاسبة معدل البكالوريا المغربية",
  description: "تعرف على موقع bacresultat.com، أداة تعليمية مجانية لحساب معدل البكالوريا المغربية.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">من نحن</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              أداة تعليمية بسيطة لمساعدة التلاميذ على فهم وحساب معدل البكالوريا بالمغرب
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8 md:p-10 space-y-8">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="space-y-6 text-right">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">bacresultat.com</strong> موقع مستقل يوفر حاسبة مجانية لحساب معدل
                  البكالوريا المغربية، وحساب معدل الامتحان الوطني حسب الشعبة، ومعرفة أقل نقطة يحتاجها التلميذ في
                  الوطني للوصول إلى معدل النجاح.
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">هدف الموقع</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    هدفنا هو تقديم تجربة واضحة وسريعة للتلاميذ والأسر، بدون تسجيل حساب وبدون طلب معلومات شخصية. تعتمد
                    الحاسبة على الصيغة العامة المعروفة لمعدل البكالوريا: الامتحان الوطني، الامتحان الجهوي، والمراقبة
                    المستمرة.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">مراجعة الدقة</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    نراجع معاملات المواد والصيغ الحسابية بشكل دوري، ونرحب بأي ملاحظة أو تصحيح من الزوار عبر صفحة
                    التواصل. النتائج المعروضة تقريبية وموجهة للمساعدة فقط، أما النتائج الرسمية فتبقى هي الصادرة عن
                    الجهات المختصة.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">الإعلانات</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    قد يعتمد الموقع على الإعلانات لتغطية تكاليف الاستضافة والتطوير. نسعى إلى الحفاظ على تجربة استعمال
                    محترمة ومناسبة لطبيعة الموقع التعليمية.
                  </p>
                </div>
              </div>

              <div className="pt-6 text-center border-t">
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
