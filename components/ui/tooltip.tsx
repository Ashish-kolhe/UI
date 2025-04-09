"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(({ children, open, onOpenChange, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(open || false)

  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open)
    }
  }, [open])

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  return (
    <div ref={ref} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen,
            onOpenChange: handleOpenChange,
          })
        }
        return child
      })}
    </div>
  )
})
Tooltip.displayName = "Tooltip"

interface TooltipTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ className, asChild = false, isOpen, onOpenChange, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"

    return (
      <Comp
        ref={ref}
        className={cn("", className)}
        onMouseEnter={() => onOpenChange?.(true)}
        onMouseLeave={() => onOpenChange?.(false)}
        onFocus={() => onOpenChange?.(true)}
        onBlur={() => onOpenChange?.(false)}
        {...props}
      />
    )
  },
)
TooltipTrigger.displayName = "TooltipTrigger"

interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  side?: "top" | "right" | "bottom" | "left"
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, isOpen, side = "top", ...props }, ref) => {
    if (!isOpen) return null

    const sidePositions = {
      top: "bottom-full mb-2",
      right: "left-full ml-2",
      bottom: "top-full mt-2",
      left: "right-full mr-2",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
          sidePositions[side],
          className,
        )}
        {...props}
      />
    )
  },
)
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
