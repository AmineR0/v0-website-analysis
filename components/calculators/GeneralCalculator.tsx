"use client"

import { useState } from "react"
import { Calculator, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

const isValidGrade = (value: number) => Number.isFinite(value) && value >= 0 && value <= 20

const getMention = (avg: number) => {
  if (avg >= 16) return "حسن جدا"
  if (avg >= 14) return "حسن"
  if (avg >= 12) return "مستحسن"
  if (avg >= 10) return "مقبول"
  return "راسب"
}

export default function GeneralCalculator() {
  const [general, setGeneral] = useState({ cont1: "", cont2: "", regional: "", national: "" })
  const [generalResult, setGeneralResult] = useState("")
  const [generalError, setGeneralError] = useState("")

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

  return (
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
  )
}
