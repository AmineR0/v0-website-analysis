"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"

const labels = ["Contrôle continu : semestre 1", "Contrôle continu : semestre 2", "Examen régional", "Examen national"]
const format = (n: number) => n.toLocaleString("fr-MA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export default function Calculator() {
  const [values, setValues] = useState(["", "", "", ""])
  const valid = values.map(v => /^\d{1,2}([.,]\d{1,2})?$/.test(v) && Number(v.replace(",", ".")) <= 20)
  const [a,b,r,n] = values.map(v => Number(v.replace(",", ".")))
  const base = (a+b)/8 + r/4
  const ready = valid.slice(0,3).every(Boolean)
  const target = Math.ceil((10-base)*200 - 1e-9)/100
  return <section className="space-y-5">
    <h2 className="text-xl font-bold">Vos notes sur 20</h2>
    <div className="grid gap-4 sm:grid-cols-2">{labels.map((label,i) =>
      <label key={label} className="space-y-2"><span>{label}</span>
        <Input inputMode="decimal" placeholder="0,00" value={values[i]} aria-invalid={!!values[i] && !valid[i]}
          onChange={e => setValues(values.map((v,j) => j === i ? e.target.value : v))} />
        {values[i] && !valid[i] && <small>Note de 0 à 20, avec deux décimales au maximum.</small>}
      </label>)}</div>
    <dl aria-live="polite" className="grid gap-4 rounded-lg bg-muted p-4 sm:grid-cols-2">
      <div><dt>Moyenne estimée</dt><dd className="text-2xl font-bold">{ready && valid[3] ? format(base+n/2)+" / 20" : "–"}</dd></div>
      <div><dt>National requis pour 10/20</dt><dd className="text-2xl font-bold">{ready ? format(target)+" / 20" : "–"}</dd></div>
    </dl>
    <button type="button" className="text-primary underline" onClick={() => setValues(["","","",""])}>Effacer les notes</button>
  </section>
}
