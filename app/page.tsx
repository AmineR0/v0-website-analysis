import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { guideLinks } from "@/lib/guides"
import MinNationalCalculator from "@/components/calculators/MinNationalCalculator"
import GeneralCalculator from "@/components/calculators/GeneralCalculator"
import TrackCalculator from "@/components/calculators/TrackCalculator"

export default function BacResultatPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "حاسبة نتائج البكالوريا المغربية",
            description: "احسب معدل البكالوريا المغربية بسهولة - حاسبة دقيقة لجميع الشعب والمسالك",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "MAD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "15420",
            },
          }),
        }}
      />

      <header className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              حساب معدل البكالوريا بالمغرب
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              أسرع وأدق طريقة لحساب معدل الباك الوطني والجهوي لجميع الشعب والمسالك 2026
            </p>
          </div>
        </div>
      </header>

      <div>
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>موثوق من قبل أكثر من 15,000 طالب</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">احسب نتائجك بدقة وسهولة</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                استخدم حاسباتنا الثلاث المتخصصة لمعرفة معدلك، أقل نقطة تحتاجها للنجاح، وميزتك في البكالوريا
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-5xl mx-auto space-y-8">
            <MinNationalCalculator />
            <GeneralCalculator />
            <TrackCalculator />
          </div>

          <section aria-labelledby="faq-section" className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-10 space-y-3">
              <h2 id="faq-section" className="text-3xl md:text-4xl font-bold text-foreground">
                أسئلة شائعة
              </h2>
              <p className="text-muted-foreground text-lg">إجابات على الأسئلة الأكثر شيوعاً حول حساب معدل البكالوريا</p>
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "كيف أحسب معدل الباك 2026؟",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "أدخل معدل المراقبة المستمرة، الجهوي، والوطني في الحاسبة أعلاه واضغط 'احسب المعدل العام'.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "ما هي معادلة حساب معدل البكالوريا المغربية؟",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "(0.50 × الامتحان الوطني) + (0.25 × الامتحان الجهوي) + (0.25 × المراقبة المستمرة)",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "كيف أعرف ميزة النجاح في البكالوريا؟",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "بعد حساب المعدل العام، ستظهر لك الميزة تلقائيًا (حسن جدا، حسن، مستحسن، مقبول).",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "هل الحاسبة تدعم جميع الشعب والمسالك؟",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "نعم، يمكنك اختيار الشعبة وسيتم حساب المعدل بدقة حسب معاملات المواد.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "كيف أحسب معدل الباك الوطني؟",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "أدخل نقاط المواد الوطنية حسب الشعبة، وسيتم حساب المعدل الوطني تلقائيًا.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "كيف يتم حساب معدل المراقبة المستمرة؟",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "تم حساب معدل المراقبة المستمرة بأخذ متوسط الدورتين الأولى والثانية.",
                      },
                    },
                  ],
                }),
              }}
            />

            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="item-1" className="bg-card border-2 rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-right text-lg font-semibold hover:no-underline py-5">
                  كيف أحسب معدل الباك 2026؟
                </AccordionTrigger>
                <AccordionContent className="text-right text-base leading-relaxed pb-5 text-muted-foreground">
                  أدخل معدل المراقبة المستمرة، الجهوي، والوطني في الحاسبة أعلاه واضغط &quot;احسب المعدل العام&quot;.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border-2 rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-right text-lg font-semibold hover:no-underline py-5">
                  ما هي معادلة حساب معدل البكالوريا المغربية؟
                </AccordionTrigger>
                <AccordionContent className="text-right text-base leading-relaxed pb-5 text-muted-foreground">
                  (0.50 × الامتحان الوطني) + (0.25 × الامتحان الجهوي) + (0.25 × المراقبة المستمرة)
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border-2 rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-right text-lg font-semibold hover:no-underline py-5">
                  كيف أعرف ميزة النجاح في البكالوريا؟
                </AccordionTrigger>
                <AccordionContent className="text-right text-base leading-relaxed pb-5 text-muted-foreground">
                  بعد حساب المعدل العام، ستظهر لك الميزة تلقائيًا (حسن جدا، حسن، مستحسن، مقبول).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border-2 rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-right text-lg font-semibold hover:no-underline py-5">
                  هل الحاسبة تدعم جميع الشعب والمسالك؟
                </AccordionTrigger>
                <AccordionContent className="text-right text-base leading-relaxed pb-5 text-muted-foreground">
                  نعم، يمكنك اختيار الشعبة وسيتم حساب المعدل بدقة حسب معاملات المواد.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border-2 rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-right text-lg font-semibold hover:no-underline py-5">
                  كيف أحسب معدل الباك الوطني؟
                </AccordionTrigger>
                <AccordionContent className="text-right text-base leading-relaxed pb-5 text-muted-foreground">
                  أدخل نقاط المواد الوطنية حسب الشعبة، وسيتم حساب المعدل الوطني تلقائيًا.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border-2 rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-right text-lg font-semibold hover:no-underline py-5">
                  كيف يتم حساب معدل المراقبة المستمرة؟
                </AccordionTrigger>
                <AccordionContent className="text-right text-base leading-relaxed pb-5 text-muted-foreground">
                  يتم حساب معدل المراقبة المستمرة بأخذ متوسط الدورتين الأولى والثانية.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <article className="mt-20 max-w-4xl mx-auto">
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8 md:p-10 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-right text-foreground">
                  حول حاسبة نتائج البكالوريا المغربية
                </h2>
                <div className="space-y-4 text-right leading-relaxed text-muted-foreground">
                  <p className="text-lg">
                    موقع <strong className="text-foreground">bacresultat.com</strong> أداة تعليمية مستقلة تساعد التلاميذ
                    على حساب معدل البكالوريا المغربية وفهم تأثير الوطني والجهوي والمراقبة المستمرة على النتيجة النهائية.
                  </p>
                  <p className="text-lg">
                    يمكنك حساب معدل الامتحان الوطني حسب الشعبة، المعدل العام، وأقل نقطة تقريبية تحتاجها للنجاح في
                    البكالوريا 2026. النتائج المعروضة تقديرية وتبقى النتائج الرسمية هي المرجع النهائي.
                  </p>
                  <p className="text-lg">
                    تعتمد الحاسبة على الصيغة العامة: 50% للامتحان الوطني، 25% للامتحان الجهوي، و25% للمراقبة المستمرة،
                    مع تطبيق معاملات مواد الوطني حسب الشعبة أو المسلك.
                  </p>
                </div>
              </CardContent>
            </Card>
          </article>

          <section aria-labelledby="guides-section" className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-10 space-y-3">
              <h2 id="guides-section" className="text-3xl md:text-4xl font-bold text-foreground">
                دلائل مفيدة حول معدل البكالوريا
              </h2>
              <p className="text-muted-foreground text-lg">
                شروحات قصيرة تساعدك على فهم طريقة الحساب والمعاملات حسب الشعبة
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {guideLinks.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="block rounded-lg border-2 bg-card p-5 text-right shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-foreground">{guide.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{guide.description}</p>
                </Link>
              ))}
            </div>
          </section>

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
    </div>
  )
}
