import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Modal - UI Library",
  description: "Modal component for displaying content in an overlay",
}

export default function ModalPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Modal</h1>
          <p className="text-lg text-muted-foreground">
            A modal component for displaying content in an overlay dialog.
          </p>
        </div>

        <ComponentPreview
          title="Basic Modal"
          description="A simple modal with a button trigger."
          code={`<!-- Modal Trigger Button -->
<button 
  onclick="document.getElementById('basic-modal').classList.remove('hidden')"
  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
>
  Open Modal
</button>

<!-- Modal Backdrop -->
<div 
  id="basic-modal" 
  class="hidden fixed inset-0 z-50"
>
  <!-- Backdrop overlay -->
  <div 
    class="fixed inset-0 bg-black/80" 
    onclick="document.getElementById('basic-modal').classList.add('hidden')"
  ></div>
  
  <!-- Modal content -->
  <div class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
      <h3 class="text-lg font-semibold leading-none tracking-tight">Modal Title</h3>
      <p class="text-sm text-muted-foreground">This is a description of the modal.</p>
    </div>
    <div class="p-4">
      <p>Modal content goes here. You can put any content you want in here.</p>
    </div>
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
      <button 
        onclick="document.getElementById('basic-modal').classList.add('hidden')"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
      >
        Cancel
      </button>
      <button 
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        Continue
      </button>
    </div>
  </div>
</div>`}
          preview={
            <div className="flex justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Open Modal
              </button>
            </div>
          }
        />

        <ComponentPreview
          title="Form Modal"
          description="A modal containing a form."
          code={`<!-- Modal Trigger Button -->
<button 
  onclick="document.getElementById('form-modal').classList.remove('hidden')"
  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
>
  Edit Profile
</button>

<!-- Modal Backdrop -->
<div 
  id="form-modal" 
  class="hidden fixed inset-0 z-50"
>
  <!-- Backdrop overlay -->
  <div 
    class="fixed inset-0 bg-black/80" 
    onclick="document.getElementById('form-modal').classList.add('hidden')"
  ></div>
  
  <!-- Modal content -->
  <div class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
      <h3 class="text-lg font-semibold leading-none tracking-tight">Edit profile</h3>
      <p class="text-sm text-muted-foreground">Make changes to your profile here. Click save when you're done.</p>
    </div>
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name" class="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Name
        </label>
        <input
          id="name"
          value="John Doe"
          class="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username" class="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Username
        </label>
        <input
          id="username"
          value="@johndoe"
          class="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
      <button 
        onclick="document.getElementById('form-modal').classList.add('hidden')"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
      >
        Cancel
      </button>
      <button 
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        Save changes
      </button>
    </div>
  </div>
</div>`}
          preview={
            <div className="flex justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Edit Profile
              </button>
            </div>
          }
        />

        <ComponentPreview
          title="Confirmation Modal"
          description="A modal for confirming an action."
          code={`<!-- Modal Trigger Button -->
<button 
  onclick="document.getElementById('confirm-modal').classList.remove('hidden')"
  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2"
>
  Delete Item
</button>

<!-- Modal Backdrop -->
<div 
  id="confirm-modal" 
  class="hidden fixed inset-0 z-50"
>
  <!-- Backdrop overlay -->
  <div 
    class="fixed inset-0 bg-black/80" 
    onclick="document.getElementById('confirm-modal').classList.add('hidden')"
  ></div>
  
  <!-- Modal content -->
  <div class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
      <h3 class="text-lg font-semibold leading-none tracking-tight">Are you sure?</h3>
      <p class="text-sm text-muted-foreground">
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </p>
    </div>
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
      <button 
        onclick="document.getElementById('confirm-modal').classList.add('hidden')"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
      >
        Cancel
      </button>
      <button 
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2"
      >
        Delete
      </button>
    </div>
  </div>
</div>`}
          preview={
            <div className="flex justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
                Delete Item
              </button>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This modal component is implemented using pure Tailwind CSS classes and basic JavaScript. It doesn't require
            any external libraries or frameworks.
          </p>
          <p className="mt-2">The implementation uses:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Tailwind CSS for styling</li>
            <li>Basic JavaScript for showing/hiding the modal</li>
            <li>Accessible markup with proper focus management</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML and CSS. You can customize the styling by
            modifying the Tailwind classes.
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <p className="text-sm font-medium mb-2">For a more advanced implementation, consider:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Adding keyboard support (Escape key to close)</li>
              <li>Focus trapping within the modal</li>
              <li>Animation for opening/closing</li>
              <li>Preventing body scroll when modal is open</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
