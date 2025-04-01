import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Plus, Trash, Settings, Bell, Search, Mail, Heart, Share } from "lucide-react"

export const metadata: Metadata = {
  title: "Icon Button - UI Library",
  description: "Icon button component for compact actions",
}

export default function IconButtonPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Icon Button</h1>
          <p className="text-lg text-muted-foreground">An icon button component for compact actions.</p>
        </div>

        <ComponentPreview
          title="Default Icon Button"
          description="The default icon button style."
          code={`<Button size="icon">
  <Plus className="h-4 w-4" />
  <span className="sr-only">Add item</span>
</Button>`}
          preview={
            <Button size="icon">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add item</span>
            </Button>
          }
        />

        <ComponentPreview
          title="Icon Button Variants"
          description="Icon buttons in different variants."
          code={`<div className="flex flex-wrap gap-4">
  <Button size="icon">
    <Plus className="h-4 w-4" />
    <span className="sr-only">Add</span>
  </Button>
  <Button size="icon" variant="secondary">
    <Settings className="h-4 w-4" />
    <span className="sr-only">Settings</span>
  </Button>
  <Button size="icon" variant="outline">
    <Bell className="h-4 w-4" />
    <span className="sr-only">Notifications</span>
  </Button>
  <Button size="icon" variant="destructive">
    <Trash className="h-4 w-4" />
    <span className="sr-only">Delete</span>
  </Button>
  <Button size="icon" variant="ghost">
    <Search className="h-4 w-4" />
    <span className="sr-only">Search</span>
  </Button>
  <Button size="icon" variant="link">
    <Mail className="h-4 w-4" />
    <span className="sr-only">Email</span>
  </Button>
</div>`}
          preview={
            <div className="flex flex-wrap gap-4">
              <Button size="icon">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add</span>
              </Button>
              <Button size="icon" variant="secondary">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Settings</span>
              </Button>
              <Button size="icon" variant="outline">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button size="icon" variant="destructive">
                <Trash className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
              <Button size="icon" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button size="icon" variant="link">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          }
        />

        <ComponentPreview
          title="Icon Button Sizes"
          description="Icon buttons in different sizes."
          code={`<div className="flex flex-wrap items-center gap-4">
  <Button size="icon" className="h-8 w-8">
    <Heart className="h-3 w-3" />
    <span className="sr-only">Like</span>
  </Button>
  <Button size="icon">
    <Heart className="h-4 w-4" />
    <span className="sr-only">Like</span>
  </Button>
  <Button size="icon" className="h-12 w-12">
    <Heart className="h-6 w-6" />
    <span className="sr-only">Like</span>
  </Button>
</div>`}
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button size="icon" className="h-8 w-8">
                <Heart className="h-3 w-3" />
                <span className="sr-only">Like</span>
              </Button>
              <Button size="icon">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button size="icon" className="h-12 w-12">
                <Heart className="h-6 w-6" />
                <span className="sr-only">Like</span>
              </Button>
            </div>
          }
        />

        <ComponentPreview
          title="Rounded Icon Buttons"
          description="Icon buttons with different border radius."
          code={`<div className="flex flex-wrap gap-4">
  <Button size="icon" className="rounded-full">
    <Share className="h-4 w-4" />
    <span className="sr-only">Share</span>
  </Button>
  <Button size="icon" variant="secondary" className="rounded-full">
    <Heart className="h-4 w-4" />
    <span className="sr-only">Like</span>
  </Button>
  <Button size="icon" variant="outline" className="rounded-full">
    <Plus className="h-4 w-4" />
    <span className="sr-only">Add</span>
  </Button>
</div>`}
          preview={
            <div className="flex flex-wrap gap-4">
              <Button size="icon" className="rounded-full">
                <Share className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add</span>
              </Button>
            </div>
          }
        />
      </div>
    </div>
  )
}

