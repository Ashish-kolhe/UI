import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Grid - UI Library",
  description: "Grid layout component for responsive designs",
}

export default function GridPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Grid</h1>
          <p className="text-lg text-muted-foreground">A grid layout component for creating responsive designs.</p>
        </div>

        <ComponentPreview
          title="Basic Grid"
          description="A simple responsive grid layout."
          code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-muted rounded-lg p-4 text-center">1</div>
  <div className="bg-muted rounded-lg p-4 text-center">2</div>
  <div className="bg-muted rounded-lg p-4 text-center">3</div>
  <div className="bg-muted rounded-lg p-4 text-center">4</div>
  <div className="bg-muted rounded-lg p-4 text-center">5</div>
  <div className="bg-muted rounded-lg p-4 text-center">6</div>
</div>`}
          preview={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted rounded-lg p-4 text-center">1</div>
              <div className="bg-muted rounded-lg p-4 text-center">2</div>
              <div className="bg-muted rounded-lg p-4 text-center">3</div>
              <div className="bg-muted rounded-lg p-4 text-center">4</div>
              <div className="bg-muted rounded-lg p-4 text-center">5</div>
              <div className="bg-muted rounded-lg p-4 text-center">6</div>
            </div>
          }
        />

        <ComponentPreview
          title="Grid with Column Spans"
          description="Grid with items spanning multiple columns."
          code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="bg-muted rounded-lg p-4 text-center md:col-span-2">Span 2</div>
  <div className="bg-muted rounded-lg p-4 text-center">1</div>
  <div className="bg-muted rounded-lg p-4 text-center">1</div>
  <div className="bg-muted rounded-lg p-4 text-center md:col-span-2">Span 2</div>
</div>`}
          preview={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted rounded-lg p-4 text-center md:col-span-2">Span 2</div>
              <div className="bg-muted rounded-lg p-4 text-center">1</div>
              <div className="bg-muted rounded-lg p-4 text-center">1</div>
              <div className="bg-muted rounded-lg p-4 text-center md:col-span-2">Span 2</div>
            </div>
          }
        />

        <ComponentPreview
          title="Grid with Row Spans"
          description="Grid with items spanning multiple rows."
          code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[300px]">
  <div className="bg-muted rounded-lg p-4 text-center md:row-span-2">Row Span 2</div>
  <div className="bg-muted rounded-lg p-4 text-center">1</div>
  <div className="bg-muted rounded-lg p-4 text-center">1</div>
  <div className="bg-muted rounded-lg p-4 text-center">1</div>
  <div className="bg-muted rounded-lg p-4 text-center md:row-span-2">Row Span 2</div>
</div>`}
          preview={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[300px]">
              <div className="bg-muted rounded-lg p-4 text-center md:row-span-2">Row Span 2</div>
              <div className="bg-muted rounded-lg p-4 text-center">1</div>
              <div className="bg-muted rounded-lg p-4 text-center">1</div>
              <div className="bg-muted rounded-lg p-4 text-center">1</div>
              <div className="bg-muted rounded-lg p-4 text-center md:row-span-2">Row Span 2</div>
            </div>
          }
        />

        <ComponentPreview
          title="Auto-fit Grid"
          description="Grid that automatically adjusts columns based on available space."
          code={`<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  <div className="bg-muted rounded-lg p-4 text-center">1</div>
  <div className="bg-muted rounded-lg p-4 text-center">2</div>
  <div className="bg-muted rounded-lg p-4 text-center">3</div>
  <div className="bg-muted rounded-lg p-4 text-center">4</div>
  <div className="bg-muted rounded-lg p-4 text-center">5</div>
  <div className="bg-muted rounded-lg p-4 text-center">6</div>
  <div className="bg-muted rounded-lg p-4 text-center">7</div>
  <div className="bg-muted rounded-lg p-4 text-center">8</div>
  <div className="bg-muted rounded-lg p-4 text-center">9</div>
  <div className="bg-muted rounded-lg p-4 text-center">10</div>
</div>`}
          preview={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div className="bg-muted rounded-lg p-4 text-center">1</div>
              <div className="bg-muted rounded-lg p-4 text-center">2</div>
              <div className="bg-muted rounded-lg p-4 text-center">3</div>
              <div className="bg-muted rounded-lg p-4 text-center">4</div>
              <div className="bg-muted rounded-lg p-4 text-center">5</div>
              <div className="bg-muted rounded-lg p-4 text-center">6</div>
              <div className="bg-muted rounded-lg p-4 text-center">7</div>
              <div className="bg-muted rounded-lg p-4 text-center">8</div>
              <div className="bg-muted rounded-lg p-4 text-center">9</div>
              <div className="bg-muted rounded-lg p-4 text-center">10</div>
            </div>
          }
        />
      </div>
    </div>
  )
}

