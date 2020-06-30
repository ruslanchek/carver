import * as React from "react"

export const IconAddCircle = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-add-circle"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        className="secondary"
        d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z"
      />
    </svg>
  )
}
