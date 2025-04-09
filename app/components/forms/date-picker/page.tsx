import type { Metadata } from "next"
import DatePickerClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Date Picker - UI Library",
  description: "Date picker component for selecting dates",
}

export default function DatePickerPage() {
  return <DatePickerClientPage />
}
