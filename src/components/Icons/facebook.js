import React from "react"
import styled from "styled-components"

const IconStyles = styled.svg`
    width: 3.75rem;
    height: 3.75rem;
`

export const IconFB = ({ variant = "dark" }) => (
<IconStyles xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
  <path
    id="facebook-with-circle"
    d="M30.72.72a30,30,0,1,0,30,30A30,30,0,0,0,30.72.72Zm7.106,20.731H33.317c-.535,0-1.128.7-1.128,1.637v3.257h5.641l-.852,4.644H32.189V44.93H26.868V30.989H22.039V26.345h4.828V23.614c0-3.918,2.719-7.1,6.45-7.1h4.509v4.941Z"
    transform="translate(-0.72 -0.72)"
    fill={variant === "dark" ? "var(--color-black)" : "var(--color-white)"}
  />
</IconStyles>
)