"use client"

import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export default function ToastPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Toast</h1>
          <p className="text-lg text-muted-foreground">A toast component for displaying notifications and feedback.</p>
        </div>

        <ComponentPreview
          title="Default Toast"
          description="The default toast style."
          code={`import { useToast } from "@/hooks/use-toast"

function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}`}
          preview={<ToastDemo />}
        />

        <ComponentPreview
          title="Toast with Action"
          description="Toast with an action button."
          code={`import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

function ToastWithAction() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "New message",
          description: "You have 1 unread message.",
          action: (
            <ToastAction altText="View message">View</ToastAction>
          ),
        })
      }}
    >
      Show Toast with Action
    </Button>
  )
}`}
          preview={<ToastWithAction />}
        />

        <ComponentPreview
          title="Toast Variants"
          description="Toasts in different variants."
          code={`import { useToast } from "@/hooks/use-toast"

function ToastVariants() {
  const { toast } = useToast()

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Success",
            description: "Your action was completed successfully.",
            variant: "default",
          })
        }}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh!",
            description: "There was a problem with your request.",
            variant: "destructive",
          })
        }}
      >
        Destructive
      </Button>
    </div>
  )
}`}
          preview={<ToastVariants />}
        />
      </div>
    </div>
  )
}

function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

function ToastWithAction() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "New message",
          description: "You have 1 unread message.",
          action: <ToastAction altText="View message">View</ToastAction>,
        })
      }}
    >
      Show Toast with Action
    </Button>
  )
}

function ToastVariants() {
  const { toast } = useToast()

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Success",
            description: "Your action was completed successfully.",
            variant: "default",
          })
        }}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh!",
            description: "There was a problem with your request.",
            variant: "destructive",
          })
        }}
      >
        Destructive
      </Button>
    </div>
  )
}
