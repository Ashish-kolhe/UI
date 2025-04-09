"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold text-lg">UI Library</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link
          href="/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/components" || pathname.startsWith("/components/")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Components
        </Link>
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Documentation
        </Link>
        <Link
          href="/components/installation"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/components/installation" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Installation
        </Link>
      </nav>
    </div>
  )
}
