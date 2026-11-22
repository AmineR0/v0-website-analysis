import Link from "next/link"
import { tracks } from "@/lib/tracks"
import { names, subjects, type Track } from "@/lib/tracks-fr"

const title = "Coefficients du bac marocain : calcul du national par filière"
const description = "Retrouvez les coefficients utilisés par le simulateur pour six filières, avec un exemple de moyenne pondérée en sciences physiques."
export const metadata = {
  title, description, alternates: { canonical: "/fr/coefficients-bac" },
  openGraph: { title, description, type: "article", locale: "fr_MA", url: "/fr/coefficients-bac" },
}

export default function Guide() {
  return <main className="mx-auto max-w-3xl space-y-6 px-4 py-8">
    <Link className="text-primary underline" href="/fr">Bac Resultat : calcul de la moyenne</Link>
    <h1 className="text-3xl font-bold">{title}</h1>
    <p>Pour obtenir la moyenne du national, multipliez chaque note sur 20 par son coefficient, additionnez les produits, puis divisez par la somme des coefficients. Ne comptez pas le régional ou le contrôle continu à cette étape.</p>
    <h2 className="text-xl font-bold">Exemple en sciences physiques</h2>
    <p>Avec 14 en physique-chimie, 12 en maths, 10 en SVT, 15 en langue et 11 en philosophie, le total pondéré est de 284 points pour 23 coefficients. La moyenne du national est donc de 12,35/20, et non la moyenne simple de 12,40.</p>
    <h2 className="text-xl font-bold">Coefficients utilisés dans le simulateur</h2>
    <p>Choisissez votre filière. Ces tableaux décrivent le calcul du site ; pour votre session, vérifiez le barème applicable auprès de votre établissement.</p>
    {(Object.keys(names) as Track[]).map(key => <details key={key} className="border-b pb-3">
      <summary className="cursor-pointer font-semibold">{names[key]}</summary>
      <table className="mt-2 w-full text-start"><caption className="sr-only">{names[key]}</caption>
        <thead><tr><th className="text-start">Matière</th><th>Coefficient</th></tr></thead>
        <tbody>{tracks[key].map(s => <tr key={s.name}><td>{subjects[s.name]}</td><td className="text-center">{s.coef}</td></tr>)}</tbody>
      </table>
    </details>)}
    <Link href="/fr#track" className="block text-primary underline">Calculer ma moyenne du national par filière</Link>
  </main>
}
