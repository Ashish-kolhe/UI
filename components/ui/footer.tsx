import React from "react"
import { cn } from "@/lib/utils"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "slim" | "centered"
  bordered?: boolean
}

interface FooterColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, variant = "default", bordered = true, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "w-full bg-white dark:bg-gray-950 py-12",
          bordered && "border-t border-gray-200 dark:border-gray-800",
          className,
        )}
        {...props}
      />
    )
  },
)

const FooterContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("container mx-auto px-4", className)} {...props}>
        {children}
      </div>
    )
  },
)

const FooterColumns = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid grid-cols-1 md:grid-cols-4 gap-8", className)} {...props}>
        {children}
      </div>
    )
  },
)

const FooterColumn = React.forwardRef<HTMLDivElement, FooterColumnProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {title && <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>}
        <div className="space-y-3">{children}</div>
      </div>
    )
  },
)

const FooterLink = React.forwardRef<HTMLAnchorElement, FooterLinkProps>(
  ({ className, href, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    )
  },
)

const FooterBottom = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

const FooterCopyright = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-sm text-gray-600 dark:text-gray-400", className)} {...props}>
        {children}
      </p>
    )
  },
)

const FooterSocials = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex space-x-6 mt-4 md:mt-0", className)} {...props}>
        {children}
      </div>
    )
  },
)

Footer.displayName = "Footer"
FooterContent.displayName = "FooterContent"
FooterColumns.displayName = "FooterColumns"
FooterColumn.displayName = "FooterColumn"
FooterLink.displayName = "FooterLink"
FooterBottom.displayName = "FooterBottom"
FooterCopyright.displayName = "FooterCopyright"
FooterSocials.displayName = "FooterSocials"

export { Footer, FooterContent, FooterColumns, FooterColumn, FooterLink, FooterBottom, FooterCopyright, FooterSocials }
