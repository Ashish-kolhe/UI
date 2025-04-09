import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Select - UI Library",
  description: "Select component for choosing from options",
}

export default function SelectPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Select</h1>
          <p className="text-lg text-muted-foreground">
            A select component for choosing a single value from a list of options.
          </p>
        </div>

        <ComponentPreview
          title="Default Select"
          description="The default select style."
          code={`<select class="flex h-10 w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
  <option value="" disabled selected>Select a fruit</option>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
  <option value="grape">Grape</option>
  <option value="pear">Pear</option>
</select>`}
          preview={
            <select className="flex h-10 w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="" disabled selected>
                Select a fruit
              </option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
              <option value="grape">Grape</option>
              <option value="pear">Pear</option>
            </select>
          }
        />

        <ComponentPreview
          title="Select with Label"
          description="Select with an associated label."
          code={`<div class="grid w-full max-w-sm items-center gap-1.5">
  <label for="country" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Country
  </label>
  <select 
    id="country" 
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <option value="" disabled selected>Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="au">Australia</option>
    <option value="jp">Japan</option>
  </select>
</div>`}
          preview={
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label
                htmlFor="country"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Country
              </label>
              <select
                id="country"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled selected>
                  Select a country
                </option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="jp">Japan</option>
              </select>
            </div>
          }
        />

        <ComponentPreview
          title="Select with Groups"
          description="Select with grouped options."
          code={`<select class="flex h-10 w-[280px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
  <option value="" disabled selected>Select a timezone</option>
  <optgroup label="North America">
    <option value="est">Eastern Standard Time (EST)</option>
    <option value="cst">Central Standard Time (CST)</option>
    <option value="mst">Mountain Standard Time (MST)</option>
    <option value="pst">Pacific Standard Time (PST)</option>
  </optgroup>
  <optgroup label="Europe">
    <option value="gmt">Greenwich Mean Time (GMT)</option>
    <option value="cet">Central European Time (CET)</option>
    <option value="eet">Eastern European Time (EET)</option>
  </optgroup>
  <optgroup label="Asia">
    <option value="jst">Japan Standard Time (JST)</option>
    <option value="cst-asia">China Standard Time (CST)</option>
    <option value="ist">India Standard Time (IST)</option>
  </optgroup>
</select>`}
          preview={
            <select className="flex h-10 w-[280px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="" disabled selected>
                Select a timezone
              </option>
              <optgroup label="North America">
                <option value="est">Eastern Standard Time (EST)</option>
                <option value="cst">Central Standard Time (CST)</option>
                <option value="mst">Mountain Standard Time (MST)</option>
                <option value="pst">Pacific Standard Time (PST)</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="gmt">Greenwich Mean Time (GMT)</option>
                <option value="cet">Central European Time (CET)</option>
                <option value="eet">Eastern European Time (EET)</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="jst">Japan Standard Time (JST)</option>
                <option value="cst-asia">China Standard Time (CST)</option>
                <option value="ist">India Standard Time (IST)</option>
              </optgroup>
            </select>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This select component is implemented using the native HTML select element with Tailwind CSS styling. It
            provides a way to choose a single value from a list of options.
          </p>
          <p className="mt-2">The select includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Custom styling for the select element</li>
            <li>Support for option groups</li>
            <li>Focus and disabled states</li>
            <li>Associated label styling</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML with the Tailwind classes. You can customize the
            appearance by modifying the classes.
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <p className="text-sm font-medium mb-2">For a more advanced implementation, consider:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Adding a custom dropdown icon</li>
              <li>Creating a custom select component with better styling control</li>
              <li>Adding search functionality for long option lists</li>
              <li>Supporting multi-select functionality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
