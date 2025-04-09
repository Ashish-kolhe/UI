"use client"

import React, { useState, useEffect } from "react"

export function Tabs({ defaultValue, value, onValueChange, children, variant = "default", className = "", ...props }) {
  const [selectedTab, setSelectedTab] = useState(value || defaultValue)

  useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value)
    }
  }, [value])

  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue)
    if (onValueChange) {
      onValueChange(tabValue)
    }
  }

  // Extract TabsList and TabsContent from children
  const tabsList = []
  const tabsContent = []

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === TabsList) {
        tabsList.push(child)
      } else if (child.type === TabsContent) {
        tabsContent.push(child)
      }
    }
  })

  // Variant styles
  const variantClasses = {
    default: "",
    pills: "p-1 bg-gray-100 rounded-lg",
    underline: "border-b border-gray-200",
  }

  const variantClass = variantClasses[variant] || variantClasses.default

  return (
    <div className={`${className}`} {...props}>
      {tabsList.map((list, index) =>
        React.cloneElement(list, {
          key: index,
          selectedTab,
          onTabChange: handleTabChange,
          variant,
          className: `${variantClass} ${list.props.className || ""}`,
        }),
      )}
      {tabsContent.map((content, index) =>
        React.cloneElement(content, {
          key: index,
          selectedTab,
        }),
      )}
    </div>
  )
}

export function TabsList({ children, selectedTab, onTabChange, variant = "default", className = "", ...props }) {
  return (
    <div role="tablist" className={`flex ${className}`} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            selected: child.props.value === selectedTab,
            onSelect: () => onTabChange(child.props.value),
            variant,
          })
        }
        return child
      })}
    </div>
  )
}

export function TabsTrigger({
  children,
  value,
  selected,
  onSelect,
  disabled = false,
  variant = "default",
  className = "",
  ...props
}) {
  // Variant styles
  const variantStyles = {
    default: {
      base: "px-3 py-2 text-sm font-medium",
      selected: "text-primary-600 border-b-2 border-primary-600",
      notSelected: "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300",
    },
    pills: {
      base: "px-3 py-2 text-sm font-medium rounded-md",
      selected: "bg-white text-primary-700 shadow",
      notSelected: "text-gray-500 hover:text-gray-700",
    },
    underline: {
      base: "px-3 py-2 text-sm font-medium border-b-2 -mb-px",
      selected: "text-primary-600 border-primary-600",
      notSelected: "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300",
    },
  }

  const style = variantStyles[variant] || variantStyles.default

  return (
    <button
      role="tab"
      aria-selected={selected}
      aria-controls={`panel-${value}`}
      tabIndex={selected ? 0 : -1}
      onClick={onSelect}
      disabled={disabled}
      className={`
        ${style.base}
        ${selected ? style.selected : style.notSelected}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, selectedTab, forceMount = false, className = "", ...props }) {
  const isSelected = value === selectedTab

  if (!forceMount && !isSelected) {
    return null
  }

  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      hidden={!isSelected}
      className={`mt-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
