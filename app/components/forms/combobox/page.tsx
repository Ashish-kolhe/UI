import type { Metadata } from "next"
import ComboboxPageClient from "./page.client"

export const metadata: Metadata = {
  title: "Combobox - UI Library",
  description: "Combobox component for selecting from a list of options",
}

export default function ComboboxPage() {
  return <ComboboxPageClient />
}
