import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react"

export const metadata: Metadata = {
  title: "Button Group - UI Library",
  description: "Button group component for related actions",
}

export default function ButtonGroupPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Button Group</h1>
          <p className="text-lg text-muted-foreground">A button group component for displaying related actions.</p>
        </div>

        <ComponentPreview
          title="Default Button Group"
          description="The default button group style."
          code={`<div className="inline-flex rounded-md shadow-sm" role="group">
  <Button variant="outline" className="rounded-r-none">
    Profile
  </Button>
  <Button variant="outline" className="rounded-none border-x-0">
    Settings
  </Button>
  <Button variant="outline" className="rounded-l-none">
    Messages
  </Button>
</div>`}
          preview={
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button variant="outline" className="rounded-r-none">
                Profile
              </Button>
              <Button variant="outline" className="rounded-none border-x-0">
                Settings
              </Button>
              <Button variant="outline" className="rounded-l-none">
                Messages
              </Button>
            </div>
          }
        />

        <ComponentPreview
          title="Icon Button Group"
          description="Button group with icons for text formatting."
          code={`<div className="inline-flex rounded-md shadow-sm" role="group">
  <Button variant="outline" size="icon" className="rounded-r-none">
    <Bold className="h-4 w-4" />
    <span className="sr-only">Bold</span>
  </Button>
  <Button variant="outline" size="icon" className="rounded-none border-x-0">
    <Italic className="h-4 w-4" />
    <span className="sr-only">Italic</span>
  </Button>
  <Button variant="outline" size="icon" className="rounded-l-none">
    <Underline className="h-4 w-4" />
    <span className="sr-only">Underline</span>
  </Button>
</div>`}
          preview={
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <Bold className="h-4 w-4" />
                <span className="sr-only">Bold</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-none border-x-0">
                <Italic className="h-4 w-4" />
                <span className="sr-only">Italic</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-l-none">
                <Underline className="h-4 w-4" />
                <span className="sr-only">Underline</span>
              </Button>
            </div>
          }
        />

        <ComponentPreview
          title="Text Alignment Button Group"
          description="Button group for text alignment options."
          code={`<div className="inline-flex rounded-md shadow-sm" role="group">
  <Button variant="outline" size="icon" className="rounded-r-none">
    <AlignLeft className="h-4 w-4" />
    <span className="sr-only">Align left</span>
  </Button>
  <Button variant="outline" size="icon" className="rounded-none border-x-0">
    <AlignCenter className="h-4 w-4" />
    <span className="sr-only">Align center</span>
  </Button>
  <Button variant="outline" size="icon" className="rounded-none border-x-0">
    <AlignRight className="h-4 w-4" />
    <span className="sr-only">Align right</span>
  </Button>
  <Button variant="outline" size="icon" className="rounded-l-none">
    <AlignJustify className="h-4 w-4" />
    <span className="sr-only">Justify</span>
  </Button>
</div>`}
          preview={
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <AlignLeft className="h-4 w-4" />
                <span className="sr-only">Align left</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-none border-x-0">
                <AlignCenter className="h-4 w-4" />
                <span className="sr-only">Align center</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-none border-x-0">
                <AlignRight className="h-4 w-4" />
                <span className="sr-only">Align right</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-l-none">
                <AlignJustify className="h-4 w-4" />
                <span className="sr-only">Justify</span>
              </Button>
            </div>
          }
        />

        <ComponentPreview
          title="Segmented Control"
          description="Button group as a segmented control."
          code={`<div className="inline-flex rounded-md shadow-sm" role="group">
  <Button className="rounded-r-none bg-primary/10 text-primary hover:bg-primary/20">
    Daily
  </Button>
  <Button variant="outline" className="rounded-none border-x-0">
    Weekly
  </Button>
  <Button variant="outline" className="rounded-l-none">
    Monthly
  </Button>
</div>`}
          preview={
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button className="rounded-r-none bg-primary/10 text-primary hover:bg-primary/20">Daily</Button>
              <Button variant="outline" className="rounded-none border-x-0">
                Weekly
              </Button>
              <Button variant="outline" className="rounded-l-none">
                Monthly
              </Button>
            </div>
          }
        />
      </div>
    </div>
  )
}

