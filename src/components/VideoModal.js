import React, { useRef } from "react"
import styled from "styled-components"
import ReactModal from "react-modal"
import { AnimatePresence, motion } from "framer-motion"
import { GrClose } from "react-icons/gr"
import VideoPlayer from "./VideoPlayer"

export const ExitButtonStyles = styled(motion.button)`
  background-color: transparent;
  border: 0;
  align-self: flex-end;
  margin-bottom: 1rem;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 0.125rem solid var(--white);
    outline-offset: 0.25rem;
  }

  path {
    stroke: var(--white);
  }
`

const VideoModal = ({ isModalOpened, handleCloseModal }) => {
  const modalRef = useRef()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ReactModal
        ref={modalRef}
        isOpen={isModalOpened}
        closeTimeoutMS={300}
        contentLabel="Info o konferencji alt:work"
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          overlay: {
            zIndex: 5,
            backgroundColor: "rgba(0,0,0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            inset: 0,
            border: 0,
            backgroundColor: "transparent",
            zIndex: 5,
            width: "85.38rem",
            position: "relative",
            padding: "0",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <ExitButtonStyles
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCloseModal()}
          className="close-modal"
        >
          <GrClose size="32px" color="var(--white)" />
        </ExitButtonStyles>
        <AnimatePresence>{isModalOpened && <VideoPlayer />}</AnimatePresence>
      </ReactModal>
    </motion.div>
  )
}

export default VideoModal
