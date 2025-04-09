import type React from "react"

interface TimelineItemProps {
  title: string
  time?: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  isLast?: boolean
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  time,
  description,
  icon,
  children,
  isLast = false,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white z-10">
          {icon}
        </div>
        {!isLast && <div className="h-full w-0.5 bg-blue-200"></div>}
      </div>
      <div className={`pb-8 ${isLast ? "" : "mb-4"}`}>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{title}</h3>
          {time && <span className="text-sm text-gray-500">{time}</span>}
        </div>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
        {children}
      </div>
    </div>
  )
}

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export const Timeline: React.FC<TimelineProps> = ({ children, className = "" }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>
}
