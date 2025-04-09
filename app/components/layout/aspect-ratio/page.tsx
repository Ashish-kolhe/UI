import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export const metadata: Metadata = {
  title: "Aspect Ratio - UI Library",
  description: "Aspect Ratio component for maintaining proportional dimensions",
}

export default function AspectRatioPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Aspect Ratio</h1>
          <p className="text-lg text-muted-foreground">
            An aspect ratio component for maintaining proportional dimensions of content.
          </p>
        </div>

        <ComponentPreview
          title="Square (1:1)"
          description="Content with a 1:1 aspect ratio."
          code={`<div className="w-[300px]">
  <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
    <img
      src="/placeholder.svg?height=300&width=300"
      alt="Square placeholder"
      className="object-cover"
    />
  </AspectRatio>
</div>`}
          preview={
            <div className="w-[300px]">
              <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
                <img src="/placeholder.svg?height=300&width=300" alt="Square placeholder" className="object-cover" />
              </AspectRatio>
            </div>
          }
        />

        <ComponentPreview
          title="16:9 Ratio"
          description="Content with a 16:9 aspect ratio, commonly used for videos."
          code={`<div className="w-[300px]">
  <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
    <img
      src="/placeholder.svg?height=169&width=300"
      alt="16:9 placeholder"
      className="object-cover"
    />
  </AspectRatio>
</div>`}
          preview={
            <div className="w-[300px]">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                <img src="/placeholder.svg?height=169&width=300" alt="16:9 placeholder" className="object-cover" />
              </AspectRatio>
            </div>
          }
        />

        <ComponentPreview
          title="4:3 Ratio"
          description="Content with a 4:3 aspect ratio."
          code={`<div className="w-[300px]">
  <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
    <img
      src="/placeholder.svg?height=225&width=300"
      alt="4:3 placeholder"
      className="object-cover"
    />
  </AspectRatio>
</div>`}
          preview={
            <div className="w-[300px]">
              <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
                <img src="/placeholder.svg?height=225&width=300" alt="4:3 placeholder" className="object-cover" />
              </AspectRatio>
            </div>
          }
        />

        <ComponentPreview
          title="Multiple Aspect Ratios"
          description="Different aspect ratios in a responsive grid."
          code={`<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div>
    <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
      <div className="flex items-center justify-center h-full">1:1</div>
    </AspectRatio>
  </div>
  <div>
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
      <div className="flex items-center justify-center h-full">16:9</div>
    </AspectRatio>
  </div>
  <div>
    <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
      <div className="flex items-center justify-center h-full">4:3</div>
    </AspectRatio>
  </div>
</div>`}
          preview={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
                  <div className="flex items-center justify-center h-full">1:1</div>
                </AspectRatio>
              </div>
              <div>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                  <div className="flex items-center justify-center h-full">16:9</div>
                </AspectRatio>
              </div>
              <div>
                <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
                  <div className="flex items-center justify-center h-full">4:3</div>
                </AspectRatio>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}
