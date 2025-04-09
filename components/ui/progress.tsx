export function Progress({
  value = 0,
  max = 100,
  label,
  showValue = false,
  size = "md",
  variant = "default",
  className = "",
  ...props
}) {
  // Calculate percentage
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  // Size classes
  const sizeClasses = {
    xs: "h-1",
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
    xl: "h-5",
  }

  // Variant classes
  const variantClasses = {
    default: "bg-primary-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    danger: "bg-red-600",
    info: "bg-blue-600",
  }

  const sizeClass = sizeClasses[size] || sizeClasses.md
  const variantClass = variantClasses[variant] || variantClasses.default

  return (
    <div className={className}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && <div className="text-sm font-medium text-gray-700">{label}</div>}
          {showValue && <div className="text-sm font-medium text-gray-500">{value}%</div>}
        </div>
      )}
      <div
        className="w-full bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        {...props}
      >
        <div
          className={`${sizeClass} ${variantClass} rounded-full transition-all duration-300 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
