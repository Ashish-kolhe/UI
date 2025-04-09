import React from "react"
import { cn } from "@/lib/utils"

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  image?: string
  children?: React.ReactNode
  align?: "left" | "center" | "right"
  size?: "sm" | "md" | "lg"
  overlay?: boolean
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    { className, title, description, image, children, align = "center", size = "md", overlay = false, ...props },
    ref,
  ) => {
    const alignStyles = {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end",
    }

    const sizeStyles = {
      sm: "py-12 md:py-16",
      md: "py-16 md:py-24",
      lg: "py-24 md:py-32",
    }

    return (
      <div
        ref={ref}
        className={cn("relative w-full flex flex-col justify-center", sizeStyles[size], className)}
        style={
          image
            ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
            : undefined
        }
        {...props}
      >
        {image && overlay && <div className="absolute inset-0 bg-black/50" />}
        <div className={cn("container mx-auto px-4 relative z-10 flex flex-col", alignStyles[align])}>
          <h1
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
              image && overlay ? "text-white" : "text-gray-900 dark:text-white",
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-4 max-w-xl text-lg",
                image && overlay ? "text-gray-200" : "text-gray-600 dark:text-gray-300",
                align === "center" ? "mx-auto" : "",
              )}
            >
              {description}
            </p>
          )}
          {children && (
            <div
              className={cn(
                "mt-8 flex flex-wrap gap-4",
                align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start",
              )}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    )
  },
)

Hero.displayName = "Hero"

export { Hero }
