import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Color Picker - UI Library",
  description: "Color picker component for selecting colors",
}

export default function ColorPickerPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Color Picker</h1>
          <p className="text-lg text-muted-foreground">
            A color picker component for selecting and customizing colors.
          </p>
        </div>

        <ComponentPreview
          title="Basic Color Picker"
          description="A simple color input field."
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="color">Color</Label>
  <Input type="color" id="color" defaultValue="#3b82f6" className="h-10 w-full" />
</div>`}
          preview={
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="color">Color</Label>
              <Input type="color" id="color" defaultValue="#3b82f6" className="h-10 w-full" />
            </div>
          }
        />

        <ComponentPreview
          title="Color Picker with Swatches"
          description="A color picker with predefined color swatches."
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="color-swatches">Color</Label>
  <div className="flex flex-col gap-2">
    <div className="flex gap-1">
      <Button
        type="button"
        variant="outline"
        className="h-8 w-8 rounded-md p-0"
        style={{ backgroundColor: "#ef4444" }}
      >
        <span className="sr-only">Red</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-8 w-8 rounded-md p-0"
        style={{ backgroundColor: "#f97316" }}
      >
        <span className="sr-only">Orange</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-8 w-8 rounded-md p-0"
        style={{ backgroundColor: "#eab308" }}
      >
        <span className="sr-only">Yellow</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-8 w-8 rounded-md p-0"
        style={{ backgroundColor: "#22c55e" }}
      >
        <span className="sr-only">Green</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-8 w-8 rounded-md p-0"
        style={{ backgroundColor: "#3b82f6" }}
      >
        <span className="sr-only">Blue</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-8 w-8 rounded-md p-0"
        style={{ backgroundColor: "#8b5cf6" }}
      >
        <span className="sr-only">Purple</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-8 w-8 rounded-md p-0"
        style={{ backgroundColor: "#ec4899" }}
      >
        <span className="sr-only">Pink</span>
      </Button>
    </div>
    <Input type="color" id="color-swatches" defaultValue="#3b82f6" className="h-10 w-full" />
  </div>
</div>`}
          preview={
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="color-swatches">Color</Label>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-8 w-8 rounded-md p-0"
                    style={{ backgroundColor: "#ef4444" }}
                  >
                    <span className="sr-only">Red</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-8 w-8 rounded-md p-0"
                    style={{ backgroundColor: "#f97316" }}
                  >
                    <span className="sr-only">Orange</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-8 w-8 rounded-md p-0"
                    style={{ backgroundColor: "#eab308" }}
                  >
                    <span className="sr-only">Yellow</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-8 w-8 rounded-md p-0"
                    style={{ backgroundColor: "#22c55e" }}
                  >
                    <span className="sr-only">Green</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-8 w-8 rounded-md p-0"
                    style={{ backgroundColor: "#3b82f6" }}
                  >
                    <span className="sr-only">Blue</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-8 w-8 rounded-md p-0"
                    style={{ backgroundColor: "#8b5cf6" }}
                  >
                    <span className="sr-only">Purple</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-8 w-8 rounded-md p-0"
                    style={{ backgroundColor: "#ec4899" }}
                  >
                    <span className="sr-only">Pink</span>
                  </Button>
                </div>
                <Input type="color" id="color-swatches" defaultValue="#3b82f6" className="h-10 w-full" />
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Advanced Color Picker"
          description="A more advanced color picker with hex, RGB, and HSL inputs."
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="color-advanced">Color</Label>
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        className="w-full justify-start text-left font-normal"
      >
        <div className="flex items-center gap-2">
          <div
            className="h-4 w-4 rounded-full border"
            style={{ backgroundColor: "#3b82f6" }}
          />
          <span>#3b82f6</span>
        </div>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-64">
      <div className="grid gap-4">
        <div className="space-y-2">
          <div
            className="h-40 rounded-md border"
            style={{ backgroundColor: "#3b82f6" }}
          />
          <div className="grid grid-cols-5 gap-1">
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#ef4444" }}
            >
              <span className="sr-only">Red</span>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#f97316" }}
            >
              <span className="sr-only">Orange</span>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#eab308" }}
            >
              <span className="sr-only">Yellow</span>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#22c55e" }}
            >
              <span className="sr-only">Green</span>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#3b82f6" }}
            >
              <span className="sr-only">Blue</span>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#8b5cf6" }}
            >
              <span className="sr-only">Purple</span>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#ec4899" }}
            >
              <span className="sr-only">Pink</span>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#f43f5e" }}
            >
              <span className="sr-only">Rose</span>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#a855f7" }}
            >
              <span className="sr-only">Violet</span>
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-md p-0"
              style={{ backgroundColor: "#06b6d4" }}
            >
              <span className="sr-only">Cyan</span>
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Tabs defaultValue="hex">
            <TabsList className="w-full">
              <TabsTrigger value="hex" className="flex-1">Hex</TabsTrigger>
              <TabsTrigger value="rgb" className="flex-1">RGB</TabsTrigger>
              <TabsTrigger value="hsl" className="flex-1">HSL</TabsTrigger>
            </TabsList>
            <TabsContent value="hex" className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="hex-color">Hex</Label>
                <Input id="hex-color" defaultValue="#3b82f6" />
              </div>
            </TabsContent>
            <TabsContent value="rgb" className="space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <Label htmlFor="r">R</Label>
                  <Input id="r" defaultValue="59" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="g">G</Label>
                  <Input id="g" defaultValue="130" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="b">B</Label>
                  <Input id="b" defaultValue="246" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="hsl" className="space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <Label htmlFor="h">H</Label>
                  <Input id="h" defaultValue="217" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="s">S</Label>
                  <Input id="s" defaultValue="91%" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="l">L</Label>
                  <Input id="l" defaultValue="60%" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</div>`}
          preview={
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="color-advanced">Color</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: "#3b82f6" }} />
                      <span>#3b82f6</span>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <div className="h-40 rounded-md border" style={{ backgroundColor: "#3b82f6" }} />
                      <div className="grid grid-cols-5 gap-1">
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#ef4444" }}
                        >
                          <span className="sr-only">Red</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#f97316" }}
                        >
                          <span className="sr-only">Orange</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#eab308" }}
                        >
                          <span className="sr-only">Yellow</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#22c55e" }}
                        >
                          <span className="sr-only">Green</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#3b82f6" }}
                        >
                          <span className="sr-only">Blue</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#8b5cf6" }}
                        >
                          <span className="sr-only">Purple</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#ec4899" }}
                        >
                          <span className="sr-only">Pink</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#f43f5e" }}
                        >
                          <span className="sr-only">Rose</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#a855f7" }}
                        >
                          <span className="sr-only">Violet</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-8 w-8 rounded-md p-0"
                          style={{ backgroundColor: "#06b6d4" }}
                        >
                          <span className="sr-only">Cyan</span>
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Tabs defaultValue="hex">
                        <TabsList className="w-full">
                          <TabsTrigger value="hex" className="flex-1">
                            Hex
                          </TabsTrigger>
                          <TabsTrigger value="rgb" className="flex-1">
                            RGB
                          </TabsTrigger>
                          <TabsTrigger value="hsl" className="flex-1">
                            HSL
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="hex" className="space-y-2">
                          <div className="space-y-1">
                            <Label htmlFor="hex-color">Hex</Label>
                            <Input id="hex-color" defaultValue="#3b82f6" />
                          </div>
                        </TabsContent>
                        <TabsContent value="rgb" className="space-y-2">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-1">
                              <Label htmlFor="r">R</Label>
                              <Input id="r" defaultValue="59" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="g">G</Label>
                              <Input id="g" defaultValue="130" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="b">B</Label>
                              <Input id="b" defaultValue="246" />
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="hsl" className="space-y-2">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-1">
                              <Label htmlFor="h">H</Label>
                              <Input id="h" defaultValue="217" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="s">S</Label>
                              <Input id="s" defaultValue="91%" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="l">L</Label>
                              <Input id="l" defaultValue="60%" />
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          }
        />
      </div>
    </div>
  )
}

