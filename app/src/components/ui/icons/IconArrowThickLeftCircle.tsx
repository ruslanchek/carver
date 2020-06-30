import * as React from "react"

export const IconArrowThickLeftCircle = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-arrow-thick-left-circle"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        className="secondary"
        d="M12 10h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5v2a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1 0-1.4l4-4A1 1 0 0 1 12 8v2z"
      />
    </svg>
  )
}
