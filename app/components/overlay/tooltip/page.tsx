import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info, Settings, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Tooltip - UI Library",
  description: "Tooltip component for displaying information on hover",
}

export default function TooltipPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
          <p className="text-lg text-muted-foreground">
            A tooltip component for displaying additional information on hover.
          </p>
        </div>

        <ComponentPreview
          title="Default Tooltip"
          description="The default tooltip style."
          code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover Me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
          preview={
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover Me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          }
        />

        <ComponentPreview
          title="Tooltip with Icon"
          description="Tooltip on an icon for contextual help."
          code={`<TooltipProvider>
  <div className="flex items-center space-x-4">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="h-4 w-4" />
          <span className="sr-only">Info</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Information about this feature</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Adjust your settings</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-4 w-4" />
          <span className="sr-only">Help</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Get help with this page</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`}
          preview={
            <TooltipProvider>
              <div className="flex items-center space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">Info</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Information about this feature</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                      <span className="sr-only">Settings</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Adjust your settings</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <HelpCircle className="h-4 w-4" />
                      <span className="sr-only">Help</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Get help with this page</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          }
        />

        <ComponentPreview
          title="Tooltip Positions"
          description="Tooltips in different positions."
          code={`<TooltipProvider>
  <div className="flex flex-wrap items-center justify-center gap-4">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top</Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>Tooltip on top</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Right</Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>Tooltip on right</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Tooltip on bottom</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Left</Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Tooltip on left</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`}
          preview={
            <TooltipProvider>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Tooltip on top</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Tooltip on right</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Tooltip on bottom</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Left</Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>Tooltip on left</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          }
        />
      </div>
    </div>
  )
}

