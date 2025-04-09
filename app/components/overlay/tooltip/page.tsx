import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

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
          title="Simple CSS Tooltip"
          description="A tooltip using only CSS with no JavaScript required."
          code={`<div class="relative inline-flex group">
  <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
    Hover Me
  </button>
  <div class="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2">
    This is a tooltip
    <div class="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
  </div>
</div>`}
          preview={
            <div className="relative inline-flex group">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Hover Me
              </button>
              <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2">
                This is a tooltip
                <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Tooltip Positions"
          description="Tooltips in different positions."
          code={`<div class="flex flex-wrap items-center justify-center gap-4">
  <!-- Top Tooltip -->
  <div class="relative inline-flex group">
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
      Top
    </button>
    <div class="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2">
      Tooltip on top
      <div class="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
    </div>
  </div>

  <!-- Right Tooltip -->
  <div class="relative inline-flex group">
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
      Right
    </button>
    <div class="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 left-full ml-2 top-1/2 -translate-y-1/2">
      Tooltip on right
      <div class="absolute w-2 h-2 bg-gray-900 rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>

  <!-- Bottom Tooltip -->
  <div class="relative inline-flex group">
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
      Bottom
    </button>
    <div class="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 top-full mt-2 left-1/2 -translate-x-1/2">
      Tooltip on bottom
      <div class="absolute w-2 h-2 bg-gray-900 rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
    </div>
  </div>

  <!-- Left Tooltip -->
  <div class="relative inline-flex group">
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
      Left
    </button>
    <div class="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 right-full mr-2 top-1/2 -translate-y-1/2">
      Tooltip on left
      <div class="absolute w-2 h-2 bg-gray-900 rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>
</div>`}
          preview={
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="relative inline-flex group">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Top
                </button>
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2">
                  Tooltip on top
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>

              <div className="relative inline-flex group">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Right
                </button>
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 left-full ml-2 top-1/2 -translate-y-1/2">
                  Tooltip on right
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>

              <div className="relative inline-flex group">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Bottom
                </button>
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 top-full mt-2 left-1/2 -translate-x-1/2">
                  Tooltip on bottom
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>

              <div className="relative inline-flex group">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Left
                </button>
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 right-full mr-2 top-1/2 -translate-y-1/2">
                  Tooltip on left
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Tooltip with JavaScript"
          description="A tooltip that uses JavaScript for more control."
          code={`<!-- Tooltip Trigger -->
<button 
  id="tooltip-trigger"
  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
>
  Hover For Tooltip
</button>

<!-- Tooltip Element (Hidden by Default) -->
<div 
  id="tooltip-element" 
  class="fixed z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 pointer-events-none"
  role="tooltip"
>
  JavaScript controlled tooltip
  <div class="tooltip-arrow absolute w-2 h-2 bg-gray-900 rotate-45"></div>
</div>

<!-- JavaScript for Tooltip -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.getElementById('tooltip-trigger');
    const tooltip = document.getElementById('tooltip-element');
    const arrow = tooltip.querySelector('.tooltip-arrow');
    
    function showTooltip(e) {
      // Position the tooltip above the trigger
      const triggerRect = trigger.getBoundingClientRect();
      tooltip.style.left = triggerRect.left + (triggerRect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = triggerRect.top - tooltip.offsetHeight - 10 + 'px';
      
      // Position the arrow
      arrow.style.left = '50%';
      arrow.style.bottom = '-4px';
      arrow.style.transform = 'translateX(-50%) rotate(45deg)';
      
      // Show the tooltip
      tooltip.style.opacity = '1';
    }
    
    function hideTooltip() {
      tooltip.style.opacity = '0';
    }
    
    // Add event listeners
    trigger.addEventListener('mouseenter', showTooltip);
    trigger.addEventListener('mouseleave', hideTooltip);
    trigger.addEventListener('focus', showTooltip);
    trigger.addEventListener('blur', hideTooltip);
  });
</script>`}
          preview={
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Hover For Tooltip
            </button>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This tooltip component is implemented using pure Tailwind CSS classes. The implementation uses CSS
            transitions and the group hover functionality to show and hide the tooltip.
          </p>
          <p className="mt-2">The tooltip includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>A trigger element that shows the tooltip on hover</li>
            <li>The tooltip content with a small arrow pointing to the trigger</li>
            <li>Transition effects for smooth appearance/disappearance</li>
            <li>Different positioning options (top, right, bottom, left)</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML with the Tailwind classes. You can customize the
            appearance by modifying the classes.
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <p className="text-sm font-medium mb-2">For a more advanced implementation, consider:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Using JavaScript for more precise positioning</li>
              <li>Adding support for touch devices</li>
              <li>Implementing keyboard accessibility</li>
              <li>Adding delay options for showing/hiding</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
