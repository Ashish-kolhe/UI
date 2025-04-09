import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Heart, Trash, Settings, Bell, Share, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Icon Button - UiforU",
  description: "A button component with icon only for actions and commands.",
}

export default function IconButtonPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Icon Button</h1>
        <p className="text-gray-500 mt-2">A button component with icon only for actions and commands.</p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Variants"
          description="Different styles for different contexts."
          preview={
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Like</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Star className="h-5 w-5" />
                <span className="sr-only">Star</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-gray-800 text-white hover:bg-gray-900 border-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-transparent text-gray-700 hover:bg-gray-100 border-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Share className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-red-600 text-white hover:bg-red-700 border-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Trash className="h-5 w-5" />
                <span className="sr-only">Delete</span>
              </button>
            </div>
          }
          code={`<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <Heart className="h-5 w-5" />
  <span className="sr-only">Like</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <Star className="h-5 w-5" />
  <span className="sr-only">Star</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-gray-800 text-white hover:bg-gray-900 border-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <Settings className="h-5 w-5" />
  <span className="sr-only">Settings</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <Bell className="h-5 w-5" />
  <span className="sr-only">Notifications</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-transparent text-gray-700 hover:bg-gray-100 border-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <Share className="h-5 w-5" />
  <span className="sr-only">Share</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-red-600 text-white hover:bg-red-700 border-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <Trash className="h-5 w-5" />
  <span className="sr-only">Delete</span>
</button>`}
        />

        <ComponentPreview
          title="Sizes"
          description="Different sizes for different contexts."
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center justify-center rounded-md h-8 w-8 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Like</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Like</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-12 w-12 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Heart className="h-6 w-6" />
                <span className="sr-only">Like</span>
              </button>
            </div>
          }
          code={`<button className="inline-flex items-center justify-center rounded-md h-8 w-8 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <Heart className="h-4 w-4" />
  <span className="sr-only">Like</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <Heart className="h-5 w-5" />
  <span className="sr-only">Like</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-12 w-12 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <Heart className="h-6 w-6" />
  <span className="sr-only">Like</span>
</button>`}
        />

        <ComponentPreview
          title="Loading State"
          description="Show a loading spinner when the button is processing."
          preview={
            <div className="flex flex-wrap gap-4">
              <button className="relative inline-flex items-center justify-center rounded-md h-10 w-10 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-wait">
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
                <span className="sr-only">Loading</span>
              </button>

              <button className="relative inline-flex items-center justify-center rounded-md h-10 w-10 bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-wait">
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
                <span className="sr-only">Loading</span>
              </button>
            </div>
          }
          code={`<button className="relative inline-flex items-center justify-center rounded-md h-10 w-10 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-wait">
  <span className="absolute inset-0 flex items-center justify-center">
    <svg 
      className="animate-spin h-5 w-5" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      ></circle>
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </span>
  <span className="sr-only">Loading</span>
</button>`}
        />

        <ComponentPreview
          title="With Animation Effects"
          description="Add animation effects for better user feedback."
          preview={
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group">
                <Heart className="h-5 w-5 transform transition-transform duration-200 group-hover:scale-110 group-active:scale-95" />
                <span className="sr-only">Like</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
                <Bell className="h-5 w-5 transform transition-all duration-200 group-hover:text-white relative z-10" />
                <span className="sr-only">Notifications</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-red-600 text-white hover:bg-red-700 border-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group">
                <Trash className="h-5 w-5 transform transition-all duration-200 group-hover:rotate-12" />
                <span className="sr-only">Delete</span>
              </button>

              <button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-gray-800 text-white hover:bg-gray-900 border-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative group">
                <span className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></span>
                <Settings className="h-5 w-5 relative" />
                <span className="sr-only">Settings</span>
              </button>
            </div>
          }
          code={`<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-blue-600 text-white hover:bg-blue-700 border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group">
  <Heart className="h-5 w-5 transform transition-transform duration-200 group-hover:scale-110 group-active:scale-95" />
  <span className="sr-only">Like</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group overflow-hidden">
  <div className="absolute inset-0 bg-blue-600 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
  <Bell className="h-5 w-5 transform transition-all duration-200 group-hover:text-white relative z-10" />
  <span className="sr-only">Notifications</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-red-600 text-white hover:bg-red-700 border-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group">
  <Trash className="h-5 w-5 transform transition-all duration-200 group-hover:rotate-12" />
  <span className="sr-only">Delete</span>
</button>

<button className="inline-flex items-center justify-center rounded-md h-10 w-10 bg-gray-800 text-white hover:bg-gray-900 border-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative group">
  <span className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></span>
  <Settings className="h-5 w-5 relative" />
  <span className="sr-only">Settings</span>
</button>`}
        />
      </div>
    </div>
  )
}
