export function Table({ children, className = "", ...props }) {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y divide-gray-200 ${className}`} {...props}>
        {children}
      </table>
    </div>
  )
}

export function TableHeader({ children, className = "", ...props }) {
  return (
    <thead className={`bg-gray-50 ${className}`} {...props}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className = "", ...props }) {
  return (
    <tbody className={`divide-y divide-gray-200 bg-white ${className}`} {...props}>
      {children}
    </tbody>
  )
}

export function TableFooter({ children, className = "", ...props }) {
  return (
    <tfoot className={`bg-gray-50 ${className}`} {...props}>
      {children}
    </tfoot>
  )
}

export function TableRow({ children, className = "", isHeader = false, ...props }) {
  return (
    <tr
      className={`
        ${isHeader ? "" : "hover:bg-gray-50"}
        ${className}
      `}
      {...props}
    >
      {children}
    </tr>
  )
}

export function TableHead({ children, className = "", ...props }) {
  return (
    <th
      scope="col"
      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 ${className}`}
      {...props}
    >
      {children}
    </th>
  )
}

export function TableCell({ children, className = "", ...props }) {
  return (
    <td className={`whitespace-nowrap px-6 py-4 text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </td>
  )
}

export function TableCaption({ children, className = "", ...props }) {
  return (
    <caption className={`py-2 text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </caption>
  )
}
