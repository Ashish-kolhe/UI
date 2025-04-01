import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { ChevronRight, Home, File, Folder } from "lucide-react"

export const metadata: Metadata = {
  title: "Breadcrumb - UI Library",
  description: "Breadcrumb component for navigation",
}

export default function BreadcrumbPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Breadcrumb</h1>
          <p className="text-lg text-muted-foreground">A breadcrumb component for showing navigation hierarchy.</p>
        </div>

        <ComponentPreview
          title="Default Breadcrumb"
          description="The default breadcrumb style."
          code={`<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li>
      <a href="#" className="text-gray-500 hover:text-gray-700">Home</a>
    </li>
    <li className="flex items-center">
      <ChevronRight className="h-4 w-4 text-gray-500" />
      <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">Products</a>
    </li>
    <li className="flex items-center">
      <ChevronRight className="h-4 w-4 text-gray-500" />
      <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">Categories</a>
    </li>
    <li className="flex items-center">
      <ChevronRight className="h-4 w-4 text-gray-500" />
      <span className="ml-2 text-gray-900 font-medium">Electronics</span>
    </li>
  </ol>
</nav>`}
          preview={
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Home
                  </a>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                  <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">
                    Products
                  </a>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                  <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">
                    Categories
                  </a>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                  <span className="ml-2 text-gray-900 font-medium">Electronics</span>
                </li>
              </ol>
            </nav>
          }
        />

        <ComponentPreview
          title="Breadcrumb with Icons"
          description="Breadcrumb with icons for visual cues."
          code={`<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li>
      <a href="#" className="flex items-center text-gray-500 hover:text-gray-700">
        <Home className="h-4 w-4" />
        <span className="ml-1">Home</span>
      </a>
    </li>
    <li className="flex items-center">
      <ChevronRight className="h-4 w-4 text-gray-500" />
      <a href="#" className="ml-2 flex items-center text-gray-500 hover:text-gray-700">
        <Folder className="h-4 w-4" />
        <span className="ml-1">Projects</span>
      </a>
    </li>
    <li className="flex items-center">
      <ChevronRight className="h-4 w-4 text-gray-500" />
      <span className="ml-2 flex items-center text-gray-900 font-medium">
        <File className="h-4 w-4" />
        <span className="ml-1">Project Report</span>
      </span>
    </li>
  </ol>
</nav>`}
          preview={
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="#" className="flex items-center text-gray-500 hover:text-gray-700">
                    <Home className="h-4 w-4" />
                    <span className="ml-1">Home</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                  <a href="#" className="ml-2 flex items-center text-gray-500 hover:text-gray-700">
                    <Folder className="h-4 w-4" />
                    <span className="ml-1">Projects</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                  <span className="ml-2 flex items-center text-gray-900 font-medium">
                    <File className="h-4 w-4" />
                    <span className="ml-1">Project Report</span>
                  </span>
                </li>
              </ol>
            </nav>
          }
        />

        <ComponentPreview
          title="Responsive Breadcrumb"
          description="Breadcrumb that collapses on smaller screens."
          code={`<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li className="hidden sm:inline-flex">
      <a href="#" className="text-gray-500 hover:text-gray-700">Home</a>
    </li>
    <li className="hidden sm:inline-flex items-center">
      <ChevronRight className="h-4 w-4 text-gray-500" />
      <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">Account</a>
    </li>
    <li className="hidden sm:inline-flex items-center">
      <ChevronRight className="h-4 w-4 text-gray-500" />
      <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">Settings</a>
    </li>
    <li className="sm:hidden">
      <a href="#" className="text-gray-500 hover:text-gray-700">...</a>
    </li>
    <li className="flex items-center">
      <ChevronRight className="h-4 w-4 text-gray-500 sm:inline-flex hidden" />
      <span className="ml-2 text-gray-900 font-medium">Profile</span>
    </li>
  </ol>
</nav>`}
          preview={
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li className="hidden sm:inline-flex">
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Home
                  </a>
                </li>
                <li className="hidden sm:inline-flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                  <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">
                    Account
                  </a>
                </li>
                <li className="hidden sm:inline-flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                  <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">
                    Settings
                  </a>
                </li>
                <li className="sm:hidden">
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    ...
                  </a>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-500 sm:inline-flex hidden" />
                  <span className="ml-2 text-gray-900 font-medium">Profile</span>
                </li>
              </ol>
            </nav>
          }
        />
      </div>
    </div>
  )
}

