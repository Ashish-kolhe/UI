import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
          code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectItem value="grape">Grape</SelectItem>
      <SelectItem value="pear">Pear</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
          preview={
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                  <SelectItem value="pear">Pear</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          }
        />

        <ComponentPreview
          title="Select with Label"
          description="Select with an associated label."
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="country">Country</Label>
  <Select>
    <SelectTrigger id="country">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="us">United States</SelectItem>
        <SelectItem value="ca">Canada</SelectItem>
        <SelectItem value="uk">United Kingdom</SelectItem>
        <SelectItem value="au">Australia</SelectItem>
        <SelectItem value="jp">Japan</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>`}
          preview={
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          }
        />

        <ComponentPreview
          title="Select with Groups"
          description="Select with grouped options."
          code={`<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
      <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Asia</SelectLabel>
      <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
      <SelectItem value="cst-asia">China Standard Time (CST)</SelectItem>
      <SelectItem value="ist">India Standard Time (IST)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
          preview={
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                  <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                  <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                  <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Europe</SelectLabel>
                  <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                  <SelectItem value="cet">Central European Time (CET)</SelectItem>
                  <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                  <SelectItem value="cst-asia">China Standard Time (CST)</SelectItem>
                  <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          }
        />
      </div>
    </div>
  )
}

