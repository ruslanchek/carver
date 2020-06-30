import * as React from "react"

export const IconRemoveCircle = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-remove-circle"
      width="1em"
      height="1em"
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <rect width={12} height={2} x={6} y={11} className="secondary" rx={1} />
    </svg>
  )
}
