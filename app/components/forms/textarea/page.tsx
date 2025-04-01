import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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
          code={`<Textarea placeholder="Type your message here." />`}
          preview={<Textarea placeholder="Type your message here." />}
        />

        <ComponentPreview
          title="Textarea with Label"
          description="Textarea with an associated label."
          code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`}
          preview={
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Textarea"
          description="Textarea in a disabled state."
          code={`<Textarea disabled placeholder="This textarea is disabled." />`}
          preview={<Textarea disabled placeholder="This textarea is disabled." />}
        />

        <ComponentPreview
          title="With Character Count"
          description="Textarea with a character count indicator."
          code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message-with-count">Your message</Label>
  <div className="relative">
    <Textarea 
      placeholder="Type your message here." 
      id="message-with-count" 
      className="min-h-[100px] resize-none"
    />
    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
      0/500
    </div>
  </div>
</div>`}
          preview={
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-with-count">Your message</Label>
              <div className="relative">
                <Textarea
                  placeholder="Type your message here."
                  id="message-with-count"
                  className="min-h-[100px] resize-none"
                />
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">0/500</div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

