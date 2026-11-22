import type { Metadata } from "next"
import Link from "next/link"
import Calculator from "./calculator"

const title = "Calcul de la moyenne du bac au Maroc 2027 | Bac Resultat"
const description = "Estimez votre moyenne du bac marocain avec vos notes du régional, du national et du contrôle continu. Calculez aussi la note nécessaire au national."
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/fr", languages: { "ar-MA": "/", "fr-MA": "/fr" } },
  openGraph: { title, description, type: "website", locale: "fr_MA", url: "/fr" },
}

export default function Page() {
  return <main className="mx-auto max-w-3xl px-4 py-8 space-y-8">
    <header className="space-y-3 border-b pb-6">
      <nav className="flex justify-between"><strong>Bac Resultat</strong><Link href="/" hrefLang="ar" lang="ar" className="text-primary underline">العربية</Link></nav>
      <h1 className="text-3xl font-bold">Calcul de la moyenne du bac marocain 2027</h1>
      <p>Estimez votre moyenne ou la note à viser au national pour atteindre 10/20.</p>
    </header>
    <Calculator />
    <section className="space-y-3 border-t pt-6">
      <h2 className="text-xl font-bold">Comment calculer sa moyenne du bac ?</h2>
      <p>Pour un candidat scolarisé, cette simulation compte le national pour 50 %, le régional pour 25 % et la moyenne des deux semestres pour 25 %.</p>
      <p>Exemple : avec 12 et 16 aux semestres, le contrôle continu vaut 14. Avec 10 au régional et 12 au national, la moyenne estimée est de 12/20. Avec les mêmes notes de classe et du régional, 8 au national donnerait 10/20.</p>
      <p className="text-muted-foreground">Cette estimation pour préparer la session 2027 ne remplace pas le relevé officiel et ne s’applique pas au bac libre.</p>
    </section>
    <footer><Link href="/contact" className="text-primary underline">Contact</Link></footer>
  </main>
}
