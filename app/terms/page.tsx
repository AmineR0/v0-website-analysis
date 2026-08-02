import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "شروط الاستخدام | حاسبة معدل البكالوريا المغربية",
  description: "شروط استخدام موقع bacresultat.com والتنبيه إلى أن النتائج تقريبية وليست نتائج رسمية.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">شروط الاستخدام</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              قواعد بسيطة لاستعمال الحاسبة والمحتوى المنشور على الموقع
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
                  <FileText className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="space-y-6 text-right">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  آخر تحديث: 21 ماي 2026. باستخدامك لموقع <strong className="text-foreground">bacresultat.com</strong>،
                  فإنك توافق على هذه الشروط. إذا لم توافق عليها، يمكنك التوقف عن استعمال الموقع.
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">طبيعة الخدمة</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    يقدم الموقع أداة حسابية ومحتوى تعليميا عاما حول معدل البكالوريا المغربية. لا يمثل الموقع أي جهة
                    رسمية، ولا يصدر نتائج رسمية أو قرارات مدرسية.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">دقة النتائج</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    نحاول جعل الصيغ والمعاملات دقيقة ومحدثة، لكن النتائج تبقى تقريبية وتعتمد على المعطيات التي يدخلها
                    المستخدم. يجب دائما اعتماد النتائج والوثائق الرسمية الصادرة عن المؤسسات المختصة.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">الاستخدام المقبول</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    يمنع استعمال الموقع في أي نشاط غير قانوني أو محاولة تعطيل الخدمة أو نسخ المحتوى بطريقة تضر بالموقع.
                    يمكن مشاركة رابط الموقع مع الزملاء والأسر للاستفادة من الحاسبة.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">الإعلانات والروابط</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    قد تظهر إعلانات أو روابط خارجية على الموقع. لا نتحكم بشكل كامل في محتوى المواقع الخارجية، لذلك ننصح
                    المستخدم بقراءة سياسات كل موقع يزوره.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">التواصل</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    لأي سؤال حول هذه الشروط أو لاقتراح تصحيح، يمكنك التواصل معنا عبر{" "}
                    <Link href="/contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
                      صفحة التواصل
                    </Link>
                    .
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
