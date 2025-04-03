import type { Metadata } from "next"
import { ComponentSection } from "@/components/component-section"

export const metadata: Metadata = {
  title: "Components - UI Library",
  description: "Browse all UI components in our library",
}

export default function ComponentsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Components</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Browse our collection of 100+ UI components. Each component is fully customizable and available in multiple
            formats.
          </p>
        </div>

        <ComponentSection
          title="Buttons"
          description="Button components in various styles and sizes."
          components={[
            { name: "Button", description: "Standard button component with multiple variants." },
            { name: "Button Group", description: "Group of related buttons." },
            { name: "Icon Button", description: "Button with icon only." },
            { name: "Loading Button", description: "Button with loading state." },
          ]}
        />

        <ComponentSection
          title="Forms"
          description="Form components for user input."
          components={[
            { name: "Input", description: "Text input field." },
            { name: "Textarea", description: "Multi-line text input." },
            { name: "Select", description: "Dropdown select menu." },
            { name: "Checkbox", description: "Checkbox input component." },
            { name: "Radio Group", description: "Group of radio buttons." },
            { name: "Switch", description: "Toggle switch component." },
          ]}
        />

        <ComponentSection
          title="Data-Display"
          description="Components for displaying data."
          components={[
            { name: "Table", description: "Data table with sorting and pagination." },
            { name: "Card", description: "Content container with multiple variants." },
            { name: "List", description: "Ordered and unordered lists." },
            { name: "Badge", description: "Small status indicator." },
            { name: "Avatar", description: "User profile picture or initials." },
          ]}
        />

        <ComponentSection
          title="Feedback"
          description="Components for user feedback."
          components={[
            { name: "Alert", description: "Contextual feedback messages." },
            { name: "Toast", description: "Brief notification messages." },
            { name: "Progress", description: "Progress indicators." },
            { name: "Skeleton", description: "Loading placeholder." },
          ]}
        />

        <ComponentSection
          title="Navigation"
          description="Components for site navigation."
          components={[
            { name: "Navbar", description: "Top navigation bar." },
            { name: "Sidebar", description: "Side navigation menu." },
            { name: "Tabs", description: "Tabbed interface." },
            { name: "Breadcrumb", description: "Breadcrumb navigation." },
            { name: "Pagination", description: "Page navigation." },
          ]}
        />

        <ComponentSection
          title="Overlays"
          description="Overlay components."
          components={[
            { name: "Modal", description: "Dialog window overlay." },
            { name: "Drawer", description: "Side panel that slides in." },
            { name: "Popover", description: "Contextual overlay." },
            { name: "Tooltip", description: "Informational text on hover." },
          ]}
        />
      </div>
    </div>
  )
}

