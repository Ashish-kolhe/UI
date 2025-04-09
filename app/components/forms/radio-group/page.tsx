import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

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
          code={`<div class="flex flex-col gap-2">
  <div class="flex items-center space-x-2">
    <input 
      type="radio" 
      id="option-one" 
      value="option-one" 
      name="radio-group" 
      class="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
      checked
    />
    <label 
      for="option-one" 
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Option One
    </label>
  </div>
  <div class="flex items-center space-x-2">
    <input 
      type="radio" 
      id="option-two" 
      value="option-two" 
      name="radio-group" 
      class="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
    />
    <label 
      for="option-two" 
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Option Two
    </label>
  </div>
</div>`}
          preview={
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="option-one"
                  value="option-one"
                  name="radio-group"
                  className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                  defaultChecked
                />
                <label
                  htmlFor="option-one"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Option One
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="option-two"
                  value="option-two"
                  name="radio-group"
                  className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                />
                <label
                  htmlFor="option-two"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Option Two
                </label>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Radio Group with Description"
          description="Radio group with descriptions for each option."
          code={`<div class="flex flex-col gap-4">
  <div class="flex items-start space-x-2">
    <input 
      type="radio" 
      id="r1" 
      value="default" 
      name="radio-with-description" 
      class="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary mt-1"
    />
    <div class="grid gap-1.5">
      <label 
        for="r1" 
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Default
      </label>
      <p class="text-sm text-muted-foreground">
        The default system spacing.
      </p>
    </div>
  </div>
  <div class="flex items-start space-x-2">
    <input 
      type="radio" 
      id="r2" 
      value="comfortable" 
      name="radio-with-description" 
      class="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary mt-1"
      checked
    />
    <div class="grid gap-1.5">
      <label 
        for="r2" 
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Comfortable
      </label>
      <p class="text-sm text-muted-foreground">
        Increased spacing for more comfort.
      </p>
    </div>
  </div>
  <div class="flex items-start space-x-2">
    <input 
      type="radio" 
      id="r3" 
      value="compact" 
      name="radio-with-description" 
      class="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary mt-1"
    />
    <div class="grid gap-1.5">
      <label 
        for="r3" 
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Compact
      </label>
      <p class="text-sm text-muted-foreground">
        Reduced spacing to fit more content.
      </p>
    </div>
  </div>
</div>`}
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-start space-x-2">
                <input
                  type="radio"
                  id="r1"
                  value="default"
                  name="radio-with-description"
                  className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary mt-1"
                />
                <div className="grid gap-1.5">
                  <label
                    htmlFor="r1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Default
                  </label>
                  <p className="text-sm text-muted-foreground">The default system spacing.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <input
                  type="radio"
                  id="r2"
                  value="comfortable"
                  name="radio-with-description"
                  className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary mt-1"
                  defaultChecked
                />
                <div className="grid gap-1.5">
                  <label
                    htmlFor="r2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Comfortable
                  </label>
                  <p className="text-sm text-muted-foreground">Increased spacing for more comfort.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <input
                  type="radio"
                  id="r3"
                  value="compact"
                  name="radio-with-description"
                  className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary mt-1"
                />
                <div className="grid gap-1.5">
                  <label
                    htmlFor="r3"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Compact
                  </label>
                  <p className="text-sm text-muted-foreground">Reduced spacing to fit more content.</p>
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Radio Group"
          description="Radio group with disabled options."
          code={`<div class="flex flex-col gap-2">
  <div class="flex items-center space-x-2">
    <input 
      type="radio" 
      id="d-option-one" 
      value="option-one" 
      name="disabled-radio-group" 
      class="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
      checked
    />
    <label 
      for="d-option-one" 
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Enabled Option
    </label>
  </div>
  <div class="flex items-center space-x-2">
    <input 
      type="radio" 
      id="d-option-two" 
      value="option-two" 
      name="disabled-radio-group" 
      class="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
      disabled
    />
    <label 
      for="d-option-two" 
      class="text-sm font-medium leading-none opacity-70"
    >
      Disabled Option
    </label>
  </div>
</div>`}
          preview={
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="d-option-one"
                  value="option-one"
                  name="disabled-radio-group"
                  className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                  defaultChecked
                />
                <label
                  htmlFor="d-option-one"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Enabled Option
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="d-option-two"
                  value="option-two"
                  name="disabled-radio-group"
                  className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                  disabled
                />
                <label htmlFor="d-option-two" className="text-sm font-medium leading-none opacity-70">
                  Disabled Option
                </label>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This radio group component is implemented using pure HTML and Tailwind CSS classes. It provides a way to
            select a single option from a list of choices.
          </p>
          <p className="mt-2">The radio group includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Standard radio inputs with custom styling</li>
            <li>Associated labels for each option</li>
            <li>Support for descriptions</li>
            <li>Disabled state styling</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML with the Tailwind classes. Make sure all radio
            inputs in a group share the same <code>name</code> attribute to ensure only one can be selected at a time.
          </p>
        </div>
      </div>
    </div>
  )
}
