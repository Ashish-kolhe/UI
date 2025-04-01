import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
          title="Default Modal"
          description="The default modal style."
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Modal</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" value="John Doe" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input id="username" value="@johndoe" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          preview={
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Modal</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" defaultValue="John Doe" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" defaultValue="@johndoe" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
        />

        <ComponentPreview
          title="Confirmation Modal"
          description="A modal for confirming an action."
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Item</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-end">
      <DialogTrigger asChild>
        <Button type="button" variant="secondary">
          Cancel
        </Button>
      </DialogTrigger>
      <Button type="button" variant="destructive">
        Delete
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          preview={
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Item</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-end">
                  <DialogTrigger asChild>
                    <Button type="button" variant="secondary">
                      Cancel
                    </Button>
                  </DialogTrigger>
                  <Button type="button" variant="destructive">
                    Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
        />

        <ComponentPreview
          title="Modal with Form"
          description="A modal containing a form."
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Create New</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Create project</DialogTitle>
      <DialogDescription>
        Fill in the details to create a new project.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="project-name">Project name</Label>
        <Input id="project-name" placeholder="Enter project name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input id="description" placeholder="Enter project description" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="deadline">Deadline</Label>
        <Input id="deadline" type="date" />
      </div>
    </div>
    <DialogFooter>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">Cancel</Button>
      </DialogTrigger>
      <Button type="submit">Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          preview={
            <Dialog>
              <DialogTrigger asChild>
                <Button>Create New</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create project</DialogTitle>
                  <DialogDescription>Fill in the details to create a new project.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="project-name">Project name</Label>
                    <Input id="project-name" placeholder="Enter project name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Enter project description" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input id="deadline" type="date" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogTrigger asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogTrigger>
                  <Button type="submit">Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          }
        />
      </div>
    </div>
  )
}

