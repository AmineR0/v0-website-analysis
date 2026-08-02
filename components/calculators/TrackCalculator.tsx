"use client"

import { useState } from "react"
import { GraduationCap, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

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

export default function TrackCalculator() {
  const [track, setTrack] = useState("")
  const [subjects, setSubjects] = useState<{ [key: string]: string }>({})
  const [trackData, setTrackData] = useState({ regional: "", cont1: "", cont2: "" })
  const [trackResult, setTrackResult] = useState("")
  const [trackError, setTrackError] = useState("")

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
  )
}
