import { motion } from "framer-motion"
import React from "react"
import ReactPlayer from "react-player/youtube"
import styled from "styled-components"

const VideoPlayerStyles = styled(motion.div)`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: calc((51 / 53) * 100%);
  }
  @media (min-width: 767px) {
    &:before {
      padding-top: calc((9 / 16) * 100%);
    }
  }

  > .react-player {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .react-player__preview {
    background-size: contain !important;
    background-repeat: no-repeat;
  }
`

const VideoPlayer = ({ url }) => {
  return (
    <VideoPlayerStyles
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <ReactPlayer
        className="react-player"
        url={url ? url : "https://www.youtube.com/watch?v=KHYDZ3G6lKo"}
        width="100%"
        height="100%"
        controls
      />
    </VideoPlayerStyles>
  )
}

export default VideoPlayer
