import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Switch - UI Library",
  description: "Switch component for toggling options",
}

export default function SwitchPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
          <p className="text-lg text-muted-foreground">
            A switch component for toggling between enabled and disabled states.
          </p>
        </div>

        <ComponentPreview
          title="Default Switch"
          description="The default switch style."
          code={`<label class="inline-flex items-center cursor-pointer">
  <div class="relative">
    <input type="checkbox" class="sr-only peer" id="airplane-mode">
    <div class="w-11 h-6 bg-muted rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
  </div>
  <span class="ml-3 text-sm font-medium">Airplane Mode</span>
</label>`}
          preview={
            <label className="inline-flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only peer" id="airplane-mode" />
                <div className="w-11 h-6 bg-muted rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </div>
              <span className="ml-3 text-sm font-medium">Airplane Mode</span>
            </label>
          }
        />

        <ComponentPreview
          title="Switch Group"
          description="A group of switches for multiple toggles."
          code={`<div class="space-y-4">
  <div class="flex items-center justify-between">
    <label for="wifi" class="flex flex-col space-y-1 cursor-pointer">
      <span>Wi-Fi</span>
      <span class="font-normal text-sm text-muted-foreground">
        Connect to nearby Wi-Fi networks.
      </span>
    </label>
    <div class="relative">
      <input type="checkbox" class="sr-only peer" id="wifi">
      <div class="w-11 h-6 bg-muted rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
    </div>
  </div>
  <div class="flex items-center justify-between">
    <label for="bluetooth" class="flex flex-col space-y-1 cursor-pointer">
      <span>Bluetooth</span>
      <span class="font-normal text-sm text-muted-foreground">
        Connect to nearby Bluetooth devices.
      </span>
    </label>
    <div class="relative">
      <input type="checkbox" class="sr-only peer" id="bluetooth">
      <div class="w-11 h-6 bg-muted rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
    </div>
  </div>
  <div class="flex items-center justify-between">
    <label for="airplane" class="flex flex-col space-y-1 cursor-pointer">
      <span>Airplane Mode</span>
      <span class="font-normal text-sm text-muted-foreground">
        Disable all wireless connections.
      </span>
    </label>
    <div class="relative">
      <input type="checkbox" class="sr-only peer" id="airplane">
      <div class="w-11 h-6 bg-muted rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
    </div>
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="wifi" className="flex flex-col space-y-1 cursor-pointer">
                  <span>Wi-Fi</span>
                  <span className="font-normal text-sm text-muted-foreground">Connect to nearby Wi-Fi networks.</span>
                </label>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" id="wifi" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="bluetooth" className="flex flex-col space-y-1 cursor-pointer">
                  <span>Bluetooth</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Connect to nearby Bluetooth devices.
                  </span>
                </label>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" id="bluetooth" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="airplane" className="flex flex-col space-y-1 cursor-pointer">
                  <span>Airplane Mode</span>
                  <span className="font-normal text-sm text-muted-foreground">Disable all wireless connections.</span>
                </label>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" id="airplane" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Switch"
          description="Switch in a disabled state."
          code={`<label class="inline-flex items-center cursor-not-allowed">
  <div class="relative">
    <input type="checkbox" class="sr-only peer" id="disabled-switch" disabled>
    <div class="w-11 h-6 bg-muted rounded-full peer opacity-50 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
  </div>
  <span class="ml-3 text-sm font-medium opacity-50">Disabled</span>
</label>`}
          preview={
            <label className="inline-flex items-center cursor-not-allowed">
              <div className="relative">
                <input type="checkbox" className="sr-only peer" id="disabled-switch" disabled />
                <div className="w-11 h-6 bg-muted rounded-full peer opacity-50 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </div>
              <span className="ml-3 text-sm font-medium opacity-50">Disabled</span>
            </label>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This switch component is implemented using pure HTML and Tailwind CSS classes. It uses a hidden checkbox
            input with peer styling to create the toggle effect.
          </p>
          <p className="mt-2">The switch includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>A hidden checkbox input that maintains the toggle state</li>
            <li>Custom styling for the switch track and thumb</li>
            <li>Smooth transition animation when toggling</li>
            <li>Focus and disabled states</li>
            <li>Associated label styling</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML with the Tailwind classes. You can customize the
            appearance by modifying the classes.
          </p>
        </div>
      </div>
    </div>
  )
}
