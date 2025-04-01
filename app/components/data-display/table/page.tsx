import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
          code={`<Table>
  <TableCaption>A list of recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">$125.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV003</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Bank Transfer</TableCell>
      <TableCell className="text-right">$450.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV004</TableCell>
      <TableCell>Cancelled</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV005</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">$550.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$1,525.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
          preview={
            <Table>
              <TableCaption>A list of recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$125.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV003</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Bank Transfer</TableCell>
                  <TableCell className="text-right">$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV004</TableCell>
                  <TableCell>Cancelled</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV005</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$550.00</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$1,525.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          }
        />

        <ComponentPreview
          title="Bordered Table"
          description="Table with borders for better data separation."
          code={`<Table className="border">
  <TableHeader>
    <TableRow className="border-b">
      <TableHead className="border-r">Name</TableHead>
      <TableHead className="border-r">Email</TableHead>
      <TableHead className="border-r">Role</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="border-b">
      <TableCell className="border-r font-medium">John Doe</TableCell>
      <TableCell className="border-r">john@example.com</TableCell>
      <TableCell className="border-r">Developer</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
    <TableRow className="border-b">
      <TableCell className="border-r font-medium">Jane Smith</TableCell>
      <TableCell className="border-r">jane@example.com</TableCell>
      <TableCell className="border-r">Designer</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
    <TableRow className="border-b">
      <TableCell className="border-r font-medium">Robert Johnson</TableCell>
      <TableCell className="border-r">robert@example.com</TableCell>
      <TableCell className="border-r">Manager</TableCell>
      <TableCell>On Leave</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
          preview={
            <Table className="border">
              <TableHeader>
                <TableRow className="border-b">
                  <TableHead className="border-r">Name</TableHead>
                  <TableHead className="border-r">Email</TableHead>
                  <TableHead className="border-r">Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b">
                  <TableCell className="border-r font-medium">John Doe</TableCell>
                  <TableCell className="border-r">john@example.com</TableCell>
                  <TableCell className="border-r">Developer</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow className="border-b">
                  <TableCell className="border-r font-medium">Jane Smith</TableCell>
                  <TableCell className="border-r">jane@example.com</TableCell>
                  <TableCell className="border-r">Designer</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow className="border-b">
                  <TableCell className="border-r font-medium">Robert Johnson</TableCell>
                  <TableCell className="border-r">robert@example.com</TableCell>
                  <TableCell className="border-r">Manager</TableCell>
                  <TableCell>On Leave</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          }
        />
      </div>
    </div>
  )
}

