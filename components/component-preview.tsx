"use client"

import type React from "react"

import { useState } from "react"
import { Check, Clipboard } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "preview" | "code")}
            className="w-full"
          >
            <TabsList className="grid w-[200px] grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="ghost" size="sm" className="ml-auto h-8 gap-1 text-xs" onClick={copyToClipboard}>
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Clipboard className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </Button>
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

