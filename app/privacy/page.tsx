import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "سياسة الخصوصية 2026 | حاسبة معدل البكالوريا المغربية",
  description: "سياسة الخصوصية لموقع حاسبة معدل البكالوريا المغربية، بما في ذلك ملفات تعريف الارتباط وإعلانات Google.",
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
                  آخر تحديث: 21 ماي 2026. نحن نحترم خصوصيتك ونلتزم بتوضيح طريقة عمل موقع{" "}
                  <strong className="text-foreground">bacresultat.com</strong>. تهدف هذه الصفحة إلى شرح البيانات
                  والتقنيات التي قد تستعمل عند استخدام الحاسبة أو عند عرض الإعلانات والتحليلات.
                </p>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">المعلومات التي نجمعها</h2>
                  <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mr-4">
                    <li>لا نطلب منك إنشاء حساب ولا ندخل نقاطك في قاعدة بيانات عند استخدام الحاسبة.</li>
                    <li>النقط التي تكتبها في الحاسبة تستعمل داخل المتصفح فقط لإظهار النتيجة.</li>
                    <li>
                      قد نستعمل أدوات تحليل مثل Google Analytics لفهم عدد الزيارات والصفحات الأكثر استعمالا وتحسين
                      تجربة المستخدم.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">ملفات تعريف الارتباط (Cookies)</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    قد تستخدم Google وشركاؤها ملفات تعريف الارتباط أو معرفات مشابهة لعرض الإعلانات وقياس أدائها
                    وتحسين الخدمات. يمكنك تعطيل ملفات تعريف الارتباط أو حذفها من إعدادات المتصفح في أي وقت.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">إعلانات Google AdSense</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    قد تعرض Google وموردون خارجيون آخرون إعلانات على هذا الموقع. تستخدم Google ملفات تعريف الارتباط
                    الإعلانية لتمكينها وشركائها من عرض إعلانات بناء على زيارتك لهذا الموقع أو لمواقع أخرى على الإنترنت.
                    يمكن للمستخدمين إيقاف تخصيص الإعلانات من خلال{" "}
                    <a
                      href="https://adssettings.google.com"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                    >
                      إعدادات إعلانات Google
                    </a>
                    ، ويمكنهم أيضا الاطلاع على طريقة استخدام Google للبيانات عبر{" "}
                    <a
                      href="https://policies.google.com/technologies/partner-sites"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                    >
                      صفحة شركاء Google
                    </a>
                    .
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    إذا استعمل الموقع شبكات إعلانية أو موردين خارجيين إضافيين، فقد يستخدم هؤلاء ملفات تعريف ارتباط أو
                    تقنيات مشابهة وفق سياسات الخصوصية الخاصة بهم. يمكنك إدارة بعض خيارات الإعلانات المخصصة عبر{" "}
                    <a
                      href="https://www.aboutads.info/choices/"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                    >
                      aboutads.info
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">سلامة المحتوى والإعلانات</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    الموقع موجه للتلاميذ والأسر والمهتمين بالتوجيه الدراسي، ولا ننشر محتوى للبالغين أو محتوى يحرض على
                    العنف أو الغش أو أي نشاط غير قانوني. نسعى إلى إبقاء تجربة الإعلانات مناسبة وآمنة ومتصلة بطبيعة
                    الموقع التعليمية.
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
