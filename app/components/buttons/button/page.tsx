import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Button - UI Library",
  description: "Button component with multiple variants",
}

export default function ButtonPage() {
  return (
    <div className="container py-10 md:py-16">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Button</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A button component with multiple variants and sizes.
          </p>
        </div>

        <ComponentPreview
          title="Default Button"
          description="The default button style."
          code={`<Button>Default Button</Button>`}
          preview={<Button>Default Button</Button>}
        />

        <ComponentPreview
          title="Button Variants"
          description="Buttons come in different variants to indicate different actions."
          code={`<div className="flex flex-wrap gap-4">
  <Button variant="default">Default</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`}
          preview={
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          }
        />

        <ComponentPreview
          title="Button Sizes"
          description="Buttons come in different sizes."
          code={`<div className="flex flex-wrap items-center gap-4">
  <Button size="default">Default</Button>
  <Button size="sm">Small</Button>
  <Button size="lg">Large</Button>
  <Button size="icon"><span className="h-4 w-4">+</span></Button>
</div>`}
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <span className="h-4 w-4">+</span>
              </Button>
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Button"
          description="Buttons can be disabled."
          code={`<Button disabled>Disabled</Button>`}
          preview={<Button disabled>Disabled</Button>}
        />
      </div>
    </div>
  )
}

