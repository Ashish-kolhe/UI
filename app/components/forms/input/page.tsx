import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Input - UI Library",
  description: "Input component for text entry",
}

export default function InputPage() {
  return (
    <div className="container py-10 md:py-16">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Input</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">An input component for collecting user text data.</p>
        </div>

        <ComponentPreview
          title="Default Input"
          description="The default input style."
          code={`<input 
  type="text" 
  placeholder="Enter your name" 
  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
/>`}
          preview={
            <input
              type="text"
              placeholder="Enter your name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          }
        />

        <ComponentPreview
          title="Input with Label"
          description="Input with an associated label."
          code={`<div class="grid w-full max-w-sm items-center gap-1.5">
  <label 
    for="email" 
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Email
  </label>
  <input 
    type="email" 
    id="email" 
    placeholder="Enter your email" 
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  />
</div>`}
          preview={
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Input"
          description="Input in a disabled state."
          code={`<input 
  type="text" 
  placeholder="Disabled input" 
  disabled 
  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
/>`}
          preview={
            <input
              type="text"
              placeholder="Disabled input"
              disabled
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          }
        />

        <ComponentPreview
          title="Input with Icon"
          description="Input with an icon for additional context."
          code={`<div class="relative w-full max-w-sm">
  <input 
    type="text" 
    placeholder="Search..." 
    class="flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
</div>`}
          preview={
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This input component is implemented using pure Tailwind CSS classes. You can copy and paste the HTML
            directly into your project.
          </p>
          <p className="mt-2">The input styles include:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Base styles for all inputs</li>
            <li>Focus states with ring styling</li>
            <li>Disabled state styling</li>
            <li>File input styling</li>
            <li>Placeholder text styling</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use these inputs, simply copy the HTML with the Tailwind classes. You can customize the appearance by
            modifying the classes.
          </p>
        </div>
      </div>
    </div>
  )
}
