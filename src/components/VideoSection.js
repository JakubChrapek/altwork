import React, { useRef, useState } from "react"
import VideoModal from "./videoModal"
import { IconPlay } from "./icons"
import { StructuredText } from "react-datocms"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { gsap } from "gsap"

const SectionStyles = styled.section`
  width: 100%;
  padding-left: 17.188rem;
  margin-top: -4.4rem;
`

const VideoPreview = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  > svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  .gatsby-image-wrapper {
    border-radius: 100%;
    pointer-events: none;
  }
  button {
    position: absolute;
    top: calc(50%);
    transform: translateY(-50%);
    width: 6.875rem;
    height: 6.875rem;
    background-color: transparent;
    border-radius: 100%;
    border: 0;
    cursor: pointer;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.563rem;
  > p {
    flex: 1 1 50%;
    max-width: 22rem;
    font-size: var(--font-20);
    :first-of-type {
      margin-right: 6.625rem;
    }
  }
`

const CircleBorder = styled(motion.div)`
  width: 552px;
  height: 552px;
  display: inline-block;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--color-black);
  border-radius: 50%;
`

const VideoSection = ({
  previewImage,
  firstContentColumn,
  secondContentColumn,
}) => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const handleCloseModal = () => setIsModalOpened(false)
  const handleOpenModal = () => setIsModalOpened(true)
  const buttonRef = useRef()
  const circleRef = useRef()

  const tl = gsap.timeline()

  const AnimateMouseOver = () => {
    tl.to(
      buttonRef.current,
      {
        scale: 1.05,
      },
      "start"
    ).to(
      circleRef.current,
      {
        scale: 1.4,
      },
      "start"
    )
    console.log("OVER")
  }

  const AnimateMouseOut = () => {
    console.log("OUT")
    tl.reverse()
  }

  return (
    <SectionStyles>
      <AnimatePresence>
        {isModalOpened && (
          <VideoModal isModalOpened handleCloseModal={handleCloseModal} />
        )}
      </AnimatePresence>
      <VideoPreview
        onMouseOver={() => AnimateMouseOver()}
        onMouseOut={() => AnimateMouseOut()}
      >
        <CircleBorder ref={circleRef} />
        <GatsbyImage
          image={previewImage.gatsbyImageData}
          alt={previewImage.alt}
        />
        <button ref={buttonRef} type="button" onClick={handleOpenModal}>
          <IconPlay />
        </button>
      </VideoPreview>
      <TextContainer>
        <StructuredText data={firstContentColumn} />
        <StructuredText data={secondContentColumn} />
      </TextContainer>
    </SectionStyles>
  )
}

export default VideoSection
