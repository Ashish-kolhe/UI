import React from "react"
import { cn } from "@/lib/utils"

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({ className, ...props }, ref) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" className="peer sr-only" ref={ref} {...props} />
      <div
        className={cn(
          "h-6 w-11 rounded-full bg-input transition-colors peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-checked:bg-primary",
          className,
        )}
      >
        <div className="h-5 w-5 translate-x-0.5 rounded-full bg-background transition-transform peer-checked:translate-x-5 absolute top-0.5" />
      </div>
    </label>
  )
})
Switch.displayName = "Switch"

export { Switch }

