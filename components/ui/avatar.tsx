"use client"

import React from "react"

export function Avatar({
  src,
  alt = "",
  fallback,
  size = "md",
  shape = "circle",
  status,
  statusPosition = "bottom-right",
  className = "",
  ...props
}) {
  const [imgError, setImgError] = React.useState(false)

  // Size classes
  const sizeClasses = {
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-16 w-16 text-xl",
    "2xl": "h-20 w-20 text-2xl",
  }

  // Shape classes
  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-md",
  }

  // Status classes
  const statusClasses = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
    away: "bg-yellow-500",
  }

  // Status position classes
  const statusPositionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  }

  const sizeClass = sizeClasses[size] || sizeClasses.md
  const shapeClass = shapeClasses[shape] || shapeClasses.circle

  // Get initials from fallback text
  const getInitials = (name) => {
    if (!name) return ""
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className={`relative inline-block ${className}`} {...props}>
      {!imgError && src ? (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          onError={() => setImgError(true)}
          className={`${sizeClass} ${shapeClass} object-cover`}
        />
      ) : (
        <div
          className={`${sizeClass} ${shapeClass} flex items-center justify-center bg-gray-200 text-gray-600`}
          aria-label={alt}
        >
          {fallback ? getInitials(fallback) : ""}
        </div>
      )}

      {status && (
        <span
          className={`
            absolute block h-2.5 w-2.5 rounded-full ring-2 ring-white
            ${statusClasses[status] || "bg-gray-400"}
            ${statusPositionClasses[statusPosition] || statusPositionClasses["bottom-right"]}
          `}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

export function AvatarGroup({ children, max, className = "", ...props }) {
  const childrenArray = React.Children.toArray(children)
  const showMax = max !== undefined && childrenArray.length > max
  const visibleChildren = showMax ? childrenArray.slice(0, max) : childrenArray

  return (
    <div className={`flex -space-x-2 overflow-hidden ${className}`} {...props}>
      {visibleChildren.map((child, index) => (
        <div key={index} className="relative inline-block ring-2 ring-white">
          {child}
        </div>
      ))}

      {showMax && (
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600 ring-2 ring-white">
          +{childrenArray.length - max}
        </div>
      )}
    </div>
  )
}
