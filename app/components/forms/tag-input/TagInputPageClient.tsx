"use client"

import { ComponentPreview } from "@/components/component-preview"
import { TagInput } from "@/components/ui/tag-input"
import { useState } from "react"
import { X } from "lucide-react"

export default function TagInputPageClient() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Tag Input</h1>
          <p className="text-lg text-muted-foreground">A tag input component for entering multiple tags or keywords.</p>
        </div>

        <ComponentPreview
          title="Basic Tag Input"
          description="A basic tag input component."
          code={`<div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white cursor-text">
  <div className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
    <span>react</span>
    <button
      type="button"
      className="text-blue-500 hover:text-blue-700 focus:outline-none"
      aria-label="Remove react"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <div className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
    <span>javascript</span>
    <button
      type="button"
      className="text-blue-500 hover:text-blue-700 focus:outline-none"
      aria-label="Remove javascript"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <input
    type="text"
    placeholder=""
    className="flex-grow min-w-[120px] outline-none bg-transparent text-sm"
    aria-label="Add tags"
  />
</div>`}
          preview={
            <div className="w-full max-w-md">
              <TagInputClient />
            </div>
          }
        />

        <ComponentPreview
          title="With Placeholder"
          description="Tag input with a placeholder when empty."
          code={`<div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white cursor-text">
  <input
    type="text"
    placeholder="Add technologies..."
    className="flex-grow min-w-[120px] outline-none bg-transparent text-sm"
    aria-label="Add tags"
  />
</div>`}
          preview={
            <div className="w-full max-w-md">
              <EmptyTagInputClient />
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Tag Input"
          description="A disabled tag input component."
          code={`<div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed">
  <div className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-md opacity-60">
    <span>react</span>
  </div>
  <div className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-md opacity-60">
    <span>javascript</span>
  </div>
  <div className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-md opacity-60">
    <span>typescript</span>
  </div>
  <input
    type="text"
    placeholder=""
    className="flex-grow min-w-[120px] outline-none bg-transparent text-sm"
    disabled
    aria-label="Add tags"
  />
</div>`}
          preview={
            <div className="w-full max-w-md">
              <DisabledTagInputClient />
            </div>
          }
        />

        <ComponentPreview
          title="Colored Tags"
          description="Tag input with custom colored tags."
          code={`<div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white cursor-text">
  <div className="flex items-center gap-1 px-2 py-1 text-sm bg-red-100 text-red-800 rounded-md hover:bg-red-200">
    <span>important</span>
    <button
      type="button"
      className="text-red-500 hover:text-red-700 focus:outline-none"
      aria-label="Remove important"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <div className="flex items-center gap-1 px-2 py-1 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200">
    <span>completed</span>
    <button
      type="button"
      className="text-green-500 hover:text-green-700 focus:outline-none"
      aria-label="Remove completed"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <div className="flex items-center gap-1 px-2 py-1 text-sm bg-purple-100 text-purple-800 rounded-md hover:bg-purple-200">
    <span>feature</span>
    <button
      type="button"
      className="text-purple-500 hover:text-purple-700 focus:outline-none"
      aria-label="Remove feature"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <input
    type="text"
    placeholder=""
    className="flex-grow min-w-[120px] outline-none bg-transparent text-sm"
    aria-label="Add tags"
  />
</div>`}
          preview={
            <div className="w-full max-w-md">
              <ColoredTagInputClient />
            </div>
          }
        />
      </div>
    </div>
  )
}

// Client Components
function TagInputClient() {
  const [tags, setTags] = useState(["react", "javascript"])
  return <TagInput tags={tags} onChange={setTags} />
}

function EmptyTagInputClient() {
  const [tags, setTags] = useState<string[]>([])
  return <TagInput tags={tags} onChange={setTags} placeholder="Add technologies..." />
}

function DisabledTagInputClient() {
  const [tags, setTags] = useState(["react", "javascript", "typescript"])
  return <TagInput tags={tags} onChange={setTags} disabled />
}

function ColoredTagInputClient() {
  const [tags, setTags] = useState(["important", "completed", "feature"])
  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white cursor-text">
      <div className="flex items-center gap-1 px-2 py-1 text-sm bg-red-100 text-red-800 rounded-md hover:bg-red-200">
        <span>important</span>
        <button
          type="button"
          className="text-red-500 hover:text-red-700 focus:outline-none"
          aria-label="Remove important"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
      <div className="flex items-center gap-1 px-2 py-1 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200">
        <span>completed</span>
        <button
          type="button"
          className="text-green-500 hover:text-green-700 focus:outline-none"
          aria-label="Remove completed"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
      <div className="flex items-center gap-1 px-2 py-1 text-sm bg-purple-100 text-purple-800 rounded-md hover:bg-purple-200">
        <span>feature</span>
        <button
          type="button"
          className="text-purple-500 hover:text-purple-700 focus:outline-none"
          aria-label="Remove feature"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
      <input
        type="text"
        placeholder=""
        className="flex-grow min-w-[120px] outline-none bg-transparent text-sm"
        aria-label="Add tags"
      />
    </div>
  )
}
