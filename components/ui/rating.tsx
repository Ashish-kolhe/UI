"use client"

import React from "react"
import { Star } from "lucide-react"

interface RatingProps {
  value: number
  max?: number
  size?: "sm" | "md" | "lg"
  color?: string
  onChange?: (value: number) => void
  readonly?: boolean
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = "md",
  color = "gold",
  onChange,
  readonly = false,
}) => {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const colorClasses = {
    gold: "text-amber-400",
    red: "text-red-500",
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
  }

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.gold
  const selectedSize = sizeClasses[size]

  const handleClick = (index: number) => {
    if (!readonly && onChange) {
      onChange(index + 1)
    }
  }

  const handleMouseEnter = (index: number) => {
    if (!readonly) {
      setHoverValue(index + 1)
    }
  }

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverValue(null)
    }
  }

  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, index) => {
        const isActive = hoverValue !== null ? index < hoverValue : index < value

        return (
          <button
            key={index}
            type="button"
            className={`${readonly ? "cursor-default" : "cursor-pointer"} transition-transform duration-200 ${
              isActive ? selectedColor : "text-gray-300"
            } ${!readonly && "hover:scale-110"} focus:outline-none mr-1`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            disabled={readonly}
            aria-label={`${index + 1} stars`}
          >
            <Star className={`${selectedSize} fill-current`} />
          </button>
        )
      })}
    </div>
  )
}
