import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ComponentSectionProps {
  title: string
  description: string
  components: {
    name: string
    description: string
  }[]
}

export function ComponentSection({ title, description, components }: ComponentSectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Link
            key={component.name}
            href={`/components/${title.toLowerCase()}/${component.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="group rounded-lg border p-5 transition-colors hover:bg-muted/50">
              <div className="space-y-2">
                <h3 className="font-medium">{component.name}</h3>
                <p className="text-sm text-muted-foreground">{component.description}</p>
              </div>
              <div className="mt-4 flex items-center text-sm text-blue-500">
                <span>View component</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

