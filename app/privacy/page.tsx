import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "سياسة الخصوصية | حاسبة معدل البكالوريا المغربية",
  description: "سياسة الخصوصية لموقع حاسبة معدل البكالوريا المغربية - نحترم خصوصيتك ونحمي بياناتك",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">سياسة الخصوصية</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8 md:p-10 space-y-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="space-y-6 text-right">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. باستخدامك لموقع{" "}
                  <strong className="text-foreground">حاسبة معدل البكالوريا لجميع الشعب</strong>، فإنك توافق على سياسة
                  الخصوصية التالية:
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">المعلومات التي نجمعها</h2>
                  <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mr-4">
                    <li>لا نقوم بجمع أي بيانات شخصية منك عند استخدام الحاسبة.</li>
                    <li>
                      قد تستخدم خدمات إعلانات Google (مثل AdSense) ملفات تعريف الارتباط (Cookies) لجمع بيانات غير شخصية
                      لأغراض إعلانية.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">ملفات تعريف الارتباط (Cookies)</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وعرض الإعلانات. يمكنك تعطيل الكوكيز من
                    إعدادات المتصفح الخاص بك.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">إعلانات Google AdSense</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    قد تعرض Google وشركاؤها إعلانات على هذا الموقع. قد تستخدم Google ملفات تعريف الارتباط لعرض الإعلانات
                    بناءً على زياراتك السابقة لهذا الموقع أو لمواقع أخرى.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">روابط خارجية</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    قد يحتوي الموقع على روابط لمواقع خارجية. لسنا مسؤولين عن سياسات الخصوصية لتلك المواقع.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">تواصل معنا</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    إذا كان لديك أي سؤال حول سياسة الخصوصية، يمكنك{" "}
                    <a href="/contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
                      التواصل معنا هنا
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">تحديثات السياسة</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.
                  </p>
                </div>
              </div>

              <div className="pt-6 text-center border-t">
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
