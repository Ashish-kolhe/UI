"use client"

import { useState, useEffect, useRef } from "react"

export function Dialog({ open = false, onOpenChange, children, className = "", ...props }) {
  const [isOpen, setIsOpen] = useState(open)
  const dialogRef = useRef(null)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscape)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    if (onOpenChange) {
      onOpenChange(false)
    }
  }

  const handleBackdropClick = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      handleClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      {...props}
    >
      <div
        ref={dialogRef}
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 p-6 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}

export function DialogTrigger({ children, onClick, ...props }) {
  return (
    <div onClick={onClick} {...props}>
      {children}
    </div>
  )
}

export function DialogContent({ children, className = "", ...props }) {
  return (
    <div className={`relative ${className}`} {...props}>
      {children}
    </div>
  )
}

export function DialogHeader({ children, className = "", ...props }) {
  return (
    <div className={`mb-4 text-center sm:text-left ${className}`} {...props}>
      {children}
    </div>
  )
}

export function DialogFooter({ children, className = "", ...props }) {
  return (
    <div className={`mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function DialogTitle({ children, className = "", ...props }) {
  return (
    <h3 className={`text-lg font-medium leading-6 text-gray-900 dark:text-gray-100 ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function DialogDescription({ children, className = "", ...props }) {
  return (
    <div className={`mt-2 text-sm text-gray-500 dark:text-gray-400 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function DialogClose({ children, onClick, className = "", ...props }) {
  return (
    <button
      className={`absolute top-4 right-4 text-gray-400 hover:text-gray-500 ${className}`}
      onClick={onClick}
      aria-label="Close"
      {...props}
    >
      {children || (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </button>
  )
}
