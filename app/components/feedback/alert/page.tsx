import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

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
          code={`<div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-4 w-4">
    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3z"></path>
  </svg>
  <h5 class="mb-1 font-medium leading-none tracking-tight">Heads up!</h5>
  <div class="text-sm [&_p]:leading-relaxed">
    You can add components to your app using the cli.
  </div>
</div>`}
          preview={
            <div className="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground">
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
                className="h-4 w-4"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3z"></path>
              </svg>
              <h5 className="mb-1 font-medium leading-none tracking-tight">Heads up!</h5>
              <div className="text-sm [&_p]:leading-relaxed">You can add components to your app using the cli.</div>
            </div>
          }
        />

        <ComponentPreview
          title="Alert Variants"
          description="Alerts in different variants for different types of messages."
          code={`<div class="space-y-4">
  <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-4 w-4">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16v-4"></path>
      <path d="M12 8h.01"></path>
    </svg>
    <h5 class="mb-1 font-medium leading-none tracking-tight">Information</h5>
    <div class="text-sm [&_p]:leading-relaxed">
      This is an informational message.
    </div>
  </div>

  <div class="relative w-full rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-destructive">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-4 w  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-4 w-4">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 8v4"></path>
    <path d="M12 16h.01"></path>
  </svg>
  <h5 class="mb-1 font-medium leading-none tracking-tight">Error</h5>
  <div class="text-sm [&_p]:leading-relaxed">
    Something went wrong. Please try again later.
  </div>
</div>

<div class="relative w-full rounded-lg border border-green-500 bg-green-500/10 p-4 text-green-800 dark:text-green-400 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-green-500">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-4 w-4">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
  <h5 class="mb-1 font-medium leading-none tracking-tight">Success</h5>
  <div class="text-sm [&_p]:leading-relaxed">
    Your changes have been saved successfully.
  </div>
</div>

<div class="relative w-full rounded-lg border border-yellow-500 bg-yellow-500/10 p-4 text-yellow-800 dark:text-yellow-400 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-yellow-500">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-4 w-4">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
  <h5 class="mb-1 font-medium leading-none tracking-tight">Warning</h5>
  <div class="text-sm [&_p]:leading-relaxed">
    Please review your information before continuing.
  </div>
</div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground">
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
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <h5 className="mb-1 font-medium leading-none tracking-tight">Information</h5>
                <div className="text-sm [&_p]:leading-relaxed">This is an informational message.</div>
              </div>

              <div className="relative w-full rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-destructive">
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
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
                <h5 className="mb-1 font-medium leading-none tracking-tight">Error</h5>
                <div className="text-sm [&_p]:leading-relaxed">Something went wrong. Please try again later.</div>
              </div>

              <div className="relative w-full rounded-lg border border-green-500 bg-green-500/10 p-4 text-green-800 dark:text-green-400 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-green-500">
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
                  className="h-4 w-4"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h5 className="mb-1 font-medium leading-none tracking-tight">Success</h5>
                <div className="text-sm [&_p]:leading-relaxed">Your changes have been saved successfully.</div>
              </div>

              <div className="relative w-full rounded-lg border border-yellow-500 bg-yellow-500/10 p-4 text-yellow-800 dark:text-yellow-400 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-yellow-500">
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
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h5 className="mb-1 font-medium leading-none tracking-tight">Warning</h5>
                <div className="text-sm [&_p]:leading-relaxed">Please review your information before continuing.</div>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This alert component is implemented using pure HTML and Tailwind CSS classes. It provides a way to display
            important messages to users.
          </p>
          <p className="mt-2">The alert includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>A container with border and rounded corners</li>
            <li>An optional icon for visual cues</li>
            <li>A title for the alert message</li>
            <li>Content area for the message details</li>
            <li>Different variants for different types of messages (info, error, success, warning)</li>
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
