import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Card - UI Library",
  description: "Card component for displaying content",
}

export default function CardPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Card</h1>
          <p className="text-lg text-muted-foreground">
            A card component for displaying content in a contained format.
          </p>
        </div>

        <ComponentPreview
          title="Simple Card"
          description="A basic card with header, content, and footer."
          code={`<div class="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]">
  <div class="flex flex-col space-y-1.5 p-6">
    <h3 class="text-2xl font-semibold leading-none tracking-tight">Card Title</h3>
    <p class="text-sm text-muted-foreground">Card Description</p>
  </div>
  <div class="p-6 pt-0">
    <p>Card Content</p>
  </div>
  <div class="flex items-center p-6 pt-0">
    <p>Card Footer</p>
  </div>
</div>`}
          preview={
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Card Title</h3>
                <p className="text-sm text-muted-foreground">Card Description</p>
              </div>
              <div className="p-6 pt-0">
                <p>Card Content</p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <p>Card Footer</p>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Notification Card"
          description="A card styled as a notification."
          code={`<div class="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]">
  <div class="flex flex-col space-y-1.5 p-6">
    <h3 class="text-2xl font-semibold leading-none tracking-tight">Notification</h3>
    <p class="text-sm text-muted-foreground">You have a new message</p>
  </div>
  <div class="p-6 pt-0">
    <p>Hello! This is a notification message that requires your attention.</p>
  </div>
  <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-0">
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
      Dismiss
    </button>
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
      View
    </button>
  </div>
</div>`}
          preview={
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Notification</h3>
                <p className="text-sm text-muted-foreground">You have a new message</p>
              </div>
              <div className="p-6 pt-0">
                <p>Hello! This is a notification message that requires your attention.</p>
              </div>
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-0">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Dismiss
                </button>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  View
                </button>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Product Card"
          description="A card displaying product information."
          code={`<div class="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]">
  <div class="p-6">
    <div class="h-40 rounded-md bg-muted"></div>
  </div>
  <div class="p-6 pt-0">
    <h3 class="text-2xl font-semibold leading-none tracking-tight">Product Name</h3>
    <p class="pt-2 text-sm text-muted-foreground">$99.99</p>
    <p class="pt-4 text-sm text-muted-foreground">
      This is a description of the product with its features and benefits.
    </p>
  </div>
  <div class="p-6 pt-0">
    <button class="inline-flex w-full items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
      Add to Cart
    </button>
  </div>
</div>`}
          preview={
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]">
              <div className="p-6">
                <div className="h-40 rounded-md bg-muted"></div>
              </div>
              <div className="p-6 pt-0">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Product Name</h3>
                <p className="pt-2 text-sm text-muted-foreground">$99.99</p>
                <p className="pt-4 text-sm text-muted-foreground">
                  This is a description of the product with its features and benefits.
                </p>
              </div>
              <div className="p-6 pt-0">
                <button className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Add to Cart
                </button>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This card component is implemented using pure Tailwind CSS classes. It provides a flexible container for
            displaying content in a visually appealing way.
          </p>
          <p className="mt-2">The card includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>A container with border, background, and shadow</li>
            <li>Optional header with title and description</li>
            <li>Content area for main information</li>
            <li>Optional footer for actions</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML with the Tailwind classes. You can customize the
            appearance by modifying the classes.
          </p>
        </div>
      </div>
    </div>
  )
}
