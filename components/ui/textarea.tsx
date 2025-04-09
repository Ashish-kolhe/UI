"use client"

import { useId } from "react"

export function Textarea({
  value,
  onChange,
  placeholder,
  disabled = false,
  readOnly = false,
  label,
  error,
  className = "",
  rows = 4,
  ...props
}) {
  const id = useId()

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className={`block text-sm font-medium ${error ? "text-red-600" : "text-gray-700"} mb-1`}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        rows={rows}
        className={`
          block w-full rounded-md border-gray-300 shadow-sm 
          focus:border-primary-500 focus:ring-primary-500 sm:text-sm
          ${error ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500" : ""}
          ${disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : ""}
          ${readOnly ? "cursor-default bg-gray-50" : ""}
        `}
        aria-invalid={error ? "true" : "false"}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}
