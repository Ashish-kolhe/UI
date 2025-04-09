import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = {
  title: "Skeleton - UI Library",
  description: "Skeleton component for loading states",
}

export default function SkeletonPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Skeleton</h1>
          <p className="text-lg text-muted-foreground">A skeleton component for displaying loading states.</p>
        </div>

        <ComponentPreview
          title="Default Skeleton"
          description="The default skeleton style."
          code={`<Skeleton className="h-4 w-[250px]" />`}
          preview={<Skeleton className="h-4 w-[250px]" />}
        />

        <ComponentPreview
          title="Skeleton Card"
          description="Skeleton for a card loading state."
          code={`<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
          preview={
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Skeleton Profile"
          description="Skeleton for a profile loading state."
          code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
          preview={
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Skeleton Table"
          description="Skeleton for a table loading state."
          code={`<div className="space-y-4">
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[100px]" />
    </div>
    <Skeleton className="h-[1px] w-full" />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[100px]" />
    </div>
    <Skeleton className="h-[1px] w-full" />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[100px]" />
    </div>
    <Skeleton className="h-[1px] w-full" />
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-[1px] w-full" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-[1px] w-full" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-[1px] w-full" />
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}
