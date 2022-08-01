import React, { useRef } from "react"
import { GrClose } from "react-icons/gr"
import Modal from "react-modal"
import styled from "styled-components"
import { ExitButtonStyles } from "./VideoModal"

Modal.setAppElement("#___gatsby")

const CalendarModalStyles = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  width: 50%;
  max-width: 20rem;
  height: 40vh;
  max-height: 16rem;
  padding-left: 4.5rem;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`

const Button = styled(ExitButtonStyles)`
  position: absolute;
  top: 0.75rem;
  right: 1.25rem;
`

const CalendarList = styled.ul`
  padding: 0;
  margin: 0.25rem 0 0;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > a {
    padding: 0.25rem 0;
    margin: 0.25rem 0;
    &:first-of-type {
      margin-top: 0;
    }
    color: currentColor;
    font-size: var(--font-16);
    text-decoration: none;
    font-weight: bold;
    line-height: 1.7;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: -2rem;
      top: 0.9rem;
      transform: translateY(calc(-50% + 0.2rem));
      width: 1.5rem;
      height: 1.5rem;
      transition: transform 0.25s var(--cubic);
      z-index: -1;
      background-color: var(--color-accent);
      border-radius: 1.5rem;
    }
    &:hover {
      :after {
        transform: translate(2rem, calc(-50% + 0.2rem)) scale(1.4);
      }
    }
  }
`

export default function CalendarModal({ children, isOpen, onRequestClose }) {
  const modalRef = useRef()

  
  return (
    <CalendarModalStyles
      ref={modalRef}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
    >
      <Button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRequestClose}
        className="close-modal"
      >
        <GrClose size="22px" color="var(--white)" />
      </Button>
      <CalendarList>{children}</CalendarList>
    </CalendarModalStyles>
  )
}
