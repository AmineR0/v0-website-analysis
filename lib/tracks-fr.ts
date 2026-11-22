import type { tracks } from "./tracks"
export type Track = keyof typeof tracks
export const names: Record<Track, string> = {
  literature: "Lettres", modern: "Sciences humaines", life: "Sciences de la vie et de la Terre",
  physics: "Sciences physiques", economics: "Sciences économiques", accounting: "Sciences de gestion comptable",
}
export const subjects: Record<(typeof tracks)[Track][number]["name"], string> = {
  "اللغة العربية": "Arabe", "اللغة الأجنبية الثانية": "Deuxième langue étrangère",
  "التاريخ والجغرافيا": "Histoire-géographie", "الفلسفة": "Philosophie",
  "علوم الحياة والأرض": "Sciences de la vie et de la Terre", "الرياضيات": "Mathématiques",
  "الفيزياء والكيمياء": "Physique-chimie", "المحاسبة والرياضيات المالية": "Comptabilité et mathématiques financières",
  "الاقتصاد العام والإحصاء": "Économie générale et statistiques",
  "الاقتصاد والتنظيم الإداري للمقاولات": "Économie et organisation administrative des entreprises",
}
