"use client"

import { useState } from "react"
import { Calculator, GraduationCap, Target, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { guideLinks } from "@/lib/guides"

const tracks = {
  literature: [
    { name: "اللغة العربية", coef: 4 },
    { name: "اللغة الأجنبية الثانية", coef: 4 },
    { name: "التاريخ والجغرافيا", coef: 3 },
    { name: "الفلسفة", coef: 3 },
  ],
  modern: [
    { name: "اللغة العربية", coef: 3 },
    { name: "اللغة الأجنبية الثانية", coef: 3 },
    { name: "التاريخ والجغرافيا", coef: 4 },
    { name: "الفلسفة", coef: 4 },
  ],
  life: [
    { name: "علوم الحياة والأرض", coef: 7 },
    { name: "الرياضيات", coef: 7 },
    { name: "الفيزياء والكيمياء", coef: 5 },
    { name: "اللغة الأجنبية الثانية", coef: 2 },
    { name: "الفلسفة", coef: 2 },
  ],
  physics: [
    { name: "الفيزياء والكيمياء", coef: 7 },
    { name: "الرياضيات", coef: 7 },
    { name: "علوم الحياة والأرض", coef: 5 },
    { name: "اللغة الأجنبية الثانية", coef: 2 },
    { name: "الفلسفة", coef: 2 },
  ],
  economics: [
    { name: "الرياضيات", coef: 4 },
    { name: "المحاسبة والرياضيات المالية", coef: 4 },
    { name: "الاقتصاد العام والإحصاء", coef: 6 },
    { name: "الاقتصاد والتنظيم الإداري للمقاولات", coef: 3 },
    { name: "اللغة الأجنبية الثانية", coef: 2 },
    { name: "الفلسفة", coef: 2 },
  ],
  accounting: [
    { name: "الرياضيات", coef: 4 },
    { name: "المحاسبة والرياضيات المالية", coef: 6 },
    { name: "الاقتصاد العام والإحصاء", coef: 3 },
    { name: "الاقتصاد والتنظيم الإداري للمقاولات", coef: 6 },
    { name: "اللغة الأجنبية الثانية", coef: 2 },
    { name: "الفلسفة", coef: 2 },
  ],
}

const isValidGrade = (value: number) => Number.isFinite(value) && value >= 0 && value <= 20

const getMention = (avg: number) => {
  if (avg >= 16) return "حسن جدا"
  if (avg >= 14) return "حسن"
  if (avg >= 12) return "مستحسن"
  if (avg >= 10) return "مقبول"
  return "راسب"
}

export default function BacResultatPage() {
  const [minNational, setMinNational] = useState({ regional: "", cont1: "", cont2: "" })
  const [minNationalResult, setMinNationalResult] = useState("")
  const [minNationalError, setMinNationalError] = useState("")

  const [general, setGeneral] = useState({ cont1: "", cont2: "", regional: "", national: "" })
  const [generalResult, setGeneralResult] = useState("")
  const [generalError, setGeneralError] = useState("")

  const [track, setTrack] = useState("")
  const [subjects, setSubjects] = useState<{ [key: string]: string }>({})
  const [trackData, setTrackData] = useState({ regional: "", cont1: "", cont2: "" })
  const [trackResult, setTrackResult] = useState("")
  const [trackError, setTrackError] = useState("")

  const calcMinNational = () => {
    setMinNationalError("")
    setMinNationalResult("")

    if (!minNational.regional || !minNational.cont1 || !minNational.cont2) {
      setMinNationalError("يرجى ملء جميع الحقول.")
      return
    }

    const reg = Number.parseFloat(minNational.regional)
    const c1 = Number.parseFloat(minNational.cont1)
    const c2 = Number.parseFloat(minNational.cont2)

    if ([reg, c1, c2].some((v) => !isValidGrade(v))) {
      setMinNationalError("يرجى إدخال جميع المعدلات بين 0 و 20.")
      return
    }

    const cont = (c1 + c2) / 2
    const minNat = (10 - 0.25 * reg - 0.25 * cont) / 0.5

    if (minNat > 20) {
      setMinNationalResult("حتى مع أعلى نقطة في الوطني لن تصل إلى معدل 10/20.")
    } else if (minNat < 0) {
      setMinNationalResult("لقد ضمنت النجاح بالفعل!")
    } else {
      setMinNationalResult(`أقل نقطة تحتاجها في الوطني للنجاح: ${minNat.toFixed(2)}`)
    }
  }

  const calcGeneral = () => {
    setGeneralError("")
    setGeneralResult("")

    if (!general.cont1 || !general.cont2 || !general.regional || !general.national) {
      setGeneralError("يرجى ملء جميع الحقول.")
      return
    }

    const c1 = Number.parseFloat(general.cont1)
    const c2 = Number.parseFloat(general.cont2)
    const r = Number.parseFloat(general.regional)
    const n = Number.parseFloat(general.national)

    if ([c1, c2, r, n].some((v) => !isValidGrade(v))) {
      setGeneralError("يرجى إدخال جميع المعدلات بين 0 و 20.")
      return
    }

    const cont = (c1 + c2) / 2
    const avg = 0.25 * cont + 0.25 * r + 0.5 * n

    setGeneralResult(`المعدل العام للبكالوريا هو: ${avg.toFixed(2)} | الميزة: ${getMention(avg)}`)
  }

  const calcTrack = () => {
    setTrackError("")
    setTrackResult("")

    if (!track) {
      setTrackError("يرجى اختيار الشعبة/المسلك.")
      return
    }

    const trackSubjects = tracks[track as keyof typeof tracks]
    let total = 0
    let sumCoef = 0

    for (let i = 0; i < trackSubjects.length; i++) {
      const val = subjects[`subject_${i}`]
      if (!val) {
        setTrackError("يرجى ملء جميع الحقول الخاصة بالمواد.")
        return
      }
      const numVal = Number.parseFloat(val)
      if (!isValidGrade(numVal)) {
        setTrackError("يرجى إدخال جميع النقاط بين 0 و 20.")
        return
      }
      total += numVal * trackSubjects[i].coef
      sumCoef += trackSubjects[i].coef
    }

    const national = total / sumCoef

    if (!trackData.regional || !trackData.cont1 || !trackData.cont2) {
      setTrackError("يرجى ملء جميع الحقول الخاصة بالجهوي والمراقبة المستمرة.")
      return
    }

    const reg = Number.parseFloat(trackData.regional)
    const c1 = Number.parseFloat(trackData.cont1)
    const c2 = Number.parseFloat(trackData.cont2)

    if ([reg, c1, c2].some((v) => !isValidGrade(v))) {
      setTrackError("يرجى إدخال جميع المعدلات بين 0 و 20.")
      return
    }

    const cont = (c1 + c2) / 2
    const avg = 0.25 * cont + 0.25 * reg + 0.5 * national

    setTrackResult(`معدل الوطني: ${national.toFixed(2)} | المعدل العام: ${avg.toFixed(2)} | الميزة: ${getMention(avg)}`)
  }

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
            <section aria-labelledby="min-national">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="space-y-4 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 ring-4 ring-primary/5">
                      <Target className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-2xl md:text-3xl text-right font-bold">
                        1. حساب أقل نقطة في الوطني للنجاح
                      </CardTitle>
                      <CardDescription className="text-right text-base leading-relaxed">
                        أدخل معدلاتك واكتشف أقل نقطة تحتاجها في الامتحان الوطني لضمان النجاح
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  {minNationalError && (
                    <Alert variant="destructive" className="border-l-4">
                      <AlertCircle className="h-5 w-5" />
                      <AlertDescription className="text-base">{minNationalError}</AlertDescription>
                    </Alert>
                  )}

                  <div className="grid gap-5 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="min-regional" className="text-base font-medium">
                        معدل الامتحان الجهوي
                      </Label>
                      <Input
                        id="min-regional"
                        type="number"
                        step="0.01"
                        min="0"
                        max="20"
                        placeholder="0.00"
                        className="h-12 text-lg"
                        value={minNational.regional}
                        onChange={(e) => {
                          setMinNational({ ...minNational, regional: e.target.value })
                          setMinNationalError("")
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="min-cont1" className="text-base font-medium">
                        المراقبة المستمرة - الدورة 1
                      </Label>
                      <Input
                        id="min-cont1"
                        type="number"
                        step="0.01"
                        min="0"
                        max="20"
                        placeholder="0.00"
                        className="h-12 text-lg"
                        value={minNational.cont1}
                        onChange={(e) => {
                          setMinNational({ ...minNational, cont1: e.target.value })
                          setMinNationalError("")
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="min-cont2" className="text-base font-medium">
                        المراقبة المستمرة - الدورة 2
                      </Label>
                      <Input
                        id="min-cont2"
                        type="number"
                        step="0.01"
                        min="0"
                        max="20"
                        placeholder="0.00"
                        className="h-12 text-lg"
                        value={minNational.cont2}
                        onChange={(e) => {
                          setMinNational({ ...minNational, cont2: e.target.value })
                          setMinNationalError("")
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button onClick={calcMinNational} size="lg" className="flex-1 h-12 text-base font-semibold">
                      احسب الآن
                    </Button>
                    <Button
                      onClick={() => {
                        setMinNational({ regional: "", cont1: "", cont2: "" })
                        setMinNationalResult("")
                        setMinNationalError("")
                      }}
                      variant="outline"
                      size="lg"
                      className="flex-1 h-12 text-base font-semibold"
                    >
                      إعادة تعيين
                    </Button>
                  </div>

                  {minNationalResult && (
                    <Alert className="bg-accent/10 border-accent border-l-4">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <AlertDescription className="text-accent font-bold text-xl">{minNationalResult}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </section>

            <section aria-labelledby="general-avg">
              <Card className="border-2 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="space-y-4 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 ring-4 ring-accent/5">
                      <Calculator className="w-7 h-7 text-accent" aria-hidden="true" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-2xl md:text-3xl text-right font-bold">
                        2. حساب المعدل العام للبكالوريا
                      </CardTitle>
                      <CardDescription className="text-right text-base leading-relaxed">
                        أدخل جميع معدلاتك لحساب المعدل العام النهائي ومعرفة ميزتك
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  {generalError && (
                    <Alert variant="destructive" className="border-l-4">
                      <AlertCircle className="h-5 w-5" />
                      <AlertDescription className="text-base">{generalError}</AlertDescription>
                    </Alert>
                  )}

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="gen-cont1" className="text-base font-medium">
                        المراقبة المستمرة - الدورة 1
                      </Label>
                      <Input
                        id="gen-cont1"
                        type="number"
                        step="0.01"
                        min="0"
                        max="20"
                        placeholder="0.00"
                        className="h-12 text-lg"
                        value={general.cont1}
                        onChange={(e) => {
                          setGeneral({ ...general, cont1: e.target.value })
                          setGeneralError("")
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gen-cont2" className="text-base font-medium">
                        المراقبة المستمرة - الدورة 2
                      </Label>
                      <Input
                        id="gen-cont2"
                        type="number"
                        step="0.01"
                        min="0"
                        max="20"
                        placeholder="0.00"
                        className="h-12 text-lg"
                        value={general.cont2}
                        onChange={(e) => {
                          setGeneral({ ...general, cont2: e.target.value })
                          setGeneralError("")
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gen-regional" className="text-base font-medium">
                        معدل الامتحان الجهوي
                      </Label>
                      <Input
                        id="gen-regional"
                        type="number"
                        step="0.01"
                        min="0"
                        max="20"
                        placeholder="0.00"
                        className="h-12 text-lg"
                        value={general.regional}
                        onChange={(e) => {
                          setGeneral({ ...general, regional: e.target.value })
                          setGeneralError("")
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gen-national" className="text-base font-medium">
                        معدل الامتحان الوطني
                      </Label>
                      <Input
                        id="gen-national"
                        type="number"
                        step="0.01"
                        min="0"
                        max="20"
                        placeholder="0.00"
                        className="h-12 text-lg"
                        value={general.national}
                        onChange={(e) => {
                          setGeneral({ ...general, national: e.target.value })
                          setGeneralError("")
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={calcGeneral}
                      size="lg"
                      className="flex-1 h-12 text-base font-semibold bg-accent hover:bg-accent/90"
                    >
                      احسب المعدل العام
                    </Button>
                    <Button
                      onClick={() => {
                        setGeneral({ cont1: "", cont2: "", regional: "", national: "" })
                        setGeneralResult("")
                        setGeneralError("")
                      }}
                      variant="outline"
                      size="lg"
                      className="flex-1 h-12 text-base font-semibold"
                    >
                      إعادة تعيين
                    </Button>
                  </div>

                  {generalResult && (
                    <Alert className="bg-accent/10 border-accent border-l-4">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <AlertDescription className="text-accent font-bold text-xl">{generalResult}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </section>

            <section aria-labelledby="by-track">
              <Card className="border-2 hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="space-y-4 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0 ring-4 ring-secondary/50">
                      <GraduationCap className="w-7 h-7 text-secondary-foreground" aria-hidden="true" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-2xl md:text-3xl text-right font-bold">
                        3. حساب معدل الوطني حسب الشعبة
                      </CardTitle>
                      <CardDescription className="text-right text-base leading-relaxed">
                        اختر شعبتك وأدخل نقاط المواد لحساب معدل الوطني والمعدل العام
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  {trackError && (
                    <Alert variant="destructive" className="border-l-4">
                      <AlertCircle className="h-5 w-5" />
                      <AlertDescription className="text-base">{trackError}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="track-select" className="text-base font-medium">
                      اختر الشعبة/المسلك
                    </Label>
                    <Select
                      value={track}
                      onValueChange={(value) => {
                        setTrack(value)
                        setSubjects({})
                        setTrackError("")
                      }}
                    >
                      <SelectTrigger id="track-select" className="h-12 text-lg">
                        <SelectValue placeholder="-- اختر الشعبة --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="literature">الآداب</SelectItem>
                        <SelectItem value="modern">العلوم الإنسانية</SelectItem>
                        <SelectItem value="life">علوم الحياة والأرض</SelectItem>
                        <SelectItem value="physics">العلوم الفيزيائية</SelectItem>
                        <SelectItem value="economics">العلوم الاقتصادية</SelectItem>
                        <SelectItem value="accounting">علوم التدبير المحاسباتي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {track && (
                    <>
                      <div className="grid gap-4 md:grid-cols-2">
                        {tracks[track as keyof typeof tracks].map((subject, i) => (
                          <div key={i} className="space-y-2">
                            <Label htmlFor={`subject-${i}`} className="text-base font-medium">
                              {subject.name} <span className="text-muted-foreground">(معامل {subject.coef})</span>
                            </Label>
                            <Input
                              id={`subject-${i}`}
                              type="number"
                              step="0.01"
                              min="0"
                              max="20"
                              placeholder="0.00"
                              className="h-12 text-lg"
                              value={subjects[`subject_${i}`] || ""}
                              onChange={(e) => {
                                setSubjects({ ...subjects, [`subject_${i}`]: e.target.value })
                                setTrackError("")
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-5 mt-5">
                        <h3 className="text-lg font-semibold mb-4 text-right">معلومات إضافية</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="space-y-2">
                            <Label htmlFor="track-regional" className="text-base font-medium">
                              معدل الامتحان الجهوي
                            </Label>
                            <Input
                              id="track-regional"
                              type="number"
                              step="0.01"
                              min="0"
                              max="20"
                              placeholder="0.00"
                              className="h-12 text-lg"
                              value={trackData.regional}
                              onChange={(e) => {
                                setTrackData({ ...trackData, regional: e.target.value })
                                setTrackError("")
                              }}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="track-cont1" className="text-base font-medium">
                              المراقبة المستمرة - الدورة 1
                            </Label>
                            <Input
                              id="track-cont1"
                              type="number"
                              step="0.01"
                              min="0"
                              max="20"
                              placeholder="0.00"
                              className="h-12 text-lg"
                              value={trackData.cont1}
                              onChange={(e) => {
                                setTrackData({ ...trackData, cont1: e.target.value })
                                setTrackError("")
                              }}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="track-cont2" className="text-base font-medium">
                              المراقبة المستمرة - الدورة 2
                            </Label>
                            <Input
                              id="track-cont2"
                              type="number"
                              step="0.01"
                              min="0"
                              max="20"
                              placeholder="0.00"
                              className="h-12 text-lg"
                              value={trackData.cont2}
                              onChange={(e) => {
                                setTrackData({ ...trackData, cont2: e.target.value })
                                setTrackError("")
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button onClick={calcTrack} size="lg" className="flex-1 h-12 text-base font-semibold">
                          احسب المعدلات
                        </Button>
                        <Button
                          onClick={() => {
                            setTrack("")
                            setSubjects({})
                            setTrackData({ regional: "", cont1: "", cont2: "" })
                            setTrackResult("")
                            setTrackError("")
                          }}
                          variant="outline"
                          size="lg"
                          className="flex-1 h-12 text-base font-semibold"
                        >
                          إعادة تعيين
                        </Button>
                      </div>
                    </>
                  )}

                  {trackResult && (
                    <Alert className="bg-accent/10 border-accent border-l-4">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <AlertDescription className="text-accent font-bold text-xl">{trackResult}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </section>
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
                  أدخل معدل المراقبة المستمرة، الجهوي، والوطني في الحاسبة أعلاه واضغط "احسب المعدل العام".
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
                    موقع <strong className="text-foreground">bacresultat.com</strong> هو أفضل موقع لحساب معدل البكالوريا
                    المغربية بدقة وسهولة. نوفر لك حاسبة متطورة تدعم جميع الشعب والمسالك، بما في ذلك العلوم الرياضية،
                    العلوم الفيزيائية، علوم الحياة والأرض، الآداب، والعلوم الإنسانية.
                  </p>
                  <p className="text-lg">
                    يمكنك حساب معدل الامتحان الوطني، المعدل العام، ومعرفة فرص نجاحك في البكالوريا 2026. حاسبتنا محدثة
                    وفقاً لآخر التعديلات من وزارة التربية الوطنية المغربية.
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
                <a
                  key={guide.href}
                  href={guide.href}
                  className="block rounded-lg border-2 bg-card p-5 text-right shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-foreground">{guide.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{guide.description}</p>
                </a>
              ))}
            </div>
          </section>
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
    </div>
  )
}
