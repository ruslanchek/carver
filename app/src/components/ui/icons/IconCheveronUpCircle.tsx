import * as React from "react"

export const IconCheveronUpCircle = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-cheveron-up-circle"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        className="secondary"
        d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
      />
    </svg>
  )
}
