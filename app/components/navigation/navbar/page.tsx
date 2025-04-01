import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, User, Menu, ShoppingCart, Heart, LogIn } from "lucide-react"

export const metadata: Metadata = {
  title: "Navbar - UI Library",
  description: "Navbar component for site navigation",
}

export default function NavbarPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Navbar</h1>
          <p className="text-lg text-muted-foreground">A navbar component for site navigation and branding.</p>
        </div>

        <ComponentPreview
          title="Basic Navbar"
          description="A simple navbar with logo and navigation links."
          code={`<header className="border-b">
  <div className="container flex h-16 items-center justify-between">
    <div className="flex items-center gap-6">
      <a href="#" className="font-semibold text-lg">Brand</a>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-sm font-medium text-primary">Home</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Products</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Pricing</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">About</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Contact</a>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  </div>
</header>`}
          preview={
            <header className="border-b">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                  <a href="#" className="font-semibold text-lg">
                    Brand
                  </a>
                  <nav className="hidden md:flex gap-6">
                    <a href="#" className="text-sm font-medium text-primary">
                      Home
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Products
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Pricing
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      About
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Contact
                    </a>
                  </nav>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
              </div>
            </header>
          }
        />

        <ComponentPreview
          title="Navbar with Search"
          description="A navbar with a search input and user actions."
          code={`<header className="border-b">
  <div className="container flex h-16 items-center justify-between">
    <div className="flex items-center gap-6">
      <a href="#" className="font-semibold text-lg">Brand</a>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-sm font-medium text-primary">Home</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Products</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Pricing</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">About</a>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative hidden md:block">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-[200px] lg:w-[300px] pl-8"
        />
      </div>
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
        <span className="sr-only">Profile</span>
      </Button>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  </div>
</header>`}
          preview={
            <header className="border-b">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                  <a href="#" className="font-semibold text-lg">
                    Brand
                  </a>
                  <nav className="hidden md:flex gap-6">
                    <a href="#" className="text-sm font-medium text-primary">
                      Home
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Products
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Pricing
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      About
                    </a>
                  </nav>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search..." className="w-[200px] lg:w-[300px] pl-8" />
                  </div>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Profile</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
              </div>
            </header>
          }
        />

        <ComponentPreview
          title="E-commerce Navbar"
          description="A navbar designed for e-commerce sites with cart and wishlist."
          code={`<header className="border-b">
  <div className="container flex h-16 items-center justify-between">
    <div className="flex items-center gap-6">
      <a href="#" className="font-semibold text-lg">ShopBrand</a>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-sm font-medium text-primary">Home</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Shop</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Categories</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Sale</a>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative hidden md:block">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-[200px] lg:w-[300px] pl-8"
        />
      </div>
      <Button variant="ghost" size="icon">
        <Heart className="h-5 w-5" />
        <span className="sr-only">Wishlist</span>
      </Button>
      <div className="relative">
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </Button>
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">3</span>
      </div>
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
        <span className="sr-only">Account</span>
      </Button>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  </div>
</header>`}
          preview={
            <header className="border-b">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                  <a href="#" className="font-semibold text-lg">
                    ShopBrand
                  </a>
                  <nav className="hidden md:flex gap-6">
                    <a href="#" className="text-sm font-medium text-primary">
                      Home
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Shop
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Categories
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Sale
                    </a>
                  </nav>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search products..." className="w-[200px] lg:w-[300px] pl-8" />
                  </div>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Wishlist</span>
                  </Button>
                  <div className="relative">
                    <Button variant="ghost" size="icon">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="sr-only">Cart</span>
                    </Button>
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                      3
                    </span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
              </div>
            </header>
          }
        />

        <ComponentPreview
          title="Navbar with CTA"
          description="A navbar with call-to-action buttons for sign in and sign up."
          code={`<header className="border-b">
  <div className="container flex h-16 items-center justify-between">
    <div className="flex items-center gap-6">
      <a href="#" className="font-semibold text-lg">SaaS App</a>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-sm font-medium text-primary">Home</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Features</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Pricing</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Blog</a>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <div className="hidden md:flex gap-2">
        <Button variant="ghost" size="sm">
          <LogIn className="h-4 w-4 mr-2" />
          Sign In
        </Button>
        <Button size="sm">Sign Up</Button>
      </div>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  </div>
</header>`}
          preview={
            <header className="border-b">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                  <a href="#" className="font-semibold text-lg">
                    SaaS App
                  </a>
                  <nav className="hidden md:flex gap-6">
                    <a href="#" className="text-sm font-medium text-primary">
                      Home
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Features
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Pricing
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
                      Blog
                    </a>
                  </nav>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex gap-2">
                    <Button variant="ghost" size="sm">
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                    <Button size="sm">Sign Up</Button>
                  </div>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
              </div>
            </header>
          }
        />
      </div>
    </div>
  )
}

