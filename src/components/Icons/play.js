import React from "react"

export const IconPlay = ({ variant = "light" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="110"
    height="110"
    viewBox="0 0 110 110"
  >
    <path
      id="play-alt"
      d="M55,110a55,55,0,1,1,55-55A55,55,0,0,1,55,110ZM41.25,27.54V82.457L82.5,55Z"
      fill={variant === "dark" ? "var(--color-black)" : "var(--color-white)"}
    />
  </svg>
)