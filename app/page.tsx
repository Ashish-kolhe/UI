import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ComponentCard } from "@/components/component-card"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "UI Component Library",
  description: "A modern UI component library with 100+ components",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Modern UI Component Library</h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A comprehensive collection of 100+ beautiful UI components for your next project. Available in HTML, JSX,
              and TSX formats.
            </p>
            <div className="space-x-4">
              <Link href="/components">
                <Button className="h-11 px-8">
                  Browse Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" className="h-11 px-8">
                  Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="container space-y-8 py-12 md:py-16 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Featured Components</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore some of our most popular components. Each component is fully customizable and ready to use.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
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
          <div className="mx-auto text-center md:max-w-[58rem]">
            <Link href="/components">
              <Button variant="outline" className="h-11 px-8">
                View All Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️ by Ashish. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
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

