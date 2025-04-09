import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ComponentCard } from "@/components/component-card"

export const metadata: Metadata = {
  title: "UI Component Library",
  description: "A modern UI component library with 100+ components",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-16 md:pb-12 md:pt-20 lg:py-24">
          <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-6 text-center px-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Modern UI Component Library
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A comprehensive collection of 100+ beautiful UI components for your next project. Available in HTML, JSX,
              and TSX formats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/components">
                <button className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Browse Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
              <Link href="/docs">
                <button className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Documentation
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="container mx-auto space-y-12 py-12 md:py-16 lg:py-24 px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Components</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore some of our most popular components. Each component is fully customizable and ready to use.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <ComponentCard
              title="Buttons"
              description="Various button styles including primary, secondary, outline, and ghost variants."
              href="/components/buttons"
            />
            <ComponentCard
              title="Cards"
              description="Versatile card components for displaying content in a contained format."
              href="/components/cards"
            />
            <ComponentCard
              title="Forms"
              description="Form components including inputs, checkboxes, radios, and select menus."
              href="/components/forms"
            />
            <ComponentCard
              title="Navigation"
              description="Navigation components including menus, breadcrumbs, and pagination."
              href="/components/navigation"
            />
            <ComponentCard
              title="Modals"
              description="Dialog and modal components for displaying content in an overlay."
              href="/components/modals"
            />
            <ComponentCard
              title="Data Display"
              description="Components for displaying data including tables, lists, and stats."
              href="/components/data-display"
            />
          </div>
          <div className="mx-auto text-center md:max-w-[58rem] mt-10">
            <Link href="/components">
              <button className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                View All Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
