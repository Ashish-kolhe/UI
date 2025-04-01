import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Avatar - UI Library",
  description: "Avatar component for user profiles",
}

export default function AvatarPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Avatar</h1>
          <p className="text-lg text-muted-foreground">An avatar component for displaying user profile images.</p>
        </div>

        <ComponentPreview
          title="Default Avatar"
          description="The default avatar style with an image."
          code={`<Avatar>
  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@username" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>`}
          preview={
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@username" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          }
        />

        <ComponentPreview
          title="Avatar Fallback"
          description="Avatar with a fallback for when the image fails to load."
          code={`<div className="flex gap-4">
  <Avatar>
    <AvatarImage src="/broken-image.jpg" alt="@johndoe" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="/broken-image.jpg" alt="@janedoe" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="/broken-image.jpg" alt="@username" />
    <AvatarFallback>UN</AvatarFallback>
  </Avatar>
</div>`}
          preview={
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="/broken-image.jpg" alt="@johndoe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/broken-image.jpg" alt="@janedoe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/broken-image.jpg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </div>
          }
        />

        <ComponentPreview
          title="Avatar Sizes"
          description="Avatars in different sizes."
          code={`<div className="flex items-center gap-4">
  <Avatar className="h-8 w-8">
    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@small" />
    <AvatarFallback>SM</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@medium" />
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar className="h-12 w-12">
    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="@large" />
    <AvatarFallback>LG</AvatarFallback>
  </Avatar>
  <Avatar className="h-16 w-16">
    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="@xlarge" />
    <AvatarFallback>XL</AvatarFallback>
  </Avatar>
</div>`}
          preview={
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@small" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@medium" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="@large" />
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="@xlarge" />
                <AvatarFallback>XL</AvatarFallback>
              </Avatar>
            </div>
          }
        />

        <ComponentPreview
          title="Avatar Group"
          description="A group of avatars with overlap."
          code={`<div className="flex -space-x-2">
  <Avatar className="border-2 border-background">
    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user3" />
    <AvatarFallback>U3</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user4" />
    <AvatarFallback>U4</AvatarFallback>
  </Avatar>
</div>`}
          preview={
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user3" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user4" />
                <AvatarFallback>U4</AvatarFallback>
              </Avatar>
            </div>
          }
        />
      </div>
    </div>
  )
}

