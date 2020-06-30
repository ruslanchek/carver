import * as React from "react"

export const IconCloseSquare = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-close-square"
      width="1em"
      height="1em"
    >
      <rect width={18} height={18} x={3} y={3} className="primary" rx={2} />
      <path
        className="secondary"
        d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"
      />
    </svg>
  )
}
