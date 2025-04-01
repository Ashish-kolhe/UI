import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Toast - UI Library",
  description: "Toast component for notifications",
}

export default function ToastPage() {
  return <ClientPage />
}

