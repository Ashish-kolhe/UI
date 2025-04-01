import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Progress - UI Library",
  description: "Progress component for showing completion status",
}

export default function ProgressPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
          <p className="text-lg text-muted-foreground">A progress component for displaying completion status.</p>
        </div>

        <ComponentPreview
          title="Default Progress"
          description="The default progress style."
          code={`<Progress value={33} />`}
          preview={<Progress value={33} />}
        />

        <ComponentPreview
          title="Progress Values"
          description="Progress bars with different values."
          code={`<div className="space-y-4">
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="text-sm">0%</span>
      <span className="text-sm">0/100</span>
    </div>
    <Progress value={0} />
  </div>
  
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="text-sm">25%</span>
      <span className="text-sm">25/100</span>
    </div>
    <Progress value={25} />
  </div>
  
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="text-sm">50%</span>
      <span className="text-sm">50/100</span>
    </div>
    <Progress value={50} />
  </div>
  
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="text-sm">75%</span>
      <span className="text-sm">75/100</span>
    </div>
    <Progress value={75} />
  </div>
  
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="text-sm">100%</span>
      <span className="text-sm">100/100</span>
    </div>
    <Progress value={100} />
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">0%</span>
                  <span className="text-sm">0/100</span>
                </div>
                <Progress value={0} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">25%</span>
                  <span className="text-sm">25/100</span>
                </div>
                <Progress value={25} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">50%</span>
                  <span className="text-sm">50/100</span>
                </div>
                <Progress value={50} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">75%</span>
                  <span className="text-sm">75/100</span>
                </div>
                <Progress value={75} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">100%</span>
                  <span className="text-sm">100/100</span>
                </div>
                <Progress value={100} />
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Custom Colored Progress"
          description="Progress bars with custom colors."
          code={`<div className="space-y-4">
  <Progress value={25} className="bg-blue-100 [&>div]:bg-blue-500" />
  <Progress value={50} className="bg-green-100 [&>div]:bg-green-500" />
  <Progress value={75} className="bg-yellow-100 [&>div]:bg-yellow-500" />
  <Progress value={100} className="bg-red-100 [&>div]:bg-red-500" />
</div>`}
          preview={
            <div className="space-y-4">
              <Progress value={25} className="bg-blue-100 [&>div]:bg-blue-500" />
              <Progress value={50} className="bg-green-100 [&>div]:bg-green-500" />
              <Progress value={75} className="bg-yellow-100 [&>div]:bg-yellow-500" />
              <Progress value={100} className="bg-red-100 [&>div]:bg-red-500" />
            </div>
          }
        />
      </div>
    </div>
  )
}

