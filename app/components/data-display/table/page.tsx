import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Table - UI Library",
  description: "Table component for displaying data",
}

export default function TablePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Table</h1>
          <p className="text-lg text-muted-foreground">A table component for displaying data in rows and columns.</p>
        </div>

        <ComponentPreview
          title="Default Table"
          description="The default table style."
          code={`<div class="w-full overflow-auto">
  <table class="w-full caption-bottom text-sm">
    <caption class="mt-4 text-sm text-muted-foreground">
      A list of recent invoices.
    </caption>
    <thead class="[&_tr]:border-b">
      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
          Invoice
        </th>
        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
          Status
        </th>
        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
          Method
        </th>
        <th class="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
          Amount
        </th>
      </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV001</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">Paid</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">Credit Card</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$250.00</td>
      </tr>
      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV002</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">Pending</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">PayPal</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$125.00</td>
      </tr>
      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV003</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">Paid</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">Bank Transfer</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$450.00</td>
      </tr>
      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV004</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">Cancelled</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">Credit Card</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$150.00</td>
      </tr>
      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV005</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">Paid</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">PayPal</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$550.00</td>
      </tr>
    </tbody>
    <tfoot class="border-t">
      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium" colspan="3">Total</td>
        <td class="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$1,525.00</td>
      </tr>
    </tfoot>
  </table>
</div>`}
          preview={
            <div className="w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <caption className="mt-4 text-sm text-muted-foreground">A list of recent invoices.</caption>
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Invoice
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Status
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Method
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV001</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Paid</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Credit Card</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$250.00</td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV002</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Pending</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">PayPal</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$125.00</td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV003</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Paid</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Bank Transfer</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$450.00</td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV004</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Cancelled</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Credit Card</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$150.00</td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">INV005</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Paid</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">PayPal</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$550.00</td>
                  </tr>
                </tbody>
                <tfoot className="border-t">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium" colSpan={3}>
                      Total
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">$1,525.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          }
        />

        <ComponentPreview
          title="Bordered Table"
          description="Table with borders for better data separation."
          code={`<div class="w-full overflow-auto">
  <table class="w-full caption-bottom text-sm border">
    <thead>
      <tr class="border-b">
        <th class="h-12 px-4 text-left align-middle font-medium border-r">
          Name
        </th>
        <th class="h-12 px-4 text-left align-middle font-medium border-r">
          Email
        </th>
        <th class="h-12 px-4 text-left align-middle font-medium border-r">
          Role
        </th>
        <th class="h-12 px-4 text-left align-middle font-medium">
          Status
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="p-4 align-middle border-r font-medium">John Doe</td>
        <td class="p-4 align-middle border-r">john@example.com</td>
        <td class="p-4 align-middle border-r">Developer</td>
        <td class="p-4 align-middle">Active</td>
      </tr>
      <tr class="border-b">
        <td class="p-4 align-middle border-r font-medium">Jane Smith</td>
        <td class="p-4 align-middle border-r">jane@example.com</td>
        <td class="p-4 align-middle border-r">Designer</td>
        <td class="p-4 align-middle">Active</td>
      </tr>
      <tr class="border-b">
        <td class="p-4 align-middle border-r font-medium">Robert Johnson</td>
        <td class="p-4 align-middle border-r">robert@example.com</td>
        <td class="p-4 align-middle border-r">Manager</td>
        <td class="p-4 align-middle">On Leave</td>
      </tr>
    </tbody>
  </table>
</div>`}
          preview={
            <div className="w-full overflow-auto">
              <table className="w-full caption-bottom text-sm border">
                <thead>
                  <tr className="border-b">
                    <th className="h-12 px-4 text-left align-middle font-medium border-r">Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium border-r">Email</th>
                    <th className="h-12 px-4 text-left align-middle font-medium border-r">Role</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 align-middle border-r font-medium">John Doe</td>
                    <td className="p-4 align-middle border-r">john@example.com</td>
                    <td className="p-4 align-middle border-r">Developer</td>
                    <td className="p-4 align-middle">Active</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 align-middle border-r font-medium">Jane Smith</td>
                    <td className="p-4 align-middle border-r">jane@example.com</td>
                    <td className="p-4 align-middle border-r">Designer</td>
                    <td className="p-4 align-middle">Active</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 align-middle border-r font-medium">Robert Johnson</td>
                    <td className="p-4 align-middle border-r">robert@example.com</td>
                    <td className="p-4 align-middle border-r">Manager</td>
                    <td className="p-4 align-middle">On Leave</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This table component is implemented using the native HTML table element with Tailwind CSS styling. It
            provides a way to display data in rows and columns.
          </p>
          <p className="mt-2">The table includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Proper semantic HTML structure with thead, tbody, and tfoot</li>
            <li>Styling for headers, rows, and cells</li>
            <li>Hover states for rows</li>
            <li>Support for right-aligned text (useful for numbers)</li>
            <li>Optional borders for better data separation</li>
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
