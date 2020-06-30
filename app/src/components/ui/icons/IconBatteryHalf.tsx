import * as React from "react"

export const IconBatteryHalf = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-battery-half"
      width="1em"
      height="1em"
    >
      <path
        className="primary"
        d="M20 9h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v1zM4 8v8h14V8H4z"
      />
      <rect width={6} height={4} x={6} y={10} className="secondary" />
    </svg>
  )
}
