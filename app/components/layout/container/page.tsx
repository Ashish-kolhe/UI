import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Container - UI Library",
  description: "Container component for consistent content width",
}

export default function ContainerPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Container</h1>
          <p className="text-lg text-muted-foreground">
            A container component for maintaining consistent content width across different screen sizes.
          </p>
        </div>

        <ComponentPreview
          title="Default Container"
          description="The default container with responsive padding."
          code={`<div className="container bg-muted rounded-lg p-4">
  <p className="text-center">Default container with responsive padding</p>
</div>`}
          preview={
            <div className="container bg-muted rounded-lg p-4">
              <p className="text-center">Default container with responsive padding</p>
            </div>
          }
        />

        <ComponentPreview
          title="Container with Max Width"
          description="Container with a maximum width constraint."
          code={`<div className="container max-w-md mx-auto bg-muted rounded-lg p-4">
  <p className="text-center">Container with max-width: md (28rem)</p>
</div>

<div className="container max-w-xl mx-auto bg-muted rounded-lg p-4 mt-4">
  <p className="text-center">Container with max-width: xl (36rem)</p>
</div>

<div className="container max-w-4xl mx-auto bg-muted rounded-lg p-4 mt-4">
  <p className="text-center">Container with max-width: 4xl (56rem)</p>
</div>`}
          preview={
            <>
              <div className="container max-w-md mx-auto bg-muted rounded-lg p-4">
                <p className="text-center">Container with max-width: md (28rem)</p>
              </div>

              <div className="container max-w-xl mx-auto bg-muted rounded-lg p-4 mt-4">
                <p className="text-center">Container with max-width: xl (36rem)</p>
              </div>

              <div className="container max-w-4xl mx-auto bg-muted rounded-lg p-4 mt-4">
                <p className="text-center">Container with max-width: 4xl (56rem)</p>
              </div>
            </>
          }
        />

        <ComponentPreview
          title="Container with Custom Padding"
          description="Container with custom padding at different breakpoints."
          code={`<div className="container px-4 sm:px-6 md:px-8 lg:px-10 bg-muted rounded-lg py-4">
  <p className="text-center">Container with custom responsive padding</p>
</div>`}
          preview={
            <div className="container px-4 sm:px-6 md:px-8 lg:px-10 bg-muted rounded-lg py-4">
              <p className="text-center">Container with custom responsive padding</p>
            </div>
          }
        />

        <ComponentPreview
          title="Nested Containers"
          description="Containers nested within each other for complex layouts."
          code={`<div className="container bg-muted/30 rounded-lg p-4">
  <p className="text-center mb-4">Outer container</p>
  <div className="container max-w-2xl mx-auto bg-muted rounded-lg p-4">
    <p className="text-center">Inner container with max-width: 2xl</p>
  </div>
</div>`}
          preview={
            <div className="container bg-muted/30 rounded-lg p-4">
              <p className="text-center mb-4">Outer container</p>
              <div className="container max-w-2xl mx-auto bg-muted rounded-lg p-4">
                <p className="text-center">Inner container with max-width: 2xl</p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}
