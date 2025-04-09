import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Loading Button - UI Library",
  description: "Loading button component for async actions",
}

export default function LoadingButtonPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Loading Button</h1>
          <p className="text-lg text-muted-foreground">
            A loading button component for displaying loading state during async actions.
          </p>
        </div>

        <ComponentPreview
          title="Default Loading Button"
          description="The default loading button style."
          code={`<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
          preview={
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          }
        />

        <ComponentPreview
          title="Loading Button Variants"
          description="Loading buttons in different variants."
          code={`<div className="flex flex-wrap gap-4">
  <Button disabled>
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    Default
  </Button>
  <Button disabled variant="secondary">
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    Secondary
  </Button>
  <Button disabled variant="outline">
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    Outline
  </Button>
  <Button disabled variant="destructive">
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    Destructive
  </Button>
</div>`}
          preview={
            <div className="flex flex-wrap gap-4">
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Default
              </Button>
              <Button disabled variant="secondary">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Secondary
              </Button>
              <Button disabled variant="outline">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Outline
              </Button>
              <Button disabled variant="destructive">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Destructive
              </Button>
            </div>
          }
        />

        <ComponentPreview
          title="Loading Button Sizes"
          description="Loading buttons in different sizes."
          code={`<div className="flex flex-wrap items-center gap-4">
  <Button disabled size="sm">
    <Loader2 className="mr-2 h-3 w-3 animate-spin" />
    Small
  </Button>
  <Button disabled>
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    Default
  </Button>
  <Button disabled size="lg">
    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
    Large
  </Button>
</div>`}
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button disabled size="sm">
                <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                Small
              </Button>
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Default
              </Button>
              <Button disabled size="lg">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Large
              </Button>
            </div>
          }
        />

        <ComponentPreview
          title="Icon Only Loading Button"
          description="Loading button with only an icon."
          code={`<div className="flex flex-wrap gap-4">
  <Button disabled size="icon">
    <Loader2 className="h-4 w-4 animate-spin" />
    <span className="sr-only">Loading</span>
  </Button>
  <Button disabled variant="secondary" size="icon">
    <Loader2 className="h-4 w-4 animate-spin" />
    <span className="sr-only">Loading</span>
  </Button>
  <Button disabled variant="outline" size="icon">
    <Loader2 className="h-4 w-4 animate-spin" />
    <span className="sr-only">Loading</span>
  </Button>
</div>`}
          preview={
            <div className="flex flex-wrap gap-4">
              <Button disabled size="icon">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="sr-only">Loading</span>
              </Button>
              <Button disabled variant="secondary" size="icon">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="sr-only">Loading</span>
              </Button>
              <Button disabled variant="outline" size="icon">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="sr-only">Loading</span>
              </Button>
            </div>
          }
        />
      </div>
    </div>
  )
}
