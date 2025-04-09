"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  title: string
  description: string
  code: string
  preview: React.ReactNode
  className?: string
}

export function ComponentPreview({ title, description, code, preview, className }: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("space-y-5", className)}>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-lg border overflow-hidden">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="w-full">
            <div className="grid w-[200px] grid-cols-2">
              <button
                onClick={() => setActiveTab("preview")}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                  activeTab === "preview"
                    ? "bg-background text-foreground shadow-sm"
                    : "hover:bg-muted/50 hover:text-foreground",
                )}
              >
                Preview
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                  activeTab === "code"
                    ? "bg-background text-foreground shadow-sm"
                    : "hover:bg-muted/50 hover:text-foreground",
                )}
              >
                Code
              </button>
            </div>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-8 gap-1 text-xs ml-auto"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <div className="p-0">
          {activeTab === "preview" ? (
            <div className="flex min-h-[150px] items-center justify-center p-6">{preview}</div>
          ) : (
            <pre className="overflow-x-auto rounded-md bg-muted p-5">
              <code className="text-sm">{code}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}
