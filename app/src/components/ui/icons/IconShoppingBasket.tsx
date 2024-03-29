import * as React from "react"

export const IconShoppingBasket = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-shopping-basket"
      width="1em"
      height="1em"
    >
      <g>
        <path
          className="secondary"
          d="M21.78 10l-2.81 11.24A1 1 0 0 1 18 22H6a1 1 0 0 1-.97-.76L2.22 10h19.56zM6.03 15.24l1 4a1 1 0 0 0 1.94-.48l-1-4a1 1 0 0 0-1.94.48zm10-.48l-1 4a1 1 0 0 0 1.94.48l1-4a1 1 0 0 0-1.94-.48zM11 15v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0z"
        />
        <rect width={20} height={4} x={2} y={8} className="primary" rx={1} />
        <path
          className="secondary"
          d="M9.7 9.7a1 1 0 1 1-1.4-1.4l6-6a1 1 0 0 1 1.4 1.4l-6 6z"
        />
      </g>
    </svg>
  )
}
