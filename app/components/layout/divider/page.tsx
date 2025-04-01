import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Separator } from "@/components/ui/separator"

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
  <Separator />
  <div>Content below the divider</div>
</div>`}
          preview={
            <div className="space-y-4">
              <div>Content above the divider</div>
              <Separator />
              <div>Content below the divider</div>
            </div>
          }
        />

        <ComponentPreview
          title="Vertical Divider"
          description="A vertical divider for separating inline content."
          code={`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Content left</div>
  <Separator orientation="vertical" />
  <div>Content middle</div>
  <Separator orientation="vertical" />
  <div>Content right</div>
</div>`}
          preview={
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Content left</div>
              <Separator orientation="vertical" />
              <div>Content middle</div>
              <Separator orientation="vertical" />
              <div>Content right</div>
            </div>
          }
        />

        <ComponentPreview
          title="Divider with Label"
          description="Divider with a centered label."
          code={`<div className="relative">
  <div className="absolute inset-0 flex items-center">
    <Separator className="w-full" />
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
                <Separator className="w-full" />
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
  <Separator className="bg-primary/50 h-[2px]" />
  
  <Separator className="bg-gradient-to-r from-transparent via-foreground to-transparent h-[1px]" />
  
  <div className="flex items-center space-x-2">
    <Separator className="flex-1" />
    <div className="text-muted-foreground">●</div>
    <Separator className="flex-1" />
  </div>
  
  <Separator className="border-dashed border-t-2 border-muted bg-transparent h-0" />
</div>`}
          preview={
            <div className="space-y-8">
              <Separator className="bg-primary/50 h-[2px]" />

              <Separator className="bg-gradient-to-r from-transparent via-foreground to-transparent h-[1px]" />

              <div className="flex items-center space-x-2">
                <Separator className="flex-1" />
                <div className="text-muted-foreground">●</div>
                <Separator className="flex-1" />
              </div>

              <Separator className="border-dashed border-t-2 border-muted bg-transparent h-0" />
            </div>
          }
        />
      </div>
    </div>
  )
}

