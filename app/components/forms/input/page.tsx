import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
          code={`<Input placeholder="Enter your name" />`}
          preview={<Input placeholder="Enter your name" />}
        />

        <ComponentPreview
          title="Input with Label"
          description="Input with an associated label."
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Enter your email" />
</div>`}
          preview={
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Input"
          description="Input in a disabled state."
          code={`<Input disabled placeholder="Disabled input" />`}
          preview={<Input disabled placeholder="Disabled input" />}
        />

        <ComponentPreview
          title="Input with Icon"
          description="Input with an icon for additional context."
          code={`<div className="relative w-full max-w-sm">
  <Input placeholder="Search..." className="pl-8" />
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
</div>`}
          preview={
            <div className="relative w-full max-w-sm">
              <Input placeholder="Search..." className="pl-8" />
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
      </div>
    </div>
  )
}

