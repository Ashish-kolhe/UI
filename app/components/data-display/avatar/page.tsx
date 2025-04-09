import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

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
          code={`<div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
  <img class="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@username" />
</div>`}
          preview={
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <img className="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@username" />
            </div>
          }
        />

        <ComponentPreview
          title="Avatar Fallback"
          description="Avatar with a fallback for when the image fails to load."
          code={`<div class="flex gap-4">
  <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
    <img class="aspect-square h-full w-full" src="/broken-image.jpg" alt="@johndoe" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-sm font-medium">JD</span>
    </div>
  </div>
  <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
    <img class="aspect-square h-full w-full" src="/broken-image.jpg" alt="@janedoe" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-sm font-medium">JD</span>
    </div>
  </div>
  <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
    <img class="aspect-square h-full w-full" src="/broken-image.jpg" alt="@username" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-sm font-medium">UN</span>
    </div>
  </div>
</div>

<script>
  // Handle image load errors and show fallback
  document.addEventListener('DOMContentLoaded', function() {
    const avatarImages = document.querySelectorAll('.relative.flex.rounded-full img');
    avatarImages.forEach(img => {
      img.addEventListener('error', function() {
        this.style.display = 'none';
      });
    });
  });
</script>`}
          preview={
            <div className="flex gap-4">
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">JD</span>
                </div>
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">JD</span>
                </div>
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">UN</span>
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Avatar Sizes"
          description="Avatars in different sizes."
          code={`<div class="flex items-center gap-4">
  <div class="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
    <img class="aspect-square h-full w-full" src="/placeholder.svg?height=32&width=32" alt="@small" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-xs font-medium">SM</span>
    </div>
  </div>
  <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
    <img class="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@medium" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-xs font-medium">MD</span>
    </div>
  </div>
  <div class="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
    <img class="aspect-square h-full w-full" src="/placeholder.svg?height=48&width=48" alt="@large" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-sm font-medium">LG</span>
    </div>
  </div>
  <div class="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
    <img class="aspect-square h-full w-full" src="/placeholder.svg?height=64&width=64" alt="@xlarge" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-base font-medium">XL</span>
    </div>
  </div>
</div>

<script>
  // Handle image load errors and show fallback
  document.addEventListener('DOMContentLoaded', function() {
    const avatarImages = document.querySelectorAll('.relative.flex.rounded-full img');
    avatarImages.forEach(img => {
      img.addEventListener('error', function() {
        this.style.display = 'none';
      });
    });
  });
</script>`}
          preview={
            <div className="flex items-center gap-4">
              <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" src="/placeholder.svg?height=32&width=32" alt="@small" />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-xs font-medium">SM</span>
                </div>
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@medium" />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">MD</span>
                </div>
              </div>
              <div className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" src="/placeholder.svg?height=48&width=48" alt="@large" />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">LG</span>
                </div>
              </div>
              <div className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" src="/placeholder.svg?height=64&width=64" alt="@xlarge" />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-base font-medium">XL</span>
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Avatar Group"
          description="A group of avatars with overlap."
          code={`<div class="flex -space-x-2">
  <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
    <img class="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@user1" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-sm font-medium">U1</span>
    </div>
  </div>
  <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
    <img class="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@user2" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-sm font-medium">U2</span>
    </div>
  </div>
  <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
    <img class="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@user3" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-sm font-medium">U3</span>
    </div>
  </div>
  <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
    <img class="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@user4" />
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <span class="text-sm font-medium">U4</span>
    </div>
  </div>
</div>

<script>
  // Handle image load errors and show fallback
  document.addEventListener('DOMContentLoaded', function() {
    const avatarImages = document.querySelectorAll('.relative.flex.rounded-full img');
    avatarImages.forEach(img => {
      img.addEventListener('error', function() {
        this.style.display = 'none';
      });
    });
  });
</script>`}
          preview={
            <div className="flex -space-x-2">
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
                <img className="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@user1" />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">U1</span>
                </div>
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
                <img className="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@user2" />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">U2</span>
                </div>
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
                <img className="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@user3" />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">U3</span>
                </div>
              </div>
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-background">
                <img className="aspect-square h-full w-full" src="/placeholder.svg?height=40&width=40" alt="@user4" />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">U4</span>
                </div>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This avatar component is implemented using pure HTML and Tailwind CSS classes. It provides a way to display
            user profile images with fallback options.
          </p>
          <p className="mt-2">The avatar includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>A container with rounded corners</li>
            <li>An image that displays the user's profile picture</li>
            <li>A fallback element that shows when the image fails to load</li>
            <li>Support for different sizes</li>
            <li>Support for avatar groups with overlap</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML with the Tailwind classes. The JavaScript is
            optional but recommended for handling image load errors.
          </p>
        </div>
      </div>
    </div>
  )
}
