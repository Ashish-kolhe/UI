import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Installation - UI Library",
  description: "How to install and use the UI library",
}

export default function InstallationPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to install and use the Tailwind CSS UI Component Library in your project.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Prerequisites</h2>
            <p>Before you begin, make sure you have the following installed:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Node.js 14.0 or later</li>
              <li>A React project</li>
              <li>Tailwind CSS installed and configured</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Installation</h2>
            <p>
              This UI library uses only Tailwind CSS, so you don't need to install any additional UI libraries. However,
              you'll need to install a couple of utility packages for class name handling:
            </p>

            <div className="rounded-md bg-muted p-4 my-4">
              <pre className="text-sm">npm install clsx tailwind-merge</pre>
            </div>

            <p>
              Then, copy the components you need from the library into your project. Each component is self-contained
              and only requires Tailwind CSS and the utility function.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Required Files</h2>
            <p>At a minimum, you'll need to copy these files to your project:</p>

            <div className="rounded-md bg-muted p-4 my-4">
              <pre className="text-sm">{`// lib/utils.ts - Utility function for class name merging
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}</pre>
            </div>

            <p>
              Then copy any component files you need from the <code>components/ui/</code> directory.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Tailwind CSS Configuration</h2>
            <p>
              Make sure your Tailwind CSS configuration includes the necessary theme extensions. Add the following to
              your <code>tailwind.config.js</code> file:
            </p>

            <div className="rounded-md bg-muted p-4 my-4 overflow-auto">
              <pre className="text-sm">{`module.exports = {
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
}`}</pre>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">CSS Variables</h2>
            <p>Add these CSS variables to your global CSS file:</p>

            <div className="rounded-md bg-muted p-4 my-4 overflow-auto">
              <pre className="text-sm">{`@tailwind base;
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
}`}</pre>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Usage Example</h2>
            <p>Here's a simple example of how to use the Button component:</p>

            <div className="rounded-md bg-muted p-4 my-4">
              <pre className="text-sm">{`import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return (
    <div className="space-y-4">
      <Button>Default Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="destructive">Destructive Button</Button>
    </div>
  )
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
