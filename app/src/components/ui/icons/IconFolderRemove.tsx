import * as React from "react"

export const IconFolderRemove = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-folder-remove"
      width="1em"
      height="1em"
    >
      <g>
        <path
          className="primary"
          d="M22 10H2V6c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v2z"
        />
        <rect width={20} height={12} x={2} y={8} className="secondary" rx={2} />
        <path className="primary" d="M9 13h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z" />
      </g>
    </svg>
  )
}
