import React from "react"
import { cn } from "@/lib/utils"

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  children?: React.ReactNode
  variant?: "default" | "transparent" | "bordered"
  position?: "static" | "sticky" | "fixed"
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, logo, children, variant = "default", position = "static", ...props }, ref) => {
    const variantStyles = {
      default: "bg-white dark:bg-gray-950 shadow-sm",
      transparent: "bg-transparent",
      bordered: "bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800",
    }

    const positionStyles = {
      static: "",
      sticky: "sticky top-0 z-40",
      fixed: "fixed top-0 left-0 right-0 z-40",
    }

    return (
      <nav
        ref={ref}
        className={cn("w-full py-4", variantStyles[variant], positionStyles[position], className)}
        {...props}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">{logo}</div>
          <div className="hidden md:flex items-center space-x-4">{children}</div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    )
  },
)

Navbar.displayName = "Navbar"

export { Navbar }
