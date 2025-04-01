import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Checkbox - UI Library",
  description: "Checkbox component for multiple selections",
}

export default function CheckboxPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
          <p className="text-lg text-muted-foreground">A checkbox component for multiple selections.</p>
        </div>

        <ComponentPreview
          title="Default Checkbox"
          description="The default checkbox style."
          code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </label>
</div>`}
          preview={
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          }
        />

        <ComponentPreview
          title="Checkbox Group"
          description="A group of checkboxes for multiple selections."
          code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="option1" />
    <label
      htmlFor="option1"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Email notifications
    </label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option2" />
    <label
      htmlFor="option2"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      SMS notifications
    </label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option3" />
    <label
      htmlFor="option3"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Push notifications
    </label>
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="option1" />
                <label
                  htmlFor="option1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email notifications
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="option2" />
                <label
                  htmlFor="option2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  SMS notifications
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="option3" />
                <label
                  htmlFor="option3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Push notifications
                </label>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Checkbox"
          description="Checkbox in a disabled state."
          code={`<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <label
    htmlFor="disabled"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Disabled option
  </label>
</div>`}
          preview={
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <label
                htmlFor="disabled"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disabled option
              </label>
            </div>
          }
        />
      </div>
    </div>
  )
}

