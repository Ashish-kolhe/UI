import React from "react"
import { cn } from "@/lib/utils"

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg"
  label?: string
  isLoading?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "default", size = "md", label, isLoading = false, children, ...props }, ref) => {
    // Variant styles
    const variantStyles = {
      default: "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200",
      primary: "bg-blue-600 text-white hover:bg-blue-700 border-blue-600",
      secondary: "bg-gray-800 text-white hover:bg-gray-900 border-gray-800",
      outline: "bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100 border-transparent",
      destructive: "bg-red-600 text-white hover:bg-red-700 border-red-600",
    }

    // Size styles
    const sizeStyles = {
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          isLoading && "cursor-wait",
          className,
        )}
        disabled={isLoading || props.disabled}
        aria-label={label}
        {...props}
      >
        {isLoading ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        ) : (
          <span className="transform transition-transform duration-200 hover:scale-110 active:scale-95">
            {children}
          </span>
        )}
        {label && <span className="sr-only">{label}</span>}
      </button>
    )
  },
)

IconButton.displayName = "IconButton"

export { IconButton }
