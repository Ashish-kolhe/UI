"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, defaultValue, value, onValueChange, ...props }, ref) => {
    const [selectedValue, setSelectedValue] = React.useState(value || defaultValue)

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value)
      }
    }, [value])

    const handleValueChange = (newValue: string) => {
      setSelectedValue(newValue)
      onValueChange?.(newValue)
    }

    return (
      <div ref={ref} className={cn("grid gap-2", className)} {...props} data-value={selectedValue}>
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              selectedValue,
              onValueChange: handleValueChange,
            })
          }
          return child
        })}
      </div>
    )
  },
)
RadioGroup.displayName = "RadioGroup"

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  selectedValue?: string
  onValueChange?: (value: string) => void
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, selectedValue, onValueChange, ...props }, ref) => {
    const isChecked = selectedValue === value

    return (
      <div className="relative flex items-center">
        <input
          type="radio"
          ref={ref}
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-full border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          value={value}
          checked={isChecked}
          onChange={() => onValueChange?.(value)}
          {...props}
        />
        <div className="absolute left-0 top-0 h-4 w-4 rounded-full pointer-events-none flex items-center justify-center">
          <div className={cn("h-2 w-2 rounded-full bg-primary", isChecked ? "opacity-100" : "opacity-0")} />
        </div>
      </div>
    )
  },
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }

