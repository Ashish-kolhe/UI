import React from "react"

export function Breadcrumb({ children, className = "", separator = "/", ...props }) {
  // Count the number of children to determine the last item
  const childrenArray = React.Children.toArray(children)

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb" {...props}>
      <ol className="flex items-center space-x-2">
        {React.Children.map(childrenArray, (child, index) => {
          const isLast = index === childrenArray.length - 1

          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isLast,
              separator,
              ...child.props,
            })
          }

          return child
        })}
      </ol>
    </nav>
  )
}

export function BreadcrumbItem({ children, href, isLast = false, separator = "/", className = "", ...props }) {
  return (
    <li className="flex items-center">
      {href && !isLast ? (
        <a href={href} className={`text-sm font-medium text-gray-500 hover:text-gray-700 ${className}`} {...props}>
          {children}
        </a>
      ) : (
        <span
          className={`text-sm font-medium ${isLast ? "text-gray-900" : "text-gray-500"} ${className}`}
          aria-current={isLast ? "page" : undefined}
          {...props}
        >
          {children}
        </span>
      )}

      {!isLast && (
        <span className="mx-2 text-gray-400" aria-hidden="true">
          {separator}
        </span>
      )}
    </li>
  )
}
