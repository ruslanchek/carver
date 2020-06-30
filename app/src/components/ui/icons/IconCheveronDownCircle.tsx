import * as React from "react"

export const IconCheveronDownCircle = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-cheveron-down-circle"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        className="secondary"
        d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
      />
    </svg>
  )
}
