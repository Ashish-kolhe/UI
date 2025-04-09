import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Users, CreditCard, Activity, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Stats - UI Library",
  description: "Stats component for displaying metrics and KPIs",
}

export default function StatsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Stats</h1>
          <p className="text-lg text-muted-foreground">
            Stats components for displaying metrics, KPIs, and other numerical data.
          </p>
        </div>

        <ComponentPreview
          title="Basic Stats Card"
          description="A simple stats card with title, value, and description."
          code={`<Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
    <DollarSign className="h-4 w-4 text-muted-foreground" />
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">$45,231.89</div>
    <p className="text-xs text-muted-foreground">
      +20.1% from last month
    </p>
  </CardContent>
</Card>`}
          preview={
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
          }
        />

        <ComponentPreview
          title="Stats Grid"
          description="A grid of stats cards for displaying multiple metrics."
          code={`<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
      <DollarSign className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">$45,231.89</div>
      <div className="flex items-center text-xs text-green-500">
        <ArrowUpRight className="mr-1 h-3 w-3" />
        <span>+20.1%</span>
      </div>
    </CardContent>
  </Card>
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
      <Users className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">+2350</div>
      <div className="flex items-center text-xs text-green-500">
        <ArrowUpRight className="mr-1 h-3 w-3" />
        <span>+180.1%</span>
      </div>
    </CardContent>
  </Card>
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Sales</CardTitle>
      <CreditCard className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">+12,234</div>
      <div className="flex items-center text-xs text-green-500">
        <ArrowUpRight className="mr-1 h-3 w-3" />
        <span>+19%</span>
      </div>
    </CardContent>
  </Card>
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Active Now</CardTitle>
      <Activity className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">+573</div>
      <div className="flex items-center text-xs text-red-500">
        <ArrowDownRight className="mr-1 h-3 w-3" />
        <span>-201</span>
      </div>
    </CardContent>
  </Card>
</div>`}
          preview={
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <div className="flex items-center text-xs text-green-500">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    <span>+20.1%</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <div className="flex items-center text-xs text-green-500">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    <span>+180.1%</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <div className="flex items-center text-xs text-green-500">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    <span>+19%</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <div className="flex items-center text-xs text-red-500">
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                    <span>-201</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
        />

        <ComponentPreview
          title="Stats with Progress"
          description="Stats cards with progress indicators."
          code={`<div className="grid gap-4 md:grid-cols-2">
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-medium">Monthly Target</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">$45,231 / $100,000</div>
      <div className="mt-4 h-2 w-full rounded-full bg-muted">
        <div className="h-full w-[45%] rounded-full bg-primary"></div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        45% of monthly target reached
      </p>
    </CardContent>
  </Card>
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-medium">Quarterly Goal</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">$245,000 / $500,000</div>
      <div className="mt-4 h-2 w-full rounded-full bg-muted">
        <div className="h-full w-[49%] rounded-full bg-primary"></div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        49% of quarterly goal reached
      </p>
    </CardContent>
  </Card>
</div>`}
          preview={
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Target</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231 / $100,000</div>
                  <div className="mt-4 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[45%] rounded-full bg-primary"></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">45% of monthly target reached</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Quarterly Goal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$245,000 / $500,000</div>
                  <div className="mt-4 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[49%] rounded-full bg-primary"></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">49% of quarterly goal reached</p>
                </CardContent>
              </Card>
            </div>
          }
        />
      </div>
    </div>
  )
}
