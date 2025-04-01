import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertCircle, Info, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Alert - UI Library",
  description: "Alert component for feedback messages",
}

export default function AlertPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
          <p className="text-lg text-muted-foreground">An alert component for displaying important messages.</p>
        </div>

        <ComponentPreview
          title="Default Alert"
          description="The default alert style."
          code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
          preview={
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>You can add components to your app using the cli.</AlertDescription>
            </Alert>
          }
        />

        <ComponentPreview
          title="Alert Variants"
          description="Alerts in different variants for different types of messages."
          code={`<div className="space-y-4">
  <Alert variant="default">
    <Info className="h-4 w-4" />
    <AlertTitle>Information</AlertTitle>
    <AlertDescription>
      This is an informational message.
    </AlertDescription>
  </Alert>
  
  <Alert variant="destructive">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Something went wrong. Please try again later.
    </AlertDescription>
  </Alert>
  
  <Alert className="border-green-500 text-green-800 dark:text-green-400">
    <CheckCircle className="h-4 w-4" />
    <AlertTitle>Success</AlertTitle>
    <AlertDescription>
      Your changes have been saved successfully.
    </AlertDescription>
  </Alert>
  
  <Alert className="border-yellow-500 text-yellow-800 dark:text-yellow-400">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Warning</AlertTitle>
    <AlertDescription>
      Please review your information before continuing.
    </AlertDescription>
  </Alert>
</div>`}
          preview={
            <div className="space-y-4">
              <Alert variant="default">
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is an informational message.</AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try again later.</AlertDescription>
              </Alert>

              <Alert className="border-green-500 text-green-800 dark:text-green-400">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Your changes have been saved successfully.</AlertDescription>
              </Alert>

              <Alert className="border-yellow-500 text-yellow-800 dark:text-yellow-400">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>Please review your information before continuing.</AlertDescription>
              </Alert>
            </div>
          }
        />
      </div>
    </div>
  )
}

