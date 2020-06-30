import * as React from "react"

export const IconDocumentRemove = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-document-remove"
      width="1em"
      height="1em"
    >
      <path
        className="primary"
        d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z"
      />
      <rect width={8} height={2} x={8} y={15} className="secondary" rx={1} />
      <polygon className="secondary" points="14 2 20 8 14 8" />
    </svg>
  )
}
