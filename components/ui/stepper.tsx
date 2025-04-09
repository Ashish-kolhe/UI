import type React from "react"
import { Check } from "lucide-react"

interface StepProps {
  title: string
  description?: string
  status: "completed" | "current" | "upcoming"
  index: number
  isLast?: boolean
}

export const Step: React.FC<StepProps> = ({ title, description, status, index, isLast = false }) => {
  return (
    <li className="relative flex items-start">
      <div className="flex items-center">
        <div
          className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${
            status === "completed"
              ? "bg-blue-600"
              : status === "current"
                ? "border-2 border-blue-600 bg-white"
                : "border-2 border-gray-300 bg-white"
          }`}
        >
          {status === "completed" ? (
            <Check className="h-5 w-5 text-white" />
          ) : (
            <span className={`text-sm font-medium ${status === "current" ? "text-blue-600" : "text-gray-500"}`}>
              {index + 1}
            </span>
          )}
        </div>
        {!isLast && (
          <div
            className={`absolute top-4 left-4 -ml-px h-0.5 w-full ${
              status === "completed" ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        )}
      </div>
      <div className="ml-4 mt-0.5 min-w-0">
        <h3 className={`text-sm font-medium ${status === "upcoming" ? "text-gray-500" : "text-gray-900"}`}>{title}</h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </li>
  )
}

interface StepperProps {
  steps: Array<{
    title: string
    description?: string
    status: "completed" | "current" | "upcoming"
  }>
  orientation?: "horizontal" | "vertical"
  className?: string
}

export const Stepper: React.FC<StepperProps> = ({ steps, orientation = "horizontal", className = "" }) => {
  return (
    <nav aria-label="Progress" className={className}>
      <ol className={`${orientation === "horizontal" ? "flex items-center justify-between" : "space-y-6"}`}>
        {steps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={step.description}
            status={step.status}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </ol>
    </nav>
  )
}
