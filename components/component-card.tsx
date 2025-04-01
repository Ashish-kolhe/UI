import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface ComponentCardProps {
  title: string
  description: string
  href: string
  className?: string
}

export function ComponentCard({ title, description, href, className }: ComponentCardProps) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-lg border p-6 shadow-md transition-all hover:shadow-lg",
          className,
        )}
      >
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium tracking-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex items-center text-sm text-blue-500">
            <span>View components</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}

