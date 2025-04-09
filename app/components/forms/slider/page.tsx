import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Slider - UI Library",
  description: "Slider component for selecting values from a range",
}

export default function SliderPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
          <p className="text-lg text-muted-foreground">A slider component for selecting values from a range.</p>
        </div>

        <ComponentPreview
          title="Default Slider"
          description="The default slider style."
          code={`<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />`}
          preview={<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />}
        />

        <ComponentPreview
          title="Slider with Label"
          description="Slider with an associated label and value display."
          code={`<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label htmlFor="volume">Volume</Label>
    <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground">
      50%
    </span>
  </div>
  <Slider id="volume" defaultValue={[50]} max={100} step={1} />
</div>`}
          preview={
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="volume">Volume</Label>
                <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground">
                  50%
                </span>
              </div>
              <Slider id="volume" defaultValue={[50]} max={100} step={1} />
            </div>
          }
        />

        <ComponentPreview
          title="Range Slider"
          description="Slider for selecting a range between two values."
          code={`<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label htmlFor="price-range">Price Range</Label>
    <span className="w-24 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground">
      $25 - $75
    </span>
  </div>
  <Slider id="price-range" defaultValue={[25, 75]} max={100} step={1} />
</div>`}
          preview={
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="price-range">Price Range</Label>
                <span className="w-24 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground">
                  $25 - $75
                </span>
              </div>
              <Slider id="price-range" defaultValue={[25, 75]} max={100} step={1} />
            </div>
          }
        />

        <ComponentPreview
          title="Slider with Steps"
          description="Slider with defined steps and markers."
          code={`<div className="space-y-8">
  <div className="space-y-4">
    <Slider defaultValue={[50]} max={100} step={10} />
    <div className="flex justify-between text-xs text-muted-foreground">
      <span>0</span>
      <span>20</span>
      <span>40</span>
      <span>60</span>
      <span>80</span>
      <span>100</span>
    </div>
  </div>
</div>`}
          preview={
            <div className="space-y-8">
              <div className="space-y-4">
                <Slider defaultValue={[50]} max={100} step={10} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>20</span>
                  <span>40</span>
                  <span>60</span>
                  <span>80</span>
                  <span>100</span>
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Slider"
          description="Slider in a disabled state."
          code={`<Slider defaultValue={[50]} max={100} step={1} disabled />`}
          preview={<Slider defaultValue={[50]} max={100} step={1} disabled />}
        />
      </div>
    </div>
  )
}
