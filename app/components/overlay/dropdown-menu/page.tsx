import type { Metadata } from "next"
import DropdownMenuPageClient from "./page.client"

export const metadata: Metadata = {
  title: "Dropdown Menu - UI Library",
  description: "Dropdown menu component for displaying a list of options",
}

export default function DropdownMenuPage() {
  return <DropdownMenuPageClient />
}

