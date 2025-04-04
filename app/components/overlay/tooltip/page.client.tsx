"use client"

import { ComponentPreview } from "@/components/component-preview"

export default function TooltipPageClient() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
          <p className="text-lg text-muted-foreground">
            A tooltip component for displaying additional information on hover.
          </p>
        </div>

        <ComponentPreview
          title="Default Tooltip"
          description="The default tooltip style."
          code={`<div className="relative inline-flex">
  <button
    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
    aria-describedby="tooltip-1"
  >
    Hover Me
  </button>
  <div
    id="tooltip-1"
    role="tooltip"
    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 bottom-full mb-2 left-1/2 -translate-x-1/2"
  >
    This is a tooltip
    <div className="tooltip-arrow" data-popper-arrow></div>
  </div>
</div>`}
          preview={
            <div className="relative inline-flex">
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                aria-describedby="tooltip-1"
              >
                Hover Me
              </button>
              <div
                id="tooltip-1"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 bottom-full mb-2 left-1/2 -translate-x-1/2"
              >
                This is a tooltip
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Interactive Tooltip"
          description="A tooltip that appears on hover with JavaScript."
          code={`// This example requires JavaScript to show/hide the tooltip
<div className="relative inline-flex group">
  <button
    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
  >
    Hover For Tooltip
  </button>
  <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2">
    Interactive tooltip content
    <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
  </div>
</div>`}
          preview={
            <div className="relative inline-flex group">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Hover For Tooltip
              </button>
              <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2">
                Interactive tooltip content
                <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Tooltip Positions"
          description="Tooltips in different positions."
          code={`<div className="flex flex-wrap items-center justify-center gap-4">
  <div className="relative inline-flex group">
    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
      Top
    </button>
    <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2">
      Tooltip on top
      <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
    </div>
  </div>
  
  <div className="relative inline-flex group">
    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
      Right
    </button>
    <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 left-full ml-2 top-1/2 -translate-y-1/2">
      Tooltip on right
      <div className="absolute w-2 h-2 bg-gray-900 rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>
  
  <div className="relative inline-flex group">
    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
      Bottom
    </button>
    <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 top-full mt-2 left-1/2 -translate-x-1/2">
      Tooltip on bottom
      <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
    </div>
  </div>
  
  <div className="relative inline-flex group">
    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
      Left
    </button>
    <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 right-full mr-2 top-1/2 -translate-y-1/2">
      Tooltip on left
      <div className="absolute w-2 h-2 bg-gray-900 rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>
</div>`}
          preview={
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="relative inline-flex group">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Top
                </button>
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2">
                  Tooltip on top
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>

              <div className="relative inline-flex group">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Right
                </button>
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 left-full ml-2 top-1/2 -translate-y-1/2">
                  Tooltip on right
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>

              <div className="relative inline-flex group">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Bottom
                </button>
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 top-full mt-2 left-1/2 -translate-x-1/2">
                  Tooltip on bottom
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>

              <div className="relative inline-flex group">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Left
                </button>
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 right-full mr-2 top-1/2 -translate-y-1/2">
                  Tooltip on left
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This tooltip component is implemented using pure Tailwind CSS classes. The implementation uses CSS
            transitions and the group hover functionality to show and hide the tooltip.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            For a more interactive tooltip with JavaScript control, you can create a reusable component:
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <pre className="text-sm overflow-auto">
              {`// components/ui/tooltip.tsx
"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  className?: string
}

export function Tooltip({ content, children, side = "top", className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const positions = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
  }

  const arrowPositions = {
    top: "absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2",
    right: "absolute w-2 h-2 bg-gray-900 rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "absolute w-2 h-2 bg-gray-900 rotate-45 -top-1 left-1/2 -translate-x-1/2",
    left: "absolute w-2 h-2 bg-gray-900 rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  }

  return (
    <div className="relative inline-flex">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div 
          className={cn(
            "absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm",
            positions[side],
            className
          )}
        >
          {content}
          <div className={arrowPositions[side]}></div>
        </div>
      )}
    </div>
  )
}

// Usage example:
// <Tooltip content="This is a tooltip">
//   <Button>Hover me</Button>
// </Tooltip>
`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

