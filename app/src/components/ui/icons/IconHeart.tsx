import * as React from "react"

export const IconHeart = () => {
  return (
    <svg viewBox="0 0 24 24" className="icon-heart" width="1em" height="1em">
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        className="secondary"
        d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"
      />
    </svg>
  )
}
