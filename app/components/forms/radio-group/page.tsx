import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const metadata: Metadata = {
  title: "Radio Group - UI Library",
  description: "Radio group component for single selection",
}

export default function RadioGroupPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Radio Group</h1>
          <p className="text-lg text-muted-foreground">
            A radio group component for single selection from multiple options.
          </p>
        </div>

        <ComponentPreview
          title="Default Radio Group"
          description="The default radio group style."
          code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
          preview={
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          }
        />

        <ComponentPreview
          title="Radio Group with Description"
          description="Radio group with descriptions for each option."
          code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="default" id="r1" className="mt-1" />
    <div className="grid gap-1.5">
      <Label htmlFor="r1">Default</Label>
      <p className="text-sm text-muted-foreground">
        The default system spacing.
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="comfortable" id="r2" className="mt-1" />
    <div className="grid gap-1.5">
      <Label htmlFor="r2">Comfortable</Label>
      <p className="text-sm text-muted-foreground">
        Increased spacing for more comfort.
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="compact" id="r3" className="mt-1" />
    <div className="grid gap-1.5">
      <Label htmlFor="r3">Compact</Label>
      <p className="text-sm text-muted-foreground">
        Reduced spacing to fit more content.
      </p>
    </div>
  </div>
</RadioGroup>`}
          preview={
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="default" id="r1" className="mt-1" />
                <div className="grid gap-1.5">
                  <Label htmlFor="r1">Default</Label>
                  <p className="text-sm text-muted-foreground">The default system spacing.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="comfortable" id="r2" className="mt-1" />
                <div className="grid gap-1.5">
                  <Label htmlFor="r2">Comfortable</Label>
                  <p className="text-sm text-muted-foreground">Increased spacing for more comfort.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="compact" id="r3" className="mt-1" />
                <div className="grid gap-1.5">
                  <Label htmlFor="r3">Compact</Label>
                  <p className="text-sm text-muted-foreground">Reduced spacing to fit more content.</p>
                </div>
              </div>
            </RadioGroup>
          }
        />

        <ComponentPreview
          title="Disabled Radio Group"
          description="Radio group with disabled options."
          code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="d-option-one" />
    <Label htmlFor="d-option-one">Enabled Option</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="d-option-two" disabled />
    <Label htmlFor="d-option-two" className="opacity-70">Disabled Option</Label>
  </div>
</RadioGroup>`}
          preview={
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="d-option-one" />
                <Label htmlFor="d-option-one">Enabled Option</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="d-option-two" disabled />
                <Label htmlFor="d-option-two" className="opacity-70">
                  Disabled Option
                </Label>
              </div>
            </RadioGroup>
          }
        />
      </div>
    </div>
  )
}

