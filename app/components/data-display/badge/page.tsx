import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Badge - UI Library",
  description: "Badge component for status indicators",
}

export default function BadgePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
          <p className="text-lg text-muted-foreground">A badge component for displaying status indicators.</p>
        </div>

        <ComponentPreview
          title="Default Badge"
          description="The default badge style."
          code={`<Badge>Badge</Badge>`}
          preview={<Badge>Badge</Badge>}
        />

        <ComponentPreview
          title="Badge Variants"
          description="Badges in different variants."
          code={`<div className="flex flex-wrap gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
</div>`}
          preview={
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          }
        />

        <ComponentPreview
          title="Status Badges"
          description="Badges used as status indicators."
          code={`<div className="flex flex-wrap gap-2">
  <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
  <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
  <Badge className="bg-red-500 hover:bg-red-600">Error</Badge>
  <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
  <Badge className="bg-gray-500 hover:bg-gray-600">Neutral</Badge>
</div>`}
          preview={
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
              <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
              <Badge className="bg-red-500 hover:bg-red-600">Error</Badge>
              <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
              <Badge className="bg-gray-500 hover:bg-gray-600">Neutral</Badge>
            </div>
          }
        />

        <ComponentPreview
          title="Badge with Icon"
          description="Badge with an icon for additional context."
          code={`<div className="flex flex-wrap gap-2">
  <Badge className="gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
    Verified
  </Badge>
  <Badge variant="outline" className="gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M15 9l-6 6" />
      <path d="M9 9l6 6" />
    </svg>
    Rejected
  </Badge>
</div>`}
          preview={
            <div className="flex flex-wrap gap-2">
              <Badge className="gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                Verified
              </Badge>
              <Badge variant="outline" className="gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M15 9l-6 6" />
                  <path d="M9 9l6 6" />
                </svg>
                Rejected
              </Badge>
            </div>
          }
        />
      </div>
    </div>
  )
}

