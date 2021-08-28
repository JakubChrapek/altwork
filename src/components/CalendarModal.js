import React from "react"
import styled from "styled-components"
import Modal from "./Modal"

const CalendarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  a {
    color: currentColor;
    text-decoration: none;
  }
`
const CalendarModal = ({ children }) => {
  return (
    <Modal>
      <CalendarList>{children}</CalendarList>
    </Modal>
  )
}

export default CalendarModal
