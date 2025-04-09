"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "single" | "range" | "multiple"
  selected?: Date | { from: Date; to: Date } | Date[]
  onSelect?: (date: Date | { from: Date; to: Date } | Date[] | undefined) => void
  disabled?: (Date | { from: Date; to: Date })[]
  initialFocus?: boolean
  numberOfMonths?: number
  defaultMonth?: Date
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function Calendar({
  className,
  mode = "single",
  selected,
  onSelect,
  disabled = [],
  initialFocus,
  numberOfMonths = 1,
  defaultMonth = new Date(),
  ...props
}: CalendarProps) {
  const [month, setMonth] = React.useState(defaultMonth)

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const isDateSelected = (date: Date) => {
    if (!selected) return false

    if (mode === "single" && selected instanceof Date) {
      return date.toDateString() === selected.toDateString()
    }

    if (mode === "range" && typeof selected === "object" && "from" in selected && "to" in selected) {
      const { from, to } = selected
      return date >= from && date <= to
    }

    if (mode === "multiple" && Array.isArray(selected)) {
      return selected.some((d) => d.toDateString() === date.toDateString())
    }

    return false
  }

  const isDateDisabled = (date: Date) => {
    return disabled.some((d) => {
      if (d instanceof Date) {
        return d.toDateString() === date.toDateString()
      }
      if (typeof d === "object" && "from" in d && "to" in d) {
        return date >= d.from && date <= d.to
      }
      return false
    })
  }

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return

    if (mode === "single") {
      onSelect?.(date)
    } else if (mode === "range" && typeof selected === "object" && "from" in selected) {
      const { from } = selected
      if (!from) {
        onSelect?.({ from: date, to: date })
      } else {
        onSelect?.({ from, to: date })
      }
    } else if (mode === "multiple" && Array.isArray(selected)) {
      const isAlreadySelected = selected.some((d) => d.toDateString() === date.toDateString())
      if (isAlreadySelected) {
        onSelect?.(selected.filter((d) => d.toDateString() !== date.toDateString()))
      } else {
        onSelect?.([...selected, date])
      }
    }
  }

  const handlePreviousMonth = () => {
    setMonth((prev) => {
      const newMonth = new Date(prev)
      newMonth.setMonth(newMonth.getMonth() - 1)
      return newMonth
    })
  }

  const handleNextMonth = () => {
    setMonth((prev) => {
      const newMonth = new Date(prev)
      newMonth.setMonth(newMonth.getMonth() + 1)
      return newMonth
    })
  }

  const renderCalendarMonth = (monthOffset = 0) => {
    const currentMonth = new Date(month)
    currentMonth.setMonth(currentMonth.getMonth() + monthOffset)

    const year = currentMonth.getFullYear()
    const monthIndex = currentMonth.getMonth()
    const daysInMonth = getDaysInMonth(year, monthIndex)
    const firstDayOfMonth = getFirstDayOfMonth(year, monthIndex)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-9 w-9" />)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, monthIndex, day)
      const isSelected = isDateSelected(date)
      const isDisabled = isDateDisabled(date)

      days.push(
        <button
          key={`day-${day}`}
          type="button"
          className={cn(
            "h-9 w-9 rounded-md text-center text-sm p-0 font-normal aria-selected:opacity-100",
            isSelected && "bg-primary text-primary-foreground",
            !isSelected && "hover:bg-accent hover:text-accent-foreground",
            isDisabled && "opacity-50 cursor-not-allowed",
          )}
          disabled={isDisabled}
          onClick={() => handleDateClick(date)}
          aria-selected={isSelected}
        >
          {day}
        </button>,
      )
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          {monthOffset === 0 && (
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0"
              onClick={handlePreviousMonth}
            >
              <span className="sr-only">Previous month</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}
          <div className="text-sm font-medium">
            {months[monthIndex]} {year}
          </div>
          {monthOffset === numberOfMonths - 1 && (
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0"
              onClick={handleNextMonth}
            >
              <span className="sr-only">Next month</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {daysOfWeek.map((day) => (
            <div key={day} className="h-9 w-9 text-center text-sm font-medium text-muted-foreground">
              {day.charAt(0)}
            </div>
          ))}
          {days}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("p-3", className)} {...props}>
      <div className="flex space-x-4">
        {Array.from({ length: numberOfMonths }).map((_, i) => (
          <div key={i}>{renderCalendarMonth(i)}</div>
        ))}
      </div>
    </div>
  )
}

export { Calendar }
