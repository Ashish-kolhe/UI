"use client"

import { ComponentPreview } from "@/components/component-preview"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface DropdownMenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right"
  className?: string
}

export function DropdownMenu({ trigger, children, align = "left", className }: DropdownMenuProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>

      {open && (
        <div
          className={cn(
            "absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            align === "right" ? "right-0" : "left-0",
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string
}

export function DropdownMenuItem({ className, children, href, ...props }: DropdownMenuItemProps) {
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "text-foreground flex w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={cn(
        "text-foreground flex w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default function DropdownMenuPageClient() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Dropdown Menu</h1>
          <p className="text-lg text-muted-foreground">A dropdown menu component for displaying a list of options.</p>
        </div>

        <ComponentPreview
          title="Basic Dropdown Menu"
          description="A simple dropdown menu with a button trigger."
          code={`<div className="relative inline-block text-left">
  <button
    type="button"
    className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
    id="menu-button"
    aria-expanded="true"
    aria-haspopup="true"
  >
    Options
    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  </button>

  {/* Dropdown menu, show/hide based on menu state */}
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
    <div className="py-1" role="none">
      <a href="#" className="text-foreground block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
      <a href="#" className="text-foreground block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
      <a href="#" className="text-foreground block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="text-foreground block w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div>`}
          preview={
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Options
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-foreground block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    className="text-foreground block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="text-foreground block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="text-foreground block w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Dropdown Menu with Icons"
          description="A dropdown menu with icons for each item."
          code={`<div className="relative inline-block text-left">
  <button
    type="button"
    className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
    id="menu-button"
    aria-expanded="true"
    aria-haspopup="true"
  >
    User Menu
    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  </button>

  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
    <div className="py-1" role="none">
      <a href="#" className="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabIndex={-1} id="menu-item-0">
        <svg className="mr-3 h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
        Profile
      </a>
      <a href="#" className="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabIndex={-1} id="menu-item-1">
        <svg className="mr-3 h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
        Settings
      </a>
      <a href="#" className="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabIndex={-1} id="menu-item-2">
        <svg className="mr-3 h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
        Reports
      </a>
      <a href="#" className="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabIndex={-1} id="menu-item-3">
        <svg className="mr-3 h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
        </svg>
        Sign out
      </a>
    </div>
  </div>
</div>`}
          preview={
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                User Menu
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Profile
                  </a>
                  <a
                    href="#"
                    className="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Settings
                  </a>
                  <a
                    href="#"
                    className="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Reports
                  </a>
                  <a
                    href="#"
                    className="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-3"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This dropdown menu component is implemented using pure Tailwind CSS classes. For a fully functional dropdown
            menu, you'll need to add JavaScript to toggle the visibility of the menu.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Here's a simple React implementation that handles the toggle functionality:
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <pre className="text-sm overflow-auto">
              {`// components/ui/dropdown-menu.tsx
"use client"

import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface DropdownMenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right"
  className?: string
}

export function DropdownMenu({ trigger, children, align = "left", className }: DropdownMenuProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <div onClick={() => setOpen(!open)}>
        {trigger}
      </div>
      
      {open && (
        <div 
          className={cn(
            "absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            align === "right" ? "right-0" : "left-0",
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string
}

export function DropdownMenuItem({ className, children, href, ...props }: DropdownMenuItemProps) {
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "text-foreground flex w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      className={cn(
        "text-foreground flex w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Usage example:
// <DropdownMenu 
//   trigger={
//     <Button>
//       Options
//       <ChevronDownIcon className="ml-2 h-4 w-4" />
//     </Button>
//   }
// >
//   <div className="py-1">
//     <DropdownMenuItem href="#">Account settings</DropdownMenuItem>
//     <DropdownMenuItem href="#">Support</DropdownMenuItem>
//     <DropdownMenuItem href="#">License</DropdownMenuItem>
//     <DropdownMenuItem onClick={() => console.log("Sign out")}>Sign out</DropdownMenuItem>
//   </div>
// </DropdownMenu>
`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
