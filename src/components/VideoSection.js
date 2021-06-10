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
`

const VideoPreview = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  > .gatsby-image-wrapper {
    border-radius: 100%;
  }
  > button {
    position: absolute;
    top: 35%;
    width: 110px;
    height: 110px;
    background-color: transparent;
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    > svg {
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  > p {
    flex: 1 1 50%;
  }
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
        {/* <svg viewBox="0 0 552 552" xmlns="http://www.w3.org/2000/svg">
          <circle cx="226" cy="226" r="226" />
        </svg> */}
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
      </VideoPreview>
      <TextContainer>
        <StructuredText data={firstContentColumn} />
        <StructuredText data={secondContentColumn} />
      </TextContainer>
    </SectionStyles>
  )
}

export default VideoSection
