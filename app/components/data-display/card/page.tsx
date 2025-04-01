import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Card - UI Library",
  description: "Card component for displaying content",
}

export default function CardPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Card</h1>
          <p className="text-lg text-muted-foreground">
            A card component for displaying content in a contained format.
          </p>
        </div>

        <ComponentPreview
          title="Simple Card"
          description="A basic card with header, content, and footer."
          code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`}
          preview={
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          }
        />

        <ComponentPreview
          title="Notification Card"
          description="A card styled as a notification."
          code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Notification</CardTitle>
    <CardDescription>You have a new message</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Hello! This is a notification message that requires your attention.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="ghost">Dismiss</Button>
    <Button>View</Button>
  </CardFooter>
</Card>`}
          preview={
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Notification</CardTitle>
                <CardDescription>You have a new message</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Hello! This is a notification message that requires your attention.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Dismiss</Button>
                <Button>View</Button>
              </CardFooter>
            </Card>
          }
        />

        <ComponentPreview
          title="Product Card"
          description="A card displaying product information."
          code={`<Card className="w-[350px]">
  <CardHeader>
    <div className="h-40 rounded-md bg-muted"></div>
  </CardHeader>
  <CardContent className="pt-4">
    <CardTitle>Product Name</CardTitle>
    <CardDescription className="pt-2">$99.99</CardDescription>
    <p className="pt-4 text-sm text-muted-foreground">
      This is a description of the product with its features and benefits.
    </p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Add to Cart</Button>
  </CardFooter>
</Card>`}
          preview={
            <Card className="w-[350px]">
              <CardHeader>
                <div className="h-40 rounded-md bg-muted"></div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle>Product Name</CardTitle>
                <CardDescription className="pt-2">$99.99</CardDescription>
                <p className="pt-4 text-sm text-muted-foreground">
                  This is a description of the product with its features and benefits.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          }
        />
      </div>
    </div>
  )
}

