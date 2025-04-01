import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Carousel - UI Library",
  description: "Carousel component for cycling through elements",
}

export default function CarouselPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Carousel</h1>
          <p className="text-lg text-muted-foreground">
            A carousel component for cycling through elements like slides, cards, or images.
          </p>
        </div>

        <ComponentPreview
          title="Basic Carousel"
          description="A simple carousel with navigation buttons."
          code={`<div className="relative">
  <div className="overflow-hidden">
    <div className="flex transition-transform duration-300 ease-in-out">
      <div className="min-w-full px-4">
        <div className="bg-muted rounded-lg h-[300px] flex items-center justify-center">
          <span className="text-4xl font-bold">1</span>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute inset-y-0 left-0 flex items-center">
    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  </div>
  <div className="absolute inset-y-0 right-0 flex items-center">
    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  </div>
  <div className="absolute bottom-4 left-0 right-0">
    <div className="flex justify-center gap-2">
      <Button size="icon" variant="outline" className="h-2 w-2 rounded-full p-0 bg-primary" />
      <Button size="icon" variant="outline" className="h-2 w-2 rounded-full p-0" />
      <Button size="icon" variant="outline" className="h-2 w-2 rounded-full p-0" />
    </div>
  </div>
</div>`}
          preview={
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out">
                  <div className="min-w-full px-4">
                    <div className="bg-muted rounded-lg h-[300px] flex items-center justify-center">
                      <span className="text-4xl font-bold">1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous slide</span>
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>
              <div className="absolute bottom-4 left-0 right-0">
                <div className="flex justify-center gap-2">
                  <Button size="icon" variant="outline" className="h-2 w-2 rounded-full p-0 bg-primary" />
                  <Button size="icon" variant="outline" className="h-2 w-2 rounded-full p-0" />
                  <Button size="icon" variant="outline" className="h-2 w-2 rounded-full p-0" />
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Card Carousel"
          description="A carousel displaying cards in a row with navigation."
          code={`<div className="relative">
  <div className="overflow-hidden">
    <div className="flex gap-4 transition-transform duration-300 ease-in-out">
      <Card className="min-w-[250px] shadow-sm">
        <CardContent className="p-4">
          <div className="aspect-video bg-muted rounded-md mb-2"></div>
          <h3 className="font-medium mb-1">Card Title 1</h3>
          <p className="text-sm text-muted-foreground">Card description goes here.</p>
        </CardContent>
      </Card>
      <Card className="min-w-[250px] shadow-sm">
        <CardContent className="p-4">
          <div className="aspect-video bg-muted rounded-md mb-2"></div>
          <h3 className="font-medium mb-1">Card Title 2</h3>
          <p className="text-sm text-muted-foreground">Card description goes here.</p>
        </CardContent>
      </Card>
      <Card className="min-w-[250px] shadow-sm">
        <CardContent className="p-4">
          <div className="aspect-video bg-muted rounded-md mb-2"></div>
          <h3 className="font-medium mb-1">Card Title 3</h3>
          <p className="text-sm text-muted-foreground">Card description goes here.</p>
        </CardContent>
      </Card>
    </div>
  </div>
  <Button size="icon" variant="outline" className="absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full">
    <ChevronLeft className="h-4 w-4" />
    <span className="sr-only">Previous slide</span>
  </Button>
  <Button size="icon" variant="outline" className="absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full">
    <ChevronRight className="h-4 w-4" />
    <span className="sr-only">Next slide</span>
  </Button>
</div>`}
          preview={
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex gap-4 transition-transform duration-300 ease-in-out">
                  <Card className="min-w-[250px] shadow-sm">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-muted rounded-md mb-2"></div>
                      <h3 className="font-medium mb-1">Card Title 1</h3>
                      <p className="text-sm text-muted-foreground">Card description goes here.</p>
                    </CardContent>
                  </Card>
                  <Card className="min-w-[250px] shadow-sm">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-muted rounded-md mb-2"></div>
                      <h3 className="font-medium mb-1">Card Title 2</h3>
                      <p className="text-sm text-muted-foreground">Card description goes here.</p>
                    </CardContent>
                  </Card>
                  <Card className="min-w-[250px] shadow-sm">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-muted rounded-md mb-2"></div>
                      <h3 className="font-medium mb-1">Card Title 3</h3>
                      <p className="text-sm text-muted-foreground">Card description goes here.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <Button
                size="icon"
                variant="outline"
                className="absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          }
        />

        <ComponentPreview
          title="Responsive Image Carousel"
          description="A responsive carousel for displaying images with thumbnails."
          code={`<div className="space-y-4">
  <div className="relative overflow-hidden rounded-lg">
    <div className="aspect-[16/9] w-full bg-muted flex items-center justify-center">
      <img
        src="/placeholder.svg?height=400&width=800"
        alt="Featured image"
        className="object-cover"
      />
    </div>
    <Button size="icon" variant="ghost" className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80">
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous image</span>
    </Button>
    <Button size="icon" variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80">
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next image</span>
    </Button>
  </div>
  <div className="flex gap-2 overflow-auto pb-2">
    <button className="relative h-16 w-16 rounded-md overflow-hidden ring-2 ring-primary">
      <img
        src="/placeholder.svg?height=64&width=64"
        alt="Thumbnail 1"
        className="object-cover h-full w-full"
      />
    </button>
    <button className="relative h-16 w-16 rounded-md overflow-hidden hover:ring-2 hover:ring-primary">
      <img
        src="/placeholder.svg?height=64&width=64"
        alt="Thumbnail 2"
        className="object-cover h-full w-full"
      />
    </button>
    <button className="relative h-16 w-16 rounded-md overflow-hidden hover:ring-2 hover:ring-primary">
      <img
        src="/placeholder.svg?height=64&width=64"
        alt="Thumbnail 3"
        className="object-cover h-full w-full"
      />
    </button>
    <button className="relative h-16 w-16 rounded-md overflow-hidden hover:ring-2 hover:ring-primary">
      <img
        src="/placeholder.svg?height=64&width=64"
        alt="Thumbnail 4"
        className="object-cover h-full w-full"
      />
    </button>
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[16/9] w-full bg-muted flex items-center justify-center">
                  <img src="/placeholder.svg?height=400&width=800" alt="Featured image" className="object-cover" />
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
              <div className="flex gap-2 overflow-auto pb-2">
                <button className="relative h-16 w-16 rounded-md overflow-hidden ring-2 ring-primary">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Thumbnail 1"
                    className="object-cover h-full w-full"
                  />
                </button>
                <button className="relative h-16 w-16 rounded-md overflow-hidden hover:ring-2 hover:ring-primary">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Thumbnail 2"
                    className="object-cover h-full w-full"
                  />
                </button>
                <button className="relative h-16 w-16 rounded-md overflow-hidden hover:ring-2 hover:ring-primary">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Thumbnail 3"
                    className="object-cover h-full w-full"
                  />
                </button>
                <button className="relative h-16 w-16 rounded-md overflow-hidden hover:ring-2 hover:ring-primary">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Thumbnail 4"
                    className="object-cover h-full w-full"
                  />
                </button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

