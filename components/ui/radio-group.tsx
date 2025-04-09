"use client"

import { useId, useState } from "react"

interface RadioGroupProps {
  options: { value: string; label: string; description?: string }[]
  name: string
  defaultValue?: string
  onChange?: (value: string) => void
  disabled?: boolean
  className?: string
  orientation?: "horizontal" | "vertical"
}

export function RadioGroup({
  options,
  name,
  defaultValue,
  onChange,
  disabled = false,
  className = "",
  orientation = "vertical",
}: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "")
  const groupId = useId()

  const handleChange = (value: string) => {
    setSelectedValue(value)
    onChange?.(value)
  }

  return (
    <div className={`${orientation === "horizontal" ? "flex space-x-6" : "space-y-3"} ${className}`} role="radiogroup">
      {options.map((option) => {
        const id = `${groupId}-${option.value}`
        const isSelected = selectedValue === option.value

        return (
          <div key={option.value} className={`flex items-start ${orientation === "horizontal" ? "" : "space-x-2"}`}>
            <div className="flex items-center h-5">
              <input
                id={id}
                name={name}
                type="radio"
                value={option.value}
                checked={isSelected}
                onChange={() => handleChange(option.value)}
                disabled={disabled}
                className="h-4 w-4 cursor-pointer border-gray-300 text-primary focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby={option.description ? `${id}-description` : undefined}
              />
            </div>
            <div className="ml-2 text-sm">
              <label
                htmlFor={id}
                className={`font-medium ${
                  disabled ? "text-gray-400" : "text-gray-900 dark:text-gray-100"
                } cursor-pointer`}
              >
                {option.label}
              </label>
              {option.description && (
                <p id={`${id}-description`} className="text-gray-500 dark:text-gray-400">
                  {option.description}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
