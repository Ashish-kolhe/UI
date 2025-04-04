import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Checkbox - UI Library",
  description: "Checkbox component for multiple selections",
}

export default function CheckboxPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
          <p className="text-lg text-muted-foreground">A checkbox component for multiple selections.</p>
        </div>

        <ComponentPreview
          title="Default Checkbox"
          description="The default checkbox style."
          code={`<div className="flex items-center space-x-2">
  <div className="relative flex items-center">
    <input 
      type="checkbox" 
      id="terms" 
      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
    />
    <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3 text-white"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </div>
  <label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </label>
</div>`}
          preview={
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-white"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          }
        />

        <ComponentPreview
          title="Checkbox Group"
          description="A group of checkboxes for multiple selections."
          code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <div className="relative flex items-center">
      <input 
        type="checkbox" 
        id="option1" 
        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      />
      <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3 text-white"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
    <label
      htmlFor="option1"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Email notifications
    </label>
  </div>
  <div className="flex items-center space-x-2">
    <div className="relative flex items-center">
      <input 
        type="checkbox" 
        id="option2" 
        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      />
      <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3 text-white"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
    <label
      htmlFor="option2"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      SMS notifications
    </label>
  </div>
  <div className="flex items-center space-x-2">
    <div className="relative flex items-center">
      <input 
        type="checkbox" 
        id="option3" 
        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      />
      <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3 text-white"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
    <label
      htmlFor="option3"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Push notifications
    </label>
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="option1"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="option1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email notifications
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="option2"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="option2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  SMS notifications
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="option3"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="option3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Push notifications
                </label>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Checkbox"
          description="Checkbox in a disabled state."
          code={`<div className="flex items-center space-x-2">
  <div className="relative flex items-center">
    <input 
      type="checkbox" 
      id="disabled" 
      disabled
      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
    />
    <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3 text-white"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </div>
  <label
    htmlFor="disabled"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Disabled option
  </label>
</div>`}
          preview={
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="disabled"
                  disabled
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-white"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="disabled"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disabled option
              </label>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This checkbox component is implemented using pure Tailwind CSS classes. The implementation uses a hidden SVG
            icon that appears when the checkbox is checked.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, you can either copy the Tailwind classes directly or create a
            reusable component.
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <pre className="text-sm overflow-auto">
              {`// components/ui/checkbox.tsx
import React from "react"
import { cn } from "@/lib/utils"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          className,
        )}
        {...props}
      />
      <div className="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3 text-white"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

