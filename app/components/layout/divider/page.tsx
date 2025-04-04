import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Divider - UI Library",
  description: "Divider component for separating content",
}

export default function DividerPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Divider</h1>
          <p className="text-lg text-muted-foreground">A divider component for visually separating content.</p>
        </div>

        <ComponentPreview
          title="Horizontal Divider"
          description="The default horizontal divider."
          code={`<div className="space-y-4">
  <div>Content above the divider</div>
  <div className="h-[1px] w-full bg-border"></div>
  <div>Content below the divider</div>
</div>`}
          preview={
            <div className="space-y-4">
              <div>Content above the divider</div>
              <div className="h-[1px] w-full bg-border"></div>
              <div>Content below the divider</div>
            </div>
          }
        />

        <ComponentPreview
          title="Vertical Divider"
          description="A vertical divider for separating inline content."
          code={`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Content left</div>
  <div className="h-full w-[1px] bg-border"></div>
  <div>Content middle</div>
  <div className="h-full w-[1px] bg-border"></div>
  <div>Content right</div>
</div>`}
          preview={
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Content left</div>
              <div className="h-full w-[1px] bg-border"></div>
              <div>Content middle</div>
              <div className="h-full w-[1px] bg-border"></div>
              <div>Content right</div>
            </div>
          }
        />

        <ComponentPreview
          title="Divider with Label"
          description="Divider with a centered label."
          code={`<div className="relative">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full h-[1px] bg-border"></div>
  </div>
  <div className="relative flex justify-center text-xs uppercase">
    <span className="bg-background px-2 text-muted-foreground">
      Or continue with
    </span>
  </div>
</div>`}
          preview={
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-[1px] bg-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Styled Dividers"
          description="Dividers with custom styling."
          code={`<div className="space-y-8">
  <div className="h-[2px] w-full bg-primary/50"></div>

  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent"></div>

  <div className="flex items-center space-x-2">
    <div className="h-[1px] w-full bg-border"></div>
    <div className="text-muted-foreground">●</div>
    <div className="h-[1px] w-full bg-border"></div>
  </div>

  <div className="h-0 w-full border-t-2 border-dashed border-muted"></div>
</div>`}
          preview={
            <div className="space-y-8">
              <div className="h-[2px] w-full bg-primary/50"></div>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent"></div>

              <div className="flex items-center space-x-2">
                <div className="h-[1px] w-full bg-border"></div>
                <div className="text-muted-foreground">●</div>
                <div className="h-[1px] w-full bg-border"></div>
              </div>

              <div className="h-0 w-full border-t-2 border-dashed border-muted"></div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This divider component is implemented using pure Tailwind CSS classes. It's a simple component that can be
            used to visually separate content.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, you can either copy the Tailwind classes directly or create a
            reusable component.
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <pre className="text-sm overflow-auto">
              {`// components/ui/separator.tsx
import React from "react"
import { cn } from "@/lib/utils"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className,
        )}
        {...props}
        role={decorative ? "none" : "separator"}
        aria-orientation={decorative ? undefined : orientation}
      />
    )
  },
)
Separator.displayName = "Separator"

export { Separator }`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

