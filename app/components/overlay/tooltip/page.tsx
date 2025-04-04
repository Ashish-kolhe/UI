import type { Metadata } from "next"
import TooltipPageClient from "./page.client"

export const metadata: Metadata = {
  title: "Tooltip - UI Library",
  description: "Tooltip component for displaying information on hover",
}

export default function TooltipPage() {
  return <TooltipPageClient />
}

