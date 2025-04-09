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
          code={`<div class="flex items-center space-x-2">
  <div class="relative flex items-center">
    <input 
      type="checkbox" 
      id="terms" 
      class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
    />
    <div class="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="h-3 w-3 text-white"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </div>
  <label
    for="terms"
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
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
          code={`<div class="space-y-4">
  <div class="flex items-center space-x-2">
    <div class="relative flex items-center">
      <input 
        type="checkbox" 
        id="option1" 
        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
      />
      <div class="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="h-3 w-3 text-white"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
    <label
      for="option1"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Email notifications
    </label>
  </div>
  <div class="flex items-center space-x-2">
    <div class="relative flex items-center">
      <input 
        type="checkbox" 
        id="option2" 
        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
      />
      <div class="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="h-3 w-3 text-white"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
    <label
      for="option2"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      SMS notifications
    </label>
  </div>
  <div class="flex items-center space-x-2">
    <div class="relative flex items-center">
      <input 
        type="checkbox" 
        id="option3" 
        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
      />
      <div class="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="h-3 w-3 text-white"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
    <label
      for="option3"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
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
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
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
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
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
          code={`<div class="flex items-center space-x-2">
  <div class="relative flex items-center">
    <input 
      type="checkbox" 
      id="disabled" 
      disabled
      class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
    />
    <div class="absolute left-0 top-0 h-4 w-4 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="h-3 w-3 text-white"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </div>
  <label
    for="disabled"
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground"
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
          <p className="mt-2">The checkbox includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Base styles for the checkbox input</li>
            <li>An SVG checkmark that appears when checked</li>
            <li>Focus and disabled states</li>
            <li>Associated label styling</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML with the Tailwind classes. You can customize the
            appearance by modifying the classes.
          </p>
        </div>
      </div>
    </div>
  )
}
