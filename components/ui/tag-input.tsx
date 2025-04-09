"use client"

import type React from "react"
import { useState, useRef, type KeyboardEvent } from "react"
import { X } from "lucide-react"

interface TagInputProps {
  placeholder?: string
  tags: string[]
  onChange: (tags: string[]) => void
  maxTags?: number
  disabled?: boolean
  className?: string
  tagClassName?: string
}

export const TagInput: React.FC<TagInputProps> = ({
  placeholder = "Add tags...",
  tags = [],
  onChange,
  maxTags = 10,
  disabled = false,
  className = "",
  tagClassName = "",
}) => {
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault()
      addTag(inputValue.trim())
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      removeTag(tags.length - 1)
    } else if (e.key === "," && inputValue.trim() !== "") {
      e.preventDefault()
      addTag(inputValue.trim())
    }
  }

  const addTag = (tag: string) => {
    if (tags.length >= maxTags) return
    if (!tags.includes(tag)) {
      const newTags = [...tags, tag]
      onChange(newTags)
      setInputValue("")
    } else {
      setInputValue("")
    }
  }

  const removeTag = (index: number) => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    onChange(newTags)
  }

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white ${disabled ? "bg-gray-100 cursor-not-allowed" : "cursor-text"} ${className}`}
      onClick={handleContainerClick}
    >
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-md ${disabled ? "opacity-60" : "hover:bg-blue-200"} ${tagClassName}`}
        >
          <span>{tag}</span>
          {!disabled && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                removeTag(index)
              }}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
              aria-label={`Remove ${tag}`}
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={tags.length === 0 ? placeholder : ""}
        className="flex-grow min-w-[120px] outline-none bg-transparent text-sm"
        disabled={disabled || tags.length >= maxTags}
        aria-label="Add tags"
      />
    </div>
  )
}
