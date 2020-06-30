import * as React from "react"

export const IconDocumentAdd = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-document-add"
      width="1em"
      height="1em"
    >
      <path
        className="primary"
        d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z"
      />
      <path
        className="secondary"
        d="M13 15h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2z"
      />
      <polygon className="secondary" points="14 2 20 8 14 8" />
    </svg>
  )
}
