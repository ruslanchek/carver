import * as React from "react"

export const IconArrowThickUpCircle = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-arrow-thick-up-circle"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        className="secondary"
        d="M14 12v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5H8a1 1 0 0 1-.7-1.7l4-4a1 1 0 0 1 1.4 0l4 4A1 1 0 0 1 16 12h-2z"
      />
    </svg>
  )
}
