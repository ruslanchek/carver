import * as React from "react"

export const IconAddSquare = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-add-square"
      width="1em"
      height="1em"
    >
      <rect width={18} height={18} x={3} y={3} className="primary" rx={2} />
      <path
        className="secondary"
        d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z"
      />
    </svg>
  )
}
