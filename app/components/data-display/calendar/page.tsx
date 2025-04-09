import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Calendar } from "@/components/ui/calendar"

export const metadata: Metadata = {
  title: "Calendar - UI Library",
  description: "Calendar component for date selection",
}

export default function CalendarPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-lg text-muted-foreground">A calendar component for date selection and display.</p>
        </div>

        <ComponentPreview
          title="Default Calendar"
          description="The default calendar style."
          code={`<Calendar
  mode="single"
  className="rounded-md border"
/>`}
          preview={<Calendar mode="single" className="rounded-md border" />}
        />

        <ComponentPreview
          title="Calendar with Selected Date"
          description="Calendar with a pre-selected date."
          code={`<Calendar
  mode="single"
  selected={new Date(2023, 0, 15)}
  className="rounded-md border"
/>`}
          preview={<Calendar mode="single" selected={new Date(2023, 0, 15)} className="rounded-md border" />}
        />

        <ComponentPreview
          title="Calendar with Date Range"
          description="Calendar for selecting a date range."
          code={`<Calendar
  mode="range"
  selected={{
    from: new Date(2023, 0, 10),
    to: new Date(2023, 0, 20),
  }}
  className="rounded-md border"
/>`}
          preview={
            <Calendar
              mode="range"
              selected={{
                from: new Date(2023, 0, 10),
                to: new Date(2023, 0, 20),
              }}
              className="rounded-md border"
            />
          }
        />

        <ComponentPreview
          title="Calendar with Disabled Dates"
          description="Calendar with certain dates disabled."
          code={`<Calendar
  mode="single"
  disabled={[
    new Date(2023, 0, 5),
    new Date(2023, 0, 15),
    new Date(2023, 0, 25),
    { from: new Date(2023, 1, 1), to: new Date(2023, 1, 14) },
  ]}
  className="rounded-md border"
/>`}
          preview={
            <Calendar
              mode="single"
              disabled={[
                new Date(2023, 0, 5),
                new Date(2023, 0, 15),
                new Date(2023, 0, 25),
                { from: new Date(2023, 1, 1), to: new Date(2023, 1, 14) },
              ]}
              className="rounded-md border"
            />
          }
        />
      </div>
    </div>
  )
}
