import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

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
          code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
          preview={
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          }
        />

        <ComponentPreview
          title="Switch Group"
          description="A group of switches for multiple toggles."
          code={`<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label htmlFor="wifi" className="flex flex-col space-y-1">
      <span>Wi-Fi</span>
      <span className="font-normal text-sm text-muted-foreground">
        Connect to nearby Wi-Fi networks.
      </span>
    </Label>
    <Switch id="wifi" />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="bluetooth" className="flex flex-col space-y-1">
      <span>Bluetooth</span>
      <span className="font-normal text-sm text-muted-foreground">
        Connect to nearby Bluetooth devices.
      </span>
    </Label>
    <Switch id="bluetooth" />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="airplane" className="flex flex-col space-y-1">
      <span>Airplane Mode</span>
      <span className="font-normal text-sm text-muted-foreground">
        Disable all wireless connections.
      </span>
    </Label>
    <Switch id="airplane" />
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="wifi" className="flex flex-col space-y-1">
                  <span>Wi-Fi</span>
                  <span className="font-normal text-sm text-muted-foreground">Connect to nearby Wi-Fi networks.</span>
                </Label>
                <Switch id="wifi" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="bluetooth" className="flex flex-col space-y-1">
                  <span>Bluetooth</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Connect to nearby Bluetooth devices.
                  </span>
                </Label>
                <Switch id="bluetooth" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="airplane" className="flex flex-col space-y-1">
                  <span>Airplane Mode</span>
                  <span className="font-normal text-sm text-muted-foreground">Disable all wireless connections.</span>
                </Label>
                <Switch id="airplane" />
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Disabled Switch"
          description="Switch in a disabled state."
          code={`<div className="flex items-center space-x-2">
  <Switch id="disabled-switch" disabled />
  <Label htmlFor="disabled-switch" className="opacity-70">Disabled</Label>
</div>`}
          preview={
            <div className="flex items-center space-x-2">
              <Switch id="disabled-switch" disabled />
              <Label htmlFor="disabled-switch" className="opacity-70">
                Disabled
              </Label>
            </div>
          }
        />
      </div>
    </div>
  )
}

