import * as React from "react"

export const IconNotification = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-notification"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={19} r={3} className="secondary" />
      <path
        className="primary"
        d="M10.02 4.28L10 4a2 2 0 1 1 3.98.28A7 7 0 0 1 19 11v5a1 1 0 0 0 1 1 1 1 0 0 1 0 2H4a1 1 0 0 1 0-2 1 1 0 0 0 1-1v-5a7 7 0 0 1 5.02-6.72z"
      />
    </svg>
  )
}
