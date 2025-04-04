import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation - UI Library",
  description: "Documentation for the Tailwind CSS UI Component Library",
}

export default function DocsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Learn how to use our Tailwind CSS UI Component Library in your projects.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Getting Started</h2>
            <div className="space-y-4">
              <p>
                This UI library is built with pure Tailwind CSS and React. It doesn't require any additional UI
                libraries or dependencies beyond Tailwind CSS itself.
              </p>

              <h3 className="text-xl font-semibold mt-6">Prerequisites</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>React project</li>
                <li>Tailwind CSS installed and configured</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Installation</h3>
              <p>
                Since this library uses only Tailwind CSS, you don't need to install any additional packages. Simply
                copy the components you need into your project.
              </p>

              <div className="mt-4 rounded-md bg-muted p-4">
                <h4 className="text-sm font-semibold mb-2">Required Files</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    <code>lib/utils.ts</code> - Utility functions for class name merging
                  </li>
                  <li>
                    Component files from <code>components/ui/</code> directory
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6">Tailwind CSS Configuration</h3>
              <p>
                Make sure your Tailwind CSS configuration includes the necessary color variables and other utilities.
                Here's a basic configuration to get started:
              </p>

              <div className="mt-2 rounded-md bg-muted p-4 overflow-auto">
                <pre className="text-sm">
                  {`// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold mt-6">CSS Variables</h3>
              <p>Add these CSS variables to your global CSS file:</p>

              <div className="mt-2 rounded-md bg-muted p-4 overflow-auto">
                <pre className="text-sm">
                  {`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
            <div className="space-y-4">
              <p>
                To use a component, simply copy the component file from the <code>components/ui/</code> directory into
                your project, along with the <code>lib/utils.ts</code> file for the <code>cn</code> utility function.
              </p>

              <h3 className="text-xl font-semibold mt-6">Example</h3>
              <p>Here's how to use the Button component:</p>

              <div className="mt-2 rounded-md bg-muted p-4 overflow-auto">
                <pre className="text-sm">
                  {`// 1. Copy the Button component to your project
// components/ui/button.tsx

// 2. Copy the utils.ts file to your project
// lib/utils.ts

// 3. Import and use the component
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold mt-6">Required Utilities</h3>
              <p>
                The <code>cn</code> utility function is used for conditional class name merging. Make sure to include it
                in your project:
              </p>

              <div className="mt-2 rounded-md bg-muted p-4 overflow-auto">
                <pre className="text-sm">
                  {`// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// You'll need to install these dependencies:
// npm install clsx tailwind-merge`}
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Components</h2>
            <p>Browse our collection of components and see how to use them in your project.</p>
            <div className="mt-4">
              <Link
                href="/components"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
              >
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

