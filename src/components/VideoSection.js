import React, { useState } from "react"
import VideoModal from "./VideoModal"
import { IconPlay } from "./Icons/play"
import { StructuredText } from "react-datocms"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"

const SectionStyles = styled.section`
  width: 100%;
  padding-left: 17.188rem;
  @media (max-width: 1283px) {
    padding-left: 3.188rem;
  }
  @media (max-width: 1024px) {
    padding-left: 0;
  }
  margin-top: -0.4rem;
  @media (max-width: 767px) {
    margin-top: 13.5rem;
  }
`

const VideoPreview = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 767px) {
    margin-bottom: 10rem;
  }
  > svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  .gatsby-image-wrapper {
    border-radius: 100%;
    max-width: 27.75rem;
    max-height: 27.75rem;
    overflow: unset;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);

    > div,
    img {
      border-radius: 100%;
    }
    &:hover ~ .circle-border {
      transform: translate(-50%, -50%) scale(1.55);
    }
    @media (max-width: 1283px) {
      max-width: 24rem;
    }
    @media (max-width: 480px) {
      max-width: 80vw;
      width: 80vw;
    }
  }
  button {
    &:hover ~ .circle-border {
      transform: translate(-50%, -50%) scale(1.55);
    }
    position: absolute;
    top: calc(50%);
    transform: translateY(-50%);
    width: 5.3rem;
    height: 5.3rem;
    > svg {
      width: 5.3rem;
      height: 5.3rem;
    }
    @media (max-width: 767px) {
      width: 4.75rem;
      height: 4.75rem;
      > svg {
        width: 4.75rem;
        height: 4.75rem;
      }
    }
    background-color: transparent;
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    &:focus-visible {
      outline-offset: 0.25rem;
      outline: 0.125rem solid var(--color-white);
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5.7rem;
  > p {
    flex: 1 1 50%;
    max-width: 22rem;
    font-size: var(--font-20);
    @media (max-width: 767px) {
      font-size: var(--font-18);
    }
    :first-of-type {
      margin-right: 6.625rem;
      @media (max-width: 1283px) {
        margin-right: 3.625rem;
      }
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    > p {
      flex: unset;
      max-width: 100%;
      :first-of-type {
        margin-right: 0;
      }
      + p {
        margin-top: 2rem;
      }
    }
  }
  @media (max-width: 1024px) {
    > p {
      line-height: 1.33;
      + p {
        margin-top: 0;
      }
    }
  }
`

const CircleBorder = styled(motion.div)`
  width: 34.5rem;
  height: 34.5rem;
  pointer-events: none;
  @media (max-width: 1283px) {
    width: 30rem;
    height: 30rem;
  }
  @media (max-width: 480px) {
    width: 124vw;
    height: 124vw;
  }
  display: inline-block;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  will-change: transform;
  transition: transform 0.25s var(--cubic);
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

  return (
    <SectionStyles>
      <AnimatePresence>
        {isModalOpened && (
          <VideoModal isModalOpened handleCloseModal={handleCloseModal} />
        )}
      </AnimatePresence>
      <VideoPreview>
        <GatsbyImage
          image={previewImage.gatsbyImageData}
          alt={previewImage.alt}
        />
        <button aria-label='play video' type="button" onClick={handleOpenModal}>
          <IconPlay />
        </button>
        <CircleBorder className="circle-border" />
      </VideoPreview>
      <TextContainer>
        <StructuredText data={firstContentColumn} />
        <StructuredText data={secondContentColumn} />
      </TextContainer>
    </SectionStyles>
  )
}

export default VideoSection
