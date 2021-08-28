import React from "react"
import styled from "styled-components"

const Content = styled.ul`
  position: absolute;
  left: 2.688rem;
  top: 100%;
  padding: 20px;
  min-height: 50px;
  min-width: 50px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 2px;
`

export default function Modal({ children }) {
  return (
    <>
      <Content className="modal-content">{children}</Content>
    </>
  )
}
