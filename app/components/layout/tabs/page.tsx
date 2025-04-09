import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Tabs - UI Library",
  description: "Tabs component for switching between different views",
}

export default function TabsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
          <p className="text-lg text-muted-foreground">A tabs component for switching between different views.</p>
        </div>

        <ComponentPreview
          title="Default Tabs"
          description="The default tabs style."
          code={`<div class="w-full">
  <div class="border-b">
    <div class="flex -mb-px space-x-6" role="tablist" aria-orientation="horizontal">
      <button
        class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3"
        id="tab-1"
        role="tab"
        type="button"
        aria-selected="true"
        aria-controls="tabpanel-1"
        data-state="active"
        tabindex="0"
        onclick="switchTab('tab-1', 'tabpanel-1')"
      >
        Account
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3 text-muted-foreground"
        id="tab-2"
        role="tab"
        type="button"
        aria-selected="false"
        aria-controls="tabpanel-2"
        data-state="inactive"
        tabindex="-1"
        onclick="switchTab('tab-2', 'tabpanel-2')"
      >
        Password
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3 text-muted-foreground"
        id="tab-3"
        role="tab"
        type="button"
        aria-selected="false"
        aria-controls="tabpanel-3"
        data-state="inactive"
        tabindex="-1"
        onclick="switchTab('tab-3', 'tabpanel-3')"
      >
        Settings
      </button>
    </div>
  </div>
  <div class="mt-4">
    <div
      role="tabpanel"
      id="tabpanel-1"
      aria-labelledby="tab-1"
      data-state="active"
      class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      tabindex="0"
    >
      <p>Make changes to your account here. Click save when you're done.</p>
    </div>
    <div
      role="tabpanel"
      id="tabpanel-2"
      aria-labelledby="tab-2"
      data-state="inactive"
      class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hidden"
      tabindex="0"
    >
      <p>Change your password here. After saving, you'll be logged out.</p>
    </div>
    <div
      role="tabpanel"
      id="tabpanel-3"
      aria-labelledby="tab-3"
      data-state="inactive"
      class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hidden"
      tabindex="0"
    >
      <p>Edit your notification settings here.</p>
    </div>
  </div>
</div>

<script>
  function switchTab(tabId, panelId) {
    // Deactivate all tabs
    document.querySelectorAll('[role="tab"]').forEach(tab => {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('data-state', 'inactive');
      tab.classList.add('text-muted-foreground');
      tab.classList.remove('text-foreground', 'font-medium');
      tab.setAttribute('tabindex', '-1');
    });
    
    // Activate selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.setAttribute('data-state', 'active');
    selectedTab.classList.remove('text-muted-foreground');
    selectedTab.classList.add('text-foreground', 'font-medium');
    selectedTab.setAttribute('tabindex', '0');
    
    // Hide all panels
    document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
      panel.setAttribute('data-state', 'inactive');
      panel.classList.add('hidden');
    });
    
    // Show selected panel
    const selectedPanel = document.getElementById(panelId);
    selectedPanel.setAttribute('data-state', 'active');
    selectedPanel.classList.remove('hidden');
  }
</script>`}
          preview={
            <div className="w-full">
              <div className="border-b">
                <div className="flex -mb-px space-x-6" role="tablist" aria-orientation="horizontal">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3"
                    id="tab-1-preview"
                    role="tab"
                    type="button"
                    aria-selected="true"
                    aria-controls="tabpanel-1-preview"
                    data-state="active"
                    tabIndex={0}
                  >
                    Account
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3 text-muted-foreground"
                    id="tab-2-preview"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    aria-controls="tabpanel-2-preview"
                    data-state="inactive"
                    tabIndex={-1}
                  >
                    Password
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3 text-muted-foreground"
                    id="tab-3-preview"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    aria-controls="tabpanel-3-preview"
                    data-state="inactive"
                    tabIndex={-1}
                  >
                    Settings
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <div
                  role="tabpanel"
                  id="tabpanel-1-preview"
                  aria-labelledby="tab-1-preview"
                  data-state="active"
                  className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  tabIndex={0}
                >
                  <p>Make changes to your account here. Click save when you're done.</p>
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Tabs with Icons"
          description="Tabs with icons for visual cues."
          code={`<div class="w-full">
  <div class="border-b">
    <div class="flex -mb-px space-x-6" role="tablist" aria-orientation="horizontal">
      <button
        class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3"
        id="icon-tab-1"
        role="tab"
        type="button"
        aria-selected="true"
        aria-controls="icon-tabpanel-1"
        data-state="active"
        tabindex="0"
        onclick="switchIconTab('icon-tab-1', 'icon-tabpanel-1')"
      >
        <svg class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        Profile
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3 text-muted-foreground"
        id="icon-tab-2"
        role="tab"
        type="button"
        aria-selected="false"
        aria-controls="icon-tabpanel-2"
        data-state="inactive"
        tabindex="-1"
        onclick="switchIconTab('icon-tab-2', 'icon-tabpanel-2')"
      >
        <svg class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        Security
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3 text-muted-foreground"
        id="icon-tab-3"
        role="tab"
        type="button"
        aria-selected="false"
        aria-controls="icon-tabpanel-3"
        data-state="inactive"
        tabindex="-1"
        onclick="switchIconTab('icon-tab-3', 'icon-tabpanel-3')"
      >
        <svg class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
        Preferences
      </button>
    </div>
  </div>
  <div class="mt-4">
    <div
      role="tabpanel"
      id="icon-tabpanel-1"
      aria-labelledby="icon-tab-1"
      data-state="active"
      class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      tabindex="0"
    >
      <p>Edit your profile information here.</p>
    </div>
    <div
      role="tabpanel"
      id="icon-tabpanel-2"
      aria-labelledby="icon-tab-2"
      data-state="inactive"
      class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hidden"
      tabindex="0"
    >
      <p>Manage your security settings here.</p>
    </div>
    <div
      role="tabpanel"
      id="icon-tabpanel-3"
      aria-labelledby="icon-tab-3"
      data-state="inactive"
      class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hidden"
      tabindex="0"
    >
      <p>Customize your preferences here.</p>
    </div>
  </div>
</div>

<script>
  function switchIconTab(tabId, panelId) {
    // Deactivate all tabs
    document.querySelectorAll('[id^="icon-tab-"]').forEach(tab => {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('data-state', 'inactive');
      tab.classList.add('text-muted-foreground');
      tab.classList.remove('text-foreground', 'font-medium');
      tab.setAttribute('tabindex', '-1');
    });
    
    // Activate selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.setAttribute('data-state', 'active');
    selectedTab.classList.remove('text-muted-foreground');
    selectedTab.classList.add('text-foreground', 'font-medium');
    selectedTab.setAttribute('tabindex', '0');
    
    // Hide all panels
    document.querySelectorAll('[id^="icon-tabpanel-"]').forEach(panel => {
      panel.setAttribute('data-state', 'inactive');
      panel.classList.add('hidden');
    });
    
    // Show selected panel
    const selectedPanel = document.getElementById(panelId);
    selectedPanel.setAttribute('data-state', 'active');
    selectedPanel.classList.remove('hidden');
  }
</script>`}
          preview={
            <div className="w-full">
              <div className="border-b">
                <div className="flex -mb-px space-x-6" role="tablist" aria-orientation="horizontal">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3"
                    id="icon-tab-1-preview"
                    role="tab"
                    type="button"
                    aria-selected="true"
                    aria-controls="icon-tabpanel-1-preview"
                    data-state="active"
                    tabIndex={0}
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Profile
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3 text-muted-foreground"
                    id="icon-tab-2-preview"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    aria-controls="icon-tabpanel-2-preview"
                    data-state="inactive"
                    tabIndex={-1}
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Security
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-medium px-1 pb-3 text-muted-foreground"
                    id="icon-tab-3-preview"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    aria-controls="icon-tabpanel-3-preview"
                    data-state="inactive"
                    tabIndex={-1}
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                    Preferences
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <div
                  role="tabpanel"
                  id="icon-tabpanel-1-preview"
                  aria-labelledby="icon-tab-1-preview"
                  data-state="active"
                  className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  tabIndex={0}
                >
                  <p>Edit your profile information here.</p>
                </div>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This tabs component is implemented using pure HTML, Tailwind CSS classes, and JavaScript. It provides a way
            to switch between different views.
          </p>
          <p className="mt-2">The tabs include:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Proper semantic HTML structure with ARIA attributes for accessibility</li>
            <li>Tab buttons that switch between different content panels</li>
            <li>Support for icons in tab buttons</li>
            <li>JavaScript for handling tab switching</li>
            <li>Focus management for keyboard navigation</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML, CSS, and JavaScript. You can customize the
            appearance by modifying the Tailwind classes.
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <p className="text-sm font-medium mb-2">For a more advanced implementation, consider:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Adding keyboard navigation (arrow keys, Home/End)</li>
              <li>Implementing automatic activation when focusing tabs</li>
              <li>Adding animation for tab transitions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
