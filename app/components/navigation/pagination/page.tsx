import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

export const metadata: Metadata = {
  title: "Pagination - UI Library",
  description: "Pagination component for navigating through pages",
}

export default function PaginationPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Pagination</h1>
          <p className="text-lg text-muted-foreground">A pagination component for navigating through multiple pages.</p>
        </div>

        <ComponentPreview
          title="Default Pagination"
          description="The default pagination style."
          code={`<nav aria-label="Pagination" className="flex justify-center">
  <ul className="flex items-center space-x-1">
    <li>
      <Button variant="outline" size="icon" disabled>
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous Page</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground">
        1
        <span className="sr-only">Page 1</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon">
        2
        <span className="sr-only">Page 2</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon">
        3
        <span className="sr-only">Page 3</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next Page</span>
      </Button>
    </li>
  </ul>
</nav>`}
          preview={
            <nav aria-label="Pagination" className="flex justify-center">
              <ul className="flex items-center space-x-1">
                <li>
                  <Button variant="outline" size="icon" disabled>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous Page</span>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  >
                    1<span className="sr-only">Page 1</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon">
                    2<span className="sr-only">Page 2</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon">
                    3<span className="sr-only">Page 3</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next Page</span>
                  </Button>
                </li>
              </ul>
            </nav>
          }
        />

        <ComponentPreview
          title="Pagination with Ellipsis"
          description="Pagination with ellipsis for many pages."
          code={`<nav aria-label="Pagination" className="flex justify-center">
  <ul className="flex items-center space-x-1">
    <li>
      <Button variant="outline" size="icon">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous Page</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon">
        1
        <span className="sr-only">Page 1</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon" disabled>
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon">
        4
        <span className="sr-only">Page 4</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground">
        5
        <span className="sr-only">Page 5</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon">
        6
        <span className="sr-only">Page 6</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon" disabled>
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon">
        10
        <span className="sr-only">Page 10</span>
      </Button>
    </li>
    <li>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next Page</span>
      </Button>
    </li>
  </ul>
</nav>`}
          preview={
            <nav aria-label="Pagination" className="flex justify-center">
              <ul className="flex items-center space-x-1">
                <li>
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous Page</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon">
                    1<span className="sr-only">Page 1</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon" disabled>
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More pages</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon">
                    4<span className="sr-only">Page 4</span>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  >
                    5<span className="sr-only">Page 5</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon">
                    6<span className="sr-only">Page 6</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon" disabled>
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More pages</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon">
                    10
                    <span className="sr-only">Page 10</span>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next Page</span>
                  </Button>
                </li>
              </ul>
            </nav>
          }
        />

        <ComponentPreview
          title="Simple Pagination"
          description="A simpler pagination with just previous and next buttons."
          code={`<nav aria-label="Pagination" className="flex justify-between">
  <Button variant="outline" className="gap-1">
    <ChevronLeft className="h-4 w-4" />
    Previous
  </Button>
  <div className="flex items-center text-sm text-muted-foreground">
    Page 5 of 10
  </div>
  <Button variant="outline" className="gap-1">
    Next
    <ChevronRight className="h-4 w-4" />
  </Button>
</nav>`}
          preview={
            <nav aria-label="Pagination" className="flex justify-between">
              <Button variant="outline" className="gap-1">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <div className="flex items-center text-sm text-muted-foreground">Page 5 of 10</div>
              <Button variant="outline" className="gap-1">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          }
        />
      </div>
    </div>
  )
}

