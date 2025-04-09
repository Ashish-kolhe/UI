import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

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
          code={`<div class="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
  <div class="h-full w-[33%] flex-1 bg-primary transition-all" style="transform-origin: left"></div>
</div>`}
          preview={
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full w-[33%] flex-1 bg-primary transition-all"
                style={{ transformOrigin: "left" }}
              ></div>
            </div>
          }
        />

        <ComponentPreview
          title="Progress Values"
          description="Progress bars with different values."
          code={`<div class="space-y-4">
  <div class="space-y-2">
    <div class="flex justify-between">
      <span class="text-sm">0%</span>
      <span class="text-sm">0/100</span>
    </div>
    <div class="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
      <div class="h-full w-[0%] flex-1 bg-primary transition-all" style="transform-origin: left"></div>
    </div>
  </div>

  <div class="space-y-2">
    <div class="flex justify-between">
      <span class="text-sm">25%</span>
      <span class="text-sm">25/100</span>
    </div>
    <div class="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
      <div class="h-full w-[25%] flex-1 bg-primary transition-all" style="transform-origin: left"></div>
    </div>
  </div>

  <div class="space-y-2">
    <div class="flex justify-between">
      <span class="text-sm">50%</span>
      <span class="text-sm">50/100</span>
    </div>
    <div class="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
      <div class="h-full w-[50%] flex-1 bg-primary transition-all" style="transform-origin: left"></div>
    </div>
  </div>

  <div class="space-y-2">
    <div class="flex justify-between">
      <span class="text-sm">75%</span>
      <span class="text-sm">75/100</span>
    </div>
    <div class="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
      <div class="h-full w-[75%] flex-1 bg-primary transition-all" style="transform-origin: left"></div>
    </div>
  </div>

  <div class="space-y-2">
    <div class="flex justify-between">
      <span class="text-sm">100%</span>
      <span class="text-sm">100/100</span>
    </div>
    <div class="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
      <div class="h-full w-[100%] flex-1 bg-primary transition-all" style="transform-origin: left"></div>
    </div>
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">0%</span>
                  <span className="text-sm">0/100</span>
                </div>
                <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full w-[0%] flex-1 bg-primary transition-all"
                    style={{ transformOrigin: "left" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">25%</span>
                  <span className="text-sm">25/100</span>
                </div>
                <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full w-[25%] flex-1 bg-primary transition-all"
                    style={{ transformOrigin: "left" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">50%</span>
                  <span className="text-sm">50/100</span>
                </div>
                <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full w-[50%] flex-1 bg-primary transition-all"
                    style={{ transformOrigin: "left" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">75%</span>
                  <span className="text-sm">75/100</span>
                </div>
                <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full w-[75%] flex-1 bg-primary transition-all"
                    style={{ transformOrigin: "left" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">100%</span>
                  <span className="text-sm">100/100</span>
                </div>
                <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full w-[100%] flex-1 bg-primary transition-all"
                    style={{ transformOrigin: "left" }}
                  ></div>
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Custom Colored Progress"
          description="Progress bars with custom colors."
          code={`<div class="space-y-4">
  <div class="relative h-4 w-full overflow-hidden rounded-full bg-blue-100">
    <div class="h-full w-[25%] flex-1 bg-blue-500 transition-all" style="transform-origin: left"></div>
  </div>
  <div class="relative h-4 w-full overflow-hidden rounded-full bg-green-100">
    <div class="h-full w-[50%] flex-1 bg-green-500 transition-all" style="transform-origin: left"></div>
  </div>
  <div class="relative h-4 w-full overflow-hidden rounded-full bg-yellow-100">
    <div class="h-full w-[75%] flex-1 bg-yellow-500 transition-all" style="transform-origin: left"></div>
  </div>
  <div class="relative h-4 w-full overflow-hidden rounded-full bg-red-100">
    <div class="h-full w-[100%] flex-1 bg-red-500 transition-all" style="transform-origin: left"></div>
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-blue-100">
                <div
                  className="h-full w-[25%] flex-1 bg-blue-500 transition-all"
                  style={{ transformOrigin: "left" }}
                ></div>
              </div>
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-green-100">
                <div
                  className="h-full w-[50%] flex-1 bg-green-500 transition-all"
                  style={{ transformOrigin: "left" }}
                ></div>
              </div>
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-yellow-100">
                <div
                  className="h-full w-[75%] flex-1 bg-yellow-500 transition-all"
                  style={{ transformOrigin: "left" }}
                ></div>
              </div>
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-red-100">
                <div
                  className="h-full w-[100%] flex-1 bg-red-500 transition-all"
                  style={{ transformOrigin: "left" }}
                ></div>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This progress component is implemented using pure HTML and Tailwind CSS classes. It provides a way to
            display completion status.
          </p>
          <p className="mt-2">The progress includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>A container with rounded corners</li>
            <li>A fill element that represents the progress value</li>
            <li>Transition effects for smooth animations</li>
            <li>Support for custom colors</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML with the Tailwind classes. You can customize the
            appearance by modifying the classes.
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <p className="text-sm font-medium mb-2">For a more advanced implementation, consider:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Adding JavaScript to animate the progress value</li>
              <li>Implementing indeterminate progress states</li>
              <li>Adding ARIA attributes for accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
