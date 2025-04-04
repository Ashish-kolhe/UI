import type { Metadata } from "next"
import Link from "next/link"
import { ComponentSection } from "@/components/component-section"

import {  Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
export const metadata: Metadata = {
  title: "Components - UI Library",
  description: "Browse all UI components in our library",
}

export default function ComponentsPage() {
  return (
    <div className="container py-12 md:py-16">
  <SiteHeader/>
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Components</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Browse our collection of UI components. Each component is built with pure Tailwind CSS and is fully
            customizable.
          </p>

          <div className="mt-6">
            <Link
              href="/components/installation"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
            >
              Installation Guide
            </Link>
          </div>
        </div>

        <ComponentSection
          title="Buttons"
          description="Button components in various styles and sizes."
          components={[
            {
              name: "Button",
              description: "Standard button component with multiple variants.",
              href: "/components/buttons/button",
            },
            { name: "Icon Button", description: "Button with icon only.", href: "/components/buttons/icon-button" },
          ]}
        />

        <ComponentSection
          title="Forms"
          description="Form components for user input."
          components={[
            { name: "Input", description: "Text input field.", href: "/components/forms/input" },
            { name: "Checkbox", description: "Checkbox input component.", href: "/components/forms/checkbox" },
            { name: "Select", description: "Dropdown select menu.", href: "/components/forms/select" },
          ]}
        />

        <ComponentSection
          title="Data-Display"
          description="Components for displaying data."
          components={[
            {
              name: "Card",
              description: "Content container with multiple variants.",
              href: "/components/data-display/card",
            },
            { name: "Badge", description: "Small status indicator.", href: "/components/data-display/badge" },
            {
              name: "Avatar",
              description: "User profile picture or initials.",
              href: "/components/data-display/avatar",
            },
          ]}
        />

        <ComponentSection
          title="Feedback"
          description="Components for user feedback."
          components={[
            { name: "Alert", description: "Contextual feedback messages.", href: "/components/feedback/alert" },
            { name: "Progress", description: "Progress indicators.", href: "/components/feedback/progress" },
          ]}
        />

        <ComponentSection
          title="Navigation"
          description="Components for site navigation."
          components={[
            { name: "Breadcrumb", description: "Breadcrumb navigation.", href: "/components/navigation/breadcrumb" },
            { name: "Pagination", description: "Page navigation.", href: "/components/navigation/pagination" },
            { name: "Tabs", description: "Tabbed interface.", href: "/components/layout/tabs" },
          ]}
        />

        <ComponentSection
          title="Layout"
          description="Layout components."
          components={[
            { name: "Accordion", description: "Collapsible content sections.", href: "/components/layout/accordion" },
            { name: "Divider", description: "Visual separator between content.", href: "/components/layout/divider" },
          ]}
        />

        <ComponentSection
          title="Overlays"
          description="Overlay components."
          components={[
            { name: "Modal", description: "Dialog window overlay.", href: "/components/overlay/modal" },
            { name: "Tooltip", description: "Informational text on hover.", href: "/components/overlay/tooltip" },
            {
              name: "Dropdown Menu",
              description: "Menu that appears on click.",
              href: "/components/overlay/dropdown-menu",
            },
          ]}
        />
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️ by Ashish. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/AshishKolhe_"
             
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com/ashishkolhe_"
              
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashish-kolhe-b4800b343"
             
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Ashish-kolhe"
             
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

