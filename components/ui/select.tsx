"use client"

import { useId, useState, useRef, useEffect } from "react"

export function Select({
  options = [],
  value,
  onValueChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
  ...props
}) {
  const id = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value)
  const selectRef = useRef(null)

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelect = (option) => {
    setSelectedValue(option.value)
    if (onValueChange) {
      onValueChange(option.value)
    }
    setIsOpen(false)
  }

  const selectedOption = options.find((option) => option.value === selectedValue)

  return (
    <div ref={selectRef} className={`relative ${className}`} {...props}>
      <button
        type="button"
        id={id}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`
          relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left 
          border border-gray-300 shadow-sm focus:border-primary-500 focus:outline-none 
          focus:ring-1 focus:ring-primary-500 sm:text-sm
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        <span className="block truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          tabIndex={-1}
          role="listbox"
          aria-labelledby={id}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`
                relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900
                ${option.value === selectedValue ? "bg-primary-100 text-primary-900" : "hover:bg-gray-100"}
              `}
              role="option"
              aria-selected={option.value === selectedValue}
              onClick={() => handleSelect(option)}
            >
              <span className={`block truncate ${option.value === selectedValue ? "font-medium" : "font-normal"}`}>
                {option.label}
              </span>

              {option.value === selectedValue && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
