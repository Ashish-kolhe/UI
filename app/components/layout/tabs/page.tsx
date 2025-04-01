import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tabs - UI Library",
  description: "Tabs component for switching between different views",
}

export default function TabsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
          <p className="text-lg text-muted-foreground">A tabs component for switching between different views.</p>
        </div>

        <ComponentPreview
          title="Default Tabs"
          description="The default tabs style."
          code={`<Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <div className="space-y-4 p-4">
      <h3 className="text-lg font-medium">Account Settings</h3>
      <p className="text-sm text-muted-foreground">
        Update your account settings. Set your preferred language and timezone.
      </p>
    </div>
  </TabsContent>
  <TabsContent value="password">
    <div className="space-y-4 p-4">
      <h3 className="text-lg font-medium">Password Settings</h3>
      <p className="text-sm text-muted-foreground">
        Change your password here. After saving, you'll be logged out.
      </p>
    </div>
  </TabsContent>
</Tabs>`}
          preview={
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="space-y-4 p-4">
                  <h3 className="text-lg font-medium">Account Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Update your account settings. Set your preferred language and timezone.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="space-y-4 p-4">
                  <h3 className="text-lg font-medium">Password Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Change your password here. After saving, you'll be logged out.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          }
        />

        <ComponentPreview
          title="Tabs with Form"
          description="Tabs containing form elements."
          code={`<Tabs defaultValue="account" className="w-full">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <div className="space-y-4 p-4 border rounded-md mt-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Make changes to your account here. Click save when you're done.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="John Doe" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="johndoe" />
        </div>
        <Button>Save changes</Button>
      </div>
    </div>
  </TabsContent>
  <TabsContent value="password">
    <div className="space-y-4 p-4 border rounded-md mt-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Password</h3>
        <p className="text-sm text-muted-foreground">
          Change your password here. After saving, you'll be logged out.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="current">Current password</Label>
          <Input id="current" type="password" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
        <Button>Change password</Button>
      </div>
    </div>
  </TabsContent>
</Tabs>`}
          preview={
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="space-y-4 p-4 border rounded-md mt-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Make changes to your account here. Click save when you're done.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="johndoe" />
                    </div>
                    <Button>Save changes</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="space-y-4 p-4 border rounded-md mt-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Password</h3>
                    <p className="text-sm text-muted-foreground">
                      Change your password here. After saving, you'll be logged out.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                    <Button>Change password</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          }
        />

        <ComponentPreview
          title="Vertical Tabs"
          description="Tabs arranged vertically for a different layout."
          code={`<div className="flex flex-col sm:flex-row w-full gap-4">
  <Tabs defaultValue="tab1" orientation="vertical" className="w-full">
    <div className="flex">
      <TabsList className="flex flex-col h-auto">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <div className="flex-1 p-4">
        <TabsContent value="tab1" className="mt-0">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Tab 1 Content</h3>
            <p className="text-sm text-muted-foreground">
              This is the content for Tab 1. Vertical tabs are useful for forms with many sections.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab2" className="mt-0">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Tab 2 Content</h3>
            <p className="text-sm text-muted-foreground">
              This is the content for Tab 2. You can navigate between tabs using the vertical menu.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab3" className="mt-0">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Tab 3 Content</h3>
            <p className="text-sm text-muted-foreground">
              This is the content for Tab 3. Vertical tabs work well on both mobile and desktop.
            </p>
          </div>
        </TabsContent>
      </div>
    </div>
  </Tabs>
</div>`}
          preview={
            <div className="flex flex-col sm:flex-row w-full gap-4">
              <Tabs defaultValue="tab1" className="w-full">
                <div className="flex flex-col sm:flex-row">
                  <TabsList className="flex flex-row sm:flex-col h-auto">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <div className="flex-1 p-4">
                    <TabsContent value="tab1" className="mt-0">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Tab 1 Content</h3>
                        <p className="text-sm text-muted-foreground">
                          This is the content for Tab 1. Vertical tabs are useful for forms with many sections.
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="tab2" className="mt-0">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Tab 2 Content</h3>
                        <p className="text-sm text-muted-foreground">
                          This is the content for Tab 2. You can navigate between tabs using the vertical menu.
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="tab3" className="mt-0">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Tab 3 Content</h3>
                        <p className="text-sm text-muted-foreground">
                          This is the content for Tab 3. Vertical tabs work well on both mobile and desktop.
                        </p>
                      </div>
                    </TabsContent>
                  </div>
                </div>
              </Tabs>
            </div>
          }
        />
      </div>
    </div>
  )
}

