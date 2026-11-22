import SiteShell, { metadata as defaults } from "../site-shell"
export const metadata = defaults
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell language="ar">{children}</SiteShell>
}
