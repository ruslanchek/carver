import * as React from "react"

export const IconArrowThinUpCircle = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-arrow-thin-up-circle"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        className="secondary"
        d="M13 9.41V17a1 1 0 0 1-2 0V9.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.42L13 9.4z"
      />
    </svg>
  )
}
