"use client"

import { useState } from "react"
import { Palette } from "lucide-react"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<"default" | "blue">("default")

  const toggleTheme = () => {
    const newTheme = theme === "default" ? "blue" : "default"
    setTheme(newTheme)

    // Update the document attribute
    if (newTheme === "blue") {
      document.documentElement.setAttribute("data-theme", "blue")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }

    // Store the preference
    localStorage.setItem("theme", newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100"
      aria-label="Switch color theme"
    >
      <Palette className="h-5 w-5 text-gray-600" />
    </button>
  )
}
