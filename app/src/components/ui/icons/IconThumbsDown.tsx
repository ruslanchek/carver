import * as React from "react"

export const IconThumbsDown = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-thumbs-down"
      width="1em"
      height="1em"
    >
      <path
        className="primary"
        d="M11 19.2l-2.92-6.8A1 1 0 0 1 8 12V4c0-1.1.9-2 2-2h6c1.5 0 3.11 1.06 3.7 2.45l2.22 5.16A1 1 0 0 1 22 10v2a3 3 0 0 1-3 3h-4v4a3 3 0 0 1-3 3 1 1 0 0 1-1-1v-1.8z"
      />
      <rect
        width={4}
        height={11}
        x={2}
        y={2}
        className="secondary"
        rx={1}
        transform="rotate(180 4 7.5)"
      />
    </svg>
  )
}
