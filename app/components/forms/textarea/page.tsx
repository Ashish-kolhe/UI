import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Textarea - UI Library",
  description: "Textarea component for multi-line text input",
}

export default function TextareaPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
          <p className="text-lg text-muted-foreground">A textarea component for multi-line text input.</p>
        </div>

        <ComponentPreview
          title="Default Textarea"
          description="The default textarea style."
          code={`<textarea 
  placeholder="Type your message here." 
  class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
></textarea>`}
          preview={
            <textarea
              placeholder="Type your message here."
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          }
        />

        <ComponentPreview
          title="Textarea with Label"
          description="Textarea with an associated label."
          code={`<div class="grid w-full gap-1.5">
  <label 
    for="message" 
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Your message
  </label>
  <textarea 
    placeholder="Type your message here." 
    id="message" 
    class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  ></textarea>
</div>`}
          preview={
            <div className="grid w-full gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Your message
              </label>
              <textarea
                placeholder="Type your message here."
                id="message"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              ></textarea>
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Textarea"
          description="Textarea in a disabled state."
          code={`<textarea 
  disabled 
  placeholder="This textarea is disabled." 
  class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
></textarea>`}
          preview={
            <textarea
              disabled
              placeholder="This textarea is disabled."
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          }
        />

        <ComponentPreview
          title="With Character Count"
          description="Textarea with a character count indicator."
          code={`<div class="grid w-full gap-1.5">
  <label 
    for="message-with-count" 
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Your message
  </label>
  <div class="relative">
    <textarea 
      placeholder="Type your message here." 
      id="message-with-count" 
      class="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
      maxlength="500"
      oninput="document.getElementById('char-count').textContent = this.value.length + '/500'"
    ></textarea>
    <div 
      id="char-count" 
      class="absolute bottom-2 right-2 text-xs text-muted-foreground"
    >
      0/500
    </div>
  </div>
</div>`}
          preview={
            <div className="grid w-full gap-1.5">
              <label
                htmlFor="message-with-count"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Your message
              </label>
              <div className="relative">
                <textarea
                  placeholder="Type your message here."
                  id="message-with-count"
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  maxLength={500}
                ></textarea>
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">0/500</div>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This textarea component is implemented using the native HTML textarea element with Tailwind CSS styling. It
            provides a way to input multi-line text.
          </p>
          <p className="mt-2">The textarea includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Custom styling for the textarea element</li>
            <li>Focus and disabled states</li>
            <li>Associated label styling</li>
            <li>Optional character count functionality</li>
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
