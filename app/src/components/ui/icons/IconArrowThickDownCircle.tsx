import * as React from "react"

export const IconArrowThickDownCircle = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-arrow-thick-down-circle"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        className="secondary"
        d="M10 12V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h2a1 1 0 0 1 .7 1.7l-4 4a1 1 0 0 1-1.4 0l-4-4A1 1 0 0 1 8 12h2z"
      />
    </svg>
  )
}
