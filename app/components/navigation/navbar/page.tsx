import type { Metadata } from "next"
import NavbarClientPage from "./NavbarClientPage"

export const metadata: Metadata = {
  title: "Navbar Component",
  description: "A responsive navigation bar component for website headers",
}

export default function NavbarPage() {
  return <NavbarClientPage />
}
