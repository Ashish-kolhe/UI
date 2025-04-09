import type { Metadata } from "next"
import TagInputPageClient from "./TagInputPageClient"

export const metadata: Metadata = {
  title: "Tag Input - UiforU",
  description: "Input component for entering multiple tags or keywords",
}

export default function TagInputPage() {
  return <TagInputPageClient />
}
