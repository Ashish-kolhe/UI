"use client"

import { useState } from "react"

interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  size?: "sm" | "md" | "lg"
  className?: string
  id?: string
}

export function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  size = "md",
  className = "",
  id,
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = () => {
    if (disabled) return

    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)
  }

  // Size-based styles
  const sizeStyles = {
    sm: {
      switch: "w-8 h-4",
      thumb: "w-3 h-3",
      translate: "translate-x-4",
    },
    md: {
      switch: "w-11 h-6",
      thumb: "w-5 h-5",
      translate: "translate-x-5",
    },
    lg: {
      switch: "w-14 h-7",
      thumb: "w-6 h-6",
      translate: "translate-x-7",
    },
  }

  const { switch: switchSize, thumb: thumbSize, translate } = sizeStyles[size]

  return (
    <label className={`relative inline-flex items-center ${label ? "space-x-3" : ""} ${className}`}>
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={isChecked}
        onClick={handleChange}
        disabled={disabled}
        className={`
          relative inline-flex flex-shrink-0 ${switchSize} border-2 border-transparent 
          rounded-full cursor-pointer transition-colors ease-in-out duration-200 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          ${isChecked ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        <span
          className={`
            ${isChecked ? translate : "translate-x-0"} 
            pointer-events-none inline-block ${thumbSize} rounded-full 
            bg-white shadow transform ring-0 transition ease-in-out duration-200
          `}
        />
      </button>
      {label && (
        <span className={`text-sm font-medium ${disabled ? "text-gray-400" : "text-gray-900 dark:text-gray-100"}`}>
          {label}
        </span>
      )}
    </label>
  )
}
