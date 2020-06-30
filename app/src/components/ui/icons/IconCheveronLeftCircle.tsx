import * as React from "react"

export const IconCheveronLeftCircle = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-cheveron-left-circle"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        className="secondary"
        d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z"
      />
    </svg>
  )
}
