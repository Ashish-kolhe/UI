import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { StatCard } from "@/components/ui/stat-card"
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Stat Card - UiforU",
  description: "Stat card component for displaying key metrics and statistics",
}

export default function StatCardPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Stat Card</h1>
          <p className="text-lg text-muted-foreground">
            Stat cards for displaying key metrics and statistics in dashboards and reports.
          </p>
        </div>

        <ComponentPreview
          title="Basic Stat Card"
          description="A simple stat card with title and value."
          code={`<div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <div>
    <p className="text-sm font-medium text-gray-500">Total Users</p>
    <h3 className="mt-1 text-2xl font-semibold text-gray-900">12,345</h3>
  </div>
</div>`}
          preview={
            <div className="w-full max-w-xs">
              <StatCard title="Total Users" value="12,345" />
            </div>
          }
        />

        <ComponentPreview
          title="Stat Card with Icon"
          description="A stat card with an icon and description."
          code={`<div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <div className="flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500">Total Revenue</p>
      <h3 className="mt-1 text-2xl font-semibold text-gray-900">$45,231.89</h3>
      <p className="mt-1 text-sm text-gray-500">Last 30 days</p>
    </div>
    <div className="rounded-md bg-blue-50 p-2 text-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    </div>
  </div>
</div>`}
          preview={
            <div className="w-full max-w-xs">
              <StatCard
                title="Total Revenue"
                value="$45,231.89"
                description="Last 30 days"
                icon={<DollarSign className="h-5 w-5" />}
              />
            </div>
          }
        />

        <ComponentPreview
          title="Stat Card with Trend"
          description="A stat card showing a trend indicator."
          code={`<div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <div className="flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500">New Customers</p>
      <h3 className="mt-1 text-2xl font-semibold text-gray-900">1,234</h3>
      <div className="mt-1 flex items-center">
        <span className="inline-flex items-center text-sm font-medium text-green-600">
          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          12.5%
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-500">Compared to last month</p>
    </div>
    <div className="rounded-md bg-blue-50 p-2 text-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    </div>
  </div>
</div>`}
          preview={
            <div className="w-full max-w-xs">
              <StatCard
                title="New Customers"
                value="1,234"
                description="Compared to last month"
                icon={<Users className="h-5 w-5" />}
                trend={{ value: 12.5, isPositive: true }}
              />
            </div>
          }
        />

        <ComponentPreview
          title="Stat Card Grid"
          description="A grid of stat cards for dashboard layouts."
          code={`<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">Total Users</p>
        <h3 className="mt-1 text-2xl font-semibold text-gray-900">12,345</h3>
        <div className="mt-1 flex items-center">
          <span className="inline-flex items-center text-sm font-medium text-green-600">
            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            8.2%
          </span>
        </div>
      </div>
      <div className="rounded-md bg-blue-50 p-2 text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
    </div>
  </div>
  
  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">Total Revenue</p>
        <h3 className="mt-1 text-2xl font-semibold text-gray-900">$45,231.89</h3>
        <div className="mt-1 flex items-center">
          <span className="inline-flex items-center text-sm font-medium text-green-600">
            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            5.4%
          </span>
        </div>
      </div>
      <div className="rounded-md bg-blue-50 p-2 text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      </div>
    </div>
  </div>
  
  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">Orders</p>
        <h3 className="mt-1 text-2xl font-semibold text-gray-900">2,345</h3>
        <div className="mt-1 flex items-center">
          <span className="inline-flex items-center text-sm font-medium text-red-600">
            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            3.2%
          </span>
        </div>
      </div>
      <div className="rounded-md bg-blue-50 p-2 text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </div>
    </div>
  </div>
  
  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
        <h3 className="mt-1 text-2xl font-semibold text-gray-900">3.24%</h3>
        <div className="mt-1 flex items-center">
          <span className="inline-flex items-center text-sm font-medium text-green-600">
            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            1.2%
          </span>
        </div>
      </div>
      <div className="rounded-md bg-blue-50 p-2 text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      </div>
    </div>
  </div>
</div>`}
          preview={
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
              <StatCard
                title="Total Users"
                value="12,345"
                icon={<Users className="h-5 w-5" />}
                trend={{ value: 8.2, isPositive: true }}
              />
              <StatCard
                title="Total Revenue"
                value="$45,231.89"
                icon={<DollarSign className="h-5 w-5" />}
                trend={{ value: 5.4, isPositive: true }}
              />
              <StatCard
                title="Orders"
                value="2,345"
                icon={<ShoppingCart className="h-5 w-5" />}
                trend={{ value: 3.2, isPositive: false }}
              />
              <StatCard
                title="Conversion Rate"
                value="3.24%"
                icon={<TrendingUp className="h-5 w-5" />}
                trend={{ value: 1.2, isPositive: true }}
              />
            </div>
          }
        />
      </div>
    </div>
  )
}
