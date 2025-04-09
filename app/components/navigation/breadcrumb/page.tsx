import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

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
          code={`<nav class="flex" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2">
    <li>
      <a href="#" class="text-gray-500 hover:text-gray-700">Home</a>
    </li>
    <li class="flex items-center">
      <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <a href="#" class="ml-2 text-gray-500 hover:text-gray-700">Products</a>
    </li>
    <li class="flex items-center">
      <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <a href="#" class="ml-2 text-gray-500 hover:text-gray-700">Categories</a>
    </li>
    <li class="flex items-center">
      <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <span class="ml-2 text-gray-900 font-medium">Electronics</span>
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
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">
                    Products
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">
                    Categories
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span className="ml-2 text-gray-900 font-medium">Electronics</span>
                </li>
              </ol>
            </nav>
          }
        />

        <ComponentPreview
          title="Breadcrumb with Icons"
          description="Breadcrumb with icons for visual cues."
          code={`<nav class="flex" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2">
    <li>
      <a href="#" class="flex items-center text-gray-500 hover:text-gray-700">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="ml-1">Home</span>
      </a>
    </li>
    <li class="flex items-center">
      <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <a href="#" class="ml-2 flex items-center text-gray-500 hover:text-gray-700">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="ml-1">Projects</span>
      </a>
    </li>
    <li class="flex items-center">
      <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <span class="ml-2 flex items-center text-gray-900 font-medium">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span class="ml-1">Project Report</span>
      </span>
    </li>
  </ol>
</nav>`}
          preview={
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="#" className="flex items-center text-gray-500 hover:text-gray-700">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className="ml-1">Home</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <a href="#" className="ml-2 flex items-center text-gray-500 hover:text-gray-700">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span className="ml-1">Projects</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span className="ml-2 flex items-center text-gray-900 font-medium">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
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
          code={`<nav class="flex" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2">
    <li class="hidden sm:inline-flex">
      <a href="#" class="text-gray-500 hover:text-gray-700">Home</a>
    </li>
    <li class="hidden sm:inline-flex items-center">
      <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <a href="#" class="ml-2 text-gray-500 hover:text-gray-700">Account</a>
    </li>
    <li class="hidden sm:inline-flex items-center">
      <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <a href="#" class="ml-2 text-gray-500 hover:text-gray-700">Settings</a>
    </li>
    <li class="sm:hidden">
      <a href="#" class="text-gray-500 hover:text-gray-700">...</a>
    </li>
    <li class="flex items-center">
      <svg class="h-4 w-4 text-gray-500 sm:inline-flex hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <span class="ml-2 text-gray-900 font-medium">Profile</span>
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
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">
                    Account
                  </a>
                </li>
                <li className="hidden sm:inline-flex items-center">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
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
                  <svg
                    className="h-4 w-4 text-gray-500 sm:inline-flex hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span className="ml-2 text-gray-900 font-medium">Profile</span>
                </li>
              </ol>
            </nav>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This breadcrumb component is implemented using pure HTML and Tailwind CSS classes. It provides a way to show
            navigation hierarchy.
          </p>
          <p className="mt-2">The breadcrumb includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Proper semantic HTML structure with nav and ol elements</li>
            <li>Separator icons between breadcrumb items</li>
            <li>Support for icons in breadcrumb items</li>
            <li>Responsive design that collapses on smaller screens</li>
            <li>Proper ARIA attributes for accessibility</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML with the Tailwind classes. You can customize the
            appearance by modifying the classes.
          </p>
        </div>
      </div>
    </div>
  )
}
