import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Dropdown Menu - UI Library",
  description: "Dropdown menu component for displaying a list of options",
}

export default function DropdownMenuPage() {
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
          code={`<!-- Dropdown Menu Container -->
<div class="relative inline-block text-left">
  <!-- Dropdown Trigger Button -->
  <button
    type="button"
    class="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
    id="menu-button"
    aria-expanded="true"
    aria-haspopup="true"
    onclick="document.getElementById('dropdown-menu').classList.toggle('hidden')"
  >
    Options
    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  </button>

  <!-- Dropdown Menu -->
  <div
    id="dropdown-menu"
    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div class="py-1" role="none">
      <a href="#" class="text-foreground block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" class="text-foreground block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" class="text-foreground block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" class="text-foreground block w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div>

<!-- Close dropdown when clicking outside -->
<script>
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown-menu');
    const button = document.getElementById('menu-button');
    if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
      dropdown.classList.add('hidden');
    }
  });
</script>`}
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
            </div>
          }
        />

        <ComponentPreview
          title="Dropdown Menu with Icons"
          description="A dropdown menu with icons for each item."
          code={`<!-- Dropdown Menu Container -->
<div class="relative inline-block text-left">
  <!-- Dropdown Trigger Button -->
  <button
    type="button"
    class="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
    id="user-menu-button"
    aria-expanded="true"
    aria-haspopup="true"
    onclick="document.getElementById('user-dropdown-menu').classList.toggle('hidden')"
  >
    User Menu
    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  </button>

  <!-- Dropdown Menu -->
  <div
    id="user-dropdown-menu"
    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabindex="-1"
  >
    <div class="py-1" role="none">
      <a href="#" class="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabindex="-1" id="menu-item-0">
        <svg class="mr-3 h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
        Profile
      </a>
      <a href="#" class="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabindex="-1" id="menu-item-1">
        <svg class="mr-3 h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
        Settings
      </a>
      <a href="#" class="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabindex="-1" id="menu-item-2">
        <svg class="mr-3 h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
        Reports
      </a>
      <a href="#" class="text-foreground flex px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground" role="menuitem" tabindex="-1" id="menu-item-3">
        <svg class="mr-3 h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
        </svg>
        Sign out
      </a>
    </div>
  </div>
</div>

<!-- Close dropdown when clicking outside -->
<script>
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('user-dropdown-menu');
    const button = document.getElementById('user-menu-button');
    if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
      dropdown.classList.add('hidden');
    }
  });
</script>`}
          preview={
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                id="user-menu-button"
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
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This dropdown menu component is implemented using pure Tailwind CSS classes and basic JavaScript. It doesn't
            require any external libraries or frameworks.
          </p>
          <p className="mt-2">The implementation includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>A trigger button that toggles the dropdown visibility</li>
            <li>A dropdown menu with links or buttons</li>
            <li>JavaScript to handle showing/hiding the dropdown</li>
            <li>Click outside detection to close the dropdown</li>
            <li>Proper ARIA attributes for accessibility</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML, CSS, and JavaScript. You can customize the
            appearance by modifying the Tailwind classes.
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <p className="text-sm font-medium mb-2">For a more advanced implementation, consider:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Adding keyboard navigation (arrow keys, Escape to close)</li>
              <li>Focus management within the dropdown</li>
              <li>Animation for opening/closing</li>
              <li>Submenu support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
