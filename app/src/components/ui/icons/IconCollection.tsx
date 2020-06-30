import * as React from "react"

export const IconCollection = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-collection"
      width="1em"
      height="1em"
    >
      <rect width={20} height={12} x={2} y={10} className="primary" rx={2} />
      <path
        className="secondary"
        d="M20 8H4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2zm-2-4H6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"
      />
    </svg>
  )
}
