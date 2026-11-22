"use client"

import { useState, type FormEvent } from "react"
import { Target, Calculator, GraduationCap } from "lucide-react"
import { tracks } from "@/lib/tracks"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const modes = {
  minimum: ["1. Note minimale au national", Target],
  general: ["2. Moyenne générale du bac", Calculator],
  track: ["3. Moyenne du national par filière", GraduationCap],
} as const
type Mode = keyof typeof modes
import { names, subjects, type Track } from "@/lib/tracks-fr"
const format = (n: number) => n.toLocaleString("fr-MA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const mention = (n: number) => n >= 16 ? "Très bien" : n >= 14 ? "Bien" : n >= 12 ? "Assez bien" : n >= 10 ? "Passable" : "Sous le seuil de réussite"

function Panel({ mode }: { mode: Mode }) {
  const [title, Icon] = modes[mode]
  const [track, setTrack] = useState<Track | "">("")
  const [result, setResult] = useState("")
  const list = track ? tracks[track] : []
  function calculate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const grade = (key: string) => Number(String(data.get(key)).replace(",", "."))
    if ([...data.entries()].some(([k,v]) => k !== "track" && grade(k) > 20)) {
      setResult("Chaque note doit être comprise entre 0 et 20.")
      return
    }
    const base = grade("regional") / 4 + (grade("s1") + grade("s2")) / 8
    if (mode === "minimum") {
      setResult("National requis pour 10/20 : " + format(Math.ceil((10-base)*200 - 1e-9)/100) + " / 20")
      return
    }
    const national = mode === "general" ? grade("national") :
      list.reduce((s, v, i) => s + grade("subject"+i)*v.coef, 0) / list.reduce((s,v) => s + v.coef, 0)
    const avg = base + national / 2
    setResult((mode === "track" ? "National : "+format(national)+" / 20 · " : "") +
      "Moyenne générale : "+format(avg)+" / 20 · "+mention(avg))
  }
  const field = (key: string, label: string) => <label key={key} className="grid gap-2 font-medium">
    {label}<Input required name={key} inputMode="decimal" placeholder="0,00" pattern="[0-9]{1,2}([.,][0-9]{1,2})?" title="Note sur 20, avec deux décimales au maximum" />
  </label>
  return <Card>
    <CardHeader><h2 id={mode} className="flex items-center gap-3 text-xl font-bold"><Icon aria-hidden="true" className="shrink-0 text-primary" />{title}</h2></CardHeader>
    <CardContent><form className="grid gap-5" onSubmit={calculate} onChange={() => setResult("")} onReset={() => { setResult(""); setTrack("") }}>
      {mode === "track" && <label className="grid gap-2 font-medium">Filière
        <select required name="track" value={track} onChange={e => setTrack(e.target.value as Track)}
          className="h-11 w-full rounded-md border bg-background px-3">
          <option value="">Choisir une filière</option>
          {Object.entries(names).map(([key,name]) => <option key={key} value={key}>{name}</option>)}
        </select></label>}
      {(mode !== "track" || track) && <>
        {track && <div key={track} className="grid gap-4 sm:grid-cols-2">{list.map((v,i) => field("subject"+i, subjects[v.name]+" (coef. "+v.coef+")"))}</div>}
        <div className="grid gap-4 sm:grid-cols-2">
          {field("regional","Examen régional")}{field("s1","Contrôle continu : semestre 1")}{field("s2","Contrôle continu : semestre 2")}
          {mode === "general" && field("national","Examen national")}
        </div>
        <div className="flex gap-3"><Button type="submit">Calculer</Button><Button type="reset" variant="outline">Effacer</Button></div>
      </>}
      <output aria-live="polite" className="font-bold empty:hidden">{result}</output>
    </form></CardContent>
  </Card>
}

export default function Calculators() {
  return <div className="space-y-8"><Panel mode="minimum" /><Panel mode="general" /><Panel mode="track" /></div>
}
