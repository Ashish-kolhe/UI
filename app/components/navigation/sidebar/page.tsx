import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Home, Settings, User, Mail, Calendar, BarChart, HelpCircle, LogOut, Menu } from "lucide-react"

export const metadata: Metadata = {
  title: "Sidebar - UI Library",
  description: "Sidebar component for navigation",
}

export default function SidebarPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Sidebar</h1>
          <p className="text-lg text-muted-foreground">A sidebar component for navigation and application structure.</p>
        </div>

        <ComponentPreview
          title="Basic Sidebar"
          description="A simple sidebar with navigation links."
          code={`<div className="flex h-[500px] border rounded-lg overflow-hidden">
  <div className="w-64 border-r bg-muted/50 p-4">
    <div className="font-semibold mb-4">Dashboard</div>
    <nav className="space-y-2">
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground bg-muted">
        <Home className="h-4 w-4" />
        Home
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <User className="h-4 w-4" />
        Profile
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <Mail className="h-4 w-4" />
        Messages
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <Calendar className="h-4 w-4" />
        Calendar
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <BarChart className="h-4 w-4" />
        Analytics
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <Settings className="h-4 w-4" />
        Settings
      </a>
    </nav>
  </div>
  <div className="flex-1 p-4">
    <h2 className="text-xl font-semibold mb-4">Main Content</h2>
    <p>This is the main content area that appears next to the sidebar.</p>
  </div>
</div>`}
          preview={
            <div className="flex h-[500px] border rounded-lg overflow-hidden">
              <div className="w-64 border-r bg-muted/50 p-4">
                <div className="font-semibold mb-4">Dashboard</div>
                <nav className="space-y-2">
                  <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground bg-muted">
                    <Home className="h-4 w-4" />
                    Home
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <Mail className="h-4 w-4" />
                    Messages
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <Calendar className="h-4 w-4" />
                    Calendar
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <BarChart className="h-4 w-4" />
                    Analytics
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </a>
                </nav>
              </div>
              <div className="flex-1 p-4">
                <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                <p>This is the main content area that appears next to the sidebar.</p>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Collapsible Sidebar"
          description="A sidebar that can be collapsed to icons only."
          code={`<div className="flex h-[500px] border rounded-lg overflow-hidden">
  <div className="w-16 md:w-64 border-r bg-muted/50 p-4 transition-all duration-300">
    <div className="font-semibold mb-4 hidden md:block">Dashboard</div>
    <nav className="space-y-2">
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground bg-muted">
        <Home className="h-4 w-4" />
        <span className="hidden md:inline">Home</span>
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <User className="h-4 w-4" />
        <span className="hidden md:inline">Profile</span>
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <Mail className="h-4 w-4" />
        <span className="hidden md:inline">Messages</span>
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <Calendar className="h-4 w-4" />
        <span className="hidden md:inline">Calendar</span>
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <BarChart className="h-4 w-4" />
        <span className="hidden md:inline">Analytics</span>
      </a>
      <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
        <Settings className="h-4 w-4" />
        <span className="hidden md:inline">Settings</span>
      </a>
    </nav>
  </div>
  <div className="flex-1 p-4">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold">Main Content</h2>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
    <p>This is the main content area that appears next to the sidebar. The sidebar collapses to icons only on smaller screens.</p>
  </div>
</div>`}
          preview={
            <div className="flex h-[500px] border rounded-lg overflow-hidden">
              <div className="w-16 md:w-64 border-r bg-muted/50 p-4 transition-all duration-300">
                <div className="font-semibold mb-4 hidden md:block">Dashboard</div>
                <nav className="space-y-2">
                  <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground bg-muted">
                    <Home className="h-4 w-4" />
                    <span className="hidden md:inline">Home</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <User className="h-4 w-4" />
                    <span className="hidden md:inline">Profile</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="hidden md:inline">Messages</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <Calendar className="h-4 w-4" />
                    <span className="hidden md:inline">Calendar</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <BarChart className="h-4 w-4" />
                    <span className="hidden md:inline">Analytics</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <Settings className="h-4 w-4" />
                    <span className="hidden md:inline">Settings</span>
                  </a>
                </nav>
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Main Content</h2>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
                <p>
                  This is the main content area that appears next to the sidebar. The sidebar collapses to icons only on
                  smaller screens.
                </p>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Sidebar with Footer"
          description="A sidebar with a footer section for user profile or actions."
          code={`<div className="flex h-[500px] border rounded-lg overflow-hidden">
  <div className="w-64 border-r bg-muted/50 flex flex-col">
    <div className="p-4">
      <div className="font-semibold mb-4">Dashboard</div>
      <nav className="space-y-2">
        <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground bg-muted">
          <Home className="h-4 w-4" />
          Home
        </a>
        <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
          <User className="h-4 w-4" />
          Profile
        </a>
        <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
          <Mail className="h-4 w-4" />
          Messages
        </a>
        <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
          <Settings className="h-4 w-4" />
          Settings
        </a>
        <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted">
          <HelpCircle className="h-4 w-4" />
          Help
        </a>
      </nav>
    </div>
    <div className="mt-auto border-t p-4">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
          <User className="h-4 w-4" />
        </div>
        <div>
          <div className="font-medium">John Doe</div>
          <div className="text-xs text-muted-foreground">john@example.com</div>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto">
          <LogOut className="h-4 w-4" />
          <span className="sr-only">Log out</span>
        </Button>
      </div>
    </div>
  </div>
  <div className="flex-1 p-4">
    <h2 className="text-xl font-semibold mb-4">Main Content</h2>
    <p>This is the main content area that appears next to the sidebar.</p>
  </div>
</div>`}
          preview={
            <div className="flex h-[500px] border rounded-lg overflow-hidden">
              <div className="w-64 border-r bg-muted/50 flex flex-col">
                <div className="p-4">
                  <div className="font-semibold mb-4">Dashboard</div>
                  <nav className="space-y-2">
                    <a href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground bg-muted">
                      <Home className="h-4 w-4" />
                      Home
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <Mail className="h-4 w-4" />
                      Messages
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <Settings className="h-4 w-4" />
                      Settings
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <HelpCircle className="h-4 w-4" />
                      Help
                    </a>
                  </nav>
                </div>
                <div className="mt-auto border-t p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-muted-foreground">john@example.com</div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <LogOut className="h-4 w-4" />
                      <span className="sr-only">Log out</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-4">
                <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                <p>This is the main content area that appears next to the sidebar.</p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

