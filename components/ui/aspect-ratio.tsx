import React from "react"
import { cn } from "@/lib/utils"

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 1 / 1, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          ...style,
          paddingBottom: `${(1 / ratio) * 100}%`,
          position: "relative",
        }}
        className={cn("", className)}
        {...props}
      >
        <div className="absolute inset-0">{props.children}</div>
      </div>
    )
  },
)
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
