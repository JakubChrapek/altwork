import React, { useState } from "react"
import VideoModal from "./VideoModal"
import { IconPlay } from "./Icons"
import { StructuredText } from "react-datocms"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { motion } from "framer-motion"

const SectionStyles = styled.section`
  width: 100%;
  padding-left: 17.188rem;
  margin-top: -4.4rem;
`

const VideoPreview = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  .gatsby-image-wrapper {
    border-radius: 100%;
  }
  button {
    position: absolute;
    top: calc(50% - 6.875rem);
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-black);
  border-radius: 50%;
  padding: 3.375rem;
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
      {isModalOpened && <VideoModal isModalOpened handleCloseModal />}
      <VideoPreview>
        <CircleBorder>
          <GatsbyImage
            image={previewImage.gatsbyImageData}
            alt={previewImage.alt}
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ ease: [0.25, 0.68, 0.5, 0.98], duration: 0.6 }}
            type="button"
            onClick={handleOpenModal}
          >
            <IconPlay />
          </motion.button>
        </CircleBorder>
      </VideoPreview>
      <TextContainer>
        <StructuredText data={firstContentColumn} />
        <StructuredText data={secondContentColumn} />
      </TextContainer>
    </SectionStyles>
  )
}

export default VideoSection
