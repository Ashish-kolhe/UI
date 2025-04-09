import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Stepper } from "@/components/ui/stepper"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Stepper - UiforU",
  description: "Stepper component for multi-step processes",
}

export default function StepperPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Stepper</h1>
          <p className="text-lg text-muted-foreground">
            A stepper component for displaying progress through a sequence of steps.
          </p>
        </div>

        <ComponentPreview
          title="Horizontal Stepper"
          description="A horizontal stepper showing progress through a multi-step process."
          code={`<nav aria-label="Progress" className="w-full">
  <ol className="flex items-center justify-between">
    <li className="relative flex items-start">
      <div className="flex items-center">
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div className="absolute top-4 left-4 -ml-px h-0.5 w-full bg-blue-600"></div>
      </div>
      <div className="ml-4 mt-0.5 min-w-0">
        <h3 className="text-sm font-medium text-gray-900">Cart</h3>
      </div>
    </li>
    
    <li className="relative flex items-start">
      <div className="flex items-center">
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white">
          <span className="text-sm font-medium text-blue-600">2</span>
        </div>
        <div className="absolute top-4 left-4 -ml-px h-0.5 w-full bg-gray-300"></div>
      </div>
      <div className="ml-4 mt-0.5 min-w-0">
        <h3 className="text-sm font-medium text-gray-900">Shipping</h3>
      </div>
    </li>
    
    <li className="relative flex items-start">
      <div className="flex items-center">
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
          <span className="text-sm font-medium text-gray-500">3</span>
        </div>
      </div>
      <div className="ml-4 mt-0.5 min-w-0">
        <h3 className="text-sm font-medium text-gray-500">Payment</h3>
      </div>
    </li>
  </ol>
</nav>`}
          preview={
            <Stepper
              steps={[
                { title: "Cart", status: "completed" },
                { title: "Shipping", status: "current" },
                { title: "Payment", status: "upcoming" },
              ]}
              orientation="horizontal"
              className="w-full"
            />
          }
        />

        <ComponentPreview
          title="Vertical Stepper"
          description="A vertical stepper with descriptions for each step."
          code={`<nav aria-label="Progress" className="w-full">
  <ol className="space-y-6">
    <li className="relative flex items-start">
      <div className="flex items-center">
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-blue-600"></div>
      </div>
      <div className="ml-4 mt-0.5 min-w-0">
        <h3 className="text-sm font-medium text-gray-900">Application submitted</h3>
        <p className="text-sm text-gray-500">Your application has been received and is being reviewed.</p>
      </div>
    </li>
    
    <li className="relative flex items-start">
      <div className="flex items-center">
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-blue-600"></div>
      </div>
      <div className="ml-4 mt-0.5 min-w-0">
        <h3 className="text-sm font-medium text-gray-900">Interview scheduled</h3>
        <p className="text-sm text-gray-500">You have been shortlisted for an interview.</p>
      </div>
    </li>
    
    <li className="relative flex items-start">
      <div className="flex items-center">
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white">
          <span className="text-sm font-medium text-blue-600">3</span>
        </div>
        <div className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-300"></div>
      </div>
      <div className="ml-4 mt-0.5 min-w-0">
        <h3 className="text-sm font-medium text-gray-900">Interview completed</h3>
        <p className="text-sm text-gray-500">Your interview has been completed and is being evaluated.</p>
      </div>
    </li>
    
    <li className="relative flex items-start">
      <div className="flex items-center">
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
          <span className="text-sm font-medium text-gray-500">4</span>
        </div>
      </div>
      <div className="ml-4 mt-0.5 min-w-0">
        <h3 className="text-sm font-medium text-gray-500">Decision</h3>
        <p className="text-sm text-gray-500">A final decision will be made and communicated.</p>
      </div>
    </li>
  </ol>
</nav>`}
          preview={
            <Stepper
              steps={[
                {
                  title: "Application submitted",
                  description: "Your application has been received and is being reviewed.",
                  status: "completed",
                },
                {
                  title: "Interview scheduled",
                  description: "You have been shortlisted for an interview.",
                  status: "completed",
                },
                {
                  title: "Interview completed",
                  description: "Your interview has been completed and is being evaluated.",
                  status: "current",
                },
                {
                  title: "Decision",
                  description: "A final decision will be made and communicated.",
                  status: "upcoming",
                },
              ]}
              orientation="vertical"
              className="w-full"
            />
          }
        />

        <ComponentPreview
          title="Compact Stepper"
          description="A compact horizontal stepper with minimal content."
          code={`<nav aria-label="Progress" className="w-full">
  <ol className="flex items-center justify-between">
    <li className="relative flex-1">
      <div className="flex items-center justify-center">
        <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div className="absolute top-3 left-0 h-0.5 w-full bg-blue-600"></div>
      </div>
      <div className="mt-2 text-center">
        <span className="text-xs font-medium text-blue-600">Step 1</span>
      </div>
    </li>
    
    <li className="relative flex-1">
      <div className="flex items-center justify-center">
        <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div className="absolute top-3 left-0 h-0.5 w-full bg-blue-600"></div>
      </div>
      <div className="mt-2 text-center">
        <span className="text-xs font-medium text-blue-600">Step 2</span>
      </div>
    </li>
    
    <li className="relative flex-1">
      <div className="flex items-center justify-center">
        <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-600 bg-white">
          <span className="text-xs font-medium text-blue-600">3</span>
        </div>
        <div className="absolute top-3 left-0 h-0.5 w-full bg-gray-300"></div>
      </div>
      <div className="mt-2 text-center">
        <span className="text-xs font-medium text-blue-600">Step 3</span>
      </div>
    </li>
    
    <li className="relative flex-1">
      <div className="flex items-center justify-center">
        <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
          <span className="text-xs font-medium text-gray-500">4</span>
        </div>
      </div>
      <div className="mt-2 text-center">
        <span className="text-xs font-medium text-gray-500">Step 4</span>
      </div>
    </li>
  </ol>
</nav>`}
          preview={
            <div className="w-full">
              <nav aria-label="Progress" className="w-full">
                <ol className="flex items-center justify-between">
                  <li className="relative flex-1">
                    <div className="flex items-center justify-center">
                      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute top-3 left-0 h-0.5 w-full bg-blue-600"></div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs font-medium text-blue-600">Step 1</span>
                    </div>
                  </li>

                  <li className="relative flex-1">
                    <div className="flex items-center justify-center">
                      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute top-3 left-0 h-0.5 w-full bg-blue-600"></div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs font-medium text-blue-600">Step 2</span>
                    </div>
                  </li>

                  <li className="relative flex-1">
                    <div className="flex items-center justify-center">
                      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-600 bg-white">
                        <span className="text-xs font-medium text-blue-600">3</span>
                      </div>
                      <div className="absolute top-3 left-0 h-0.5 w-full bg-gray-300"></div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs font-medium text-blue-600">Step 3</span>
                    </div>
                  </li>

                  <li className="relative flex-1">
                    <div className="flex items-center justify-center">
                      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                        <span className="text-xs font-medium text-gray-500">4</span>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs font-medium text-gray-500">Step 4</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          }
        />
      </div>
    </div>
  )
}
