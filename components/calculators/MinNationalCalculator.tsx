"use client"

import { useState } from "react"
import { Target, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

const isValidGrade = (value: number) => Number.isFinite(value) && value >= 0 && value <= 20

export default function MinNationalCalculator() {
  const [minNational, setMinNational] = useState({ regional: "", cont1: "", cont2: "" })
  const [minNationalResult, setMinNationalResult] = useState("")
  const [minNationalError, setMinNationalError] = useState("")

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

  return (
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
  )
}
