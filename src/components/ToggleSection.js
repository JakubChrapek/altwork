import { AnimatePresence, motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"

const ToggleStyles = styled.section`
  margin-top: 10.5rem;
  padding: 10.063rem 0 18.125rem;
  @media (max-width: 1283px) {
    padding: 7rem 0 14.125rem;
  }
  position: relative;
  /* overflow: hidden; */
  .gatsby-image-wrapper {
    position: absolute !important;
  }
`

const Armchair = styled(GatsbyImage)`
  width: 35.5vw;
  max-width: 30.375rem;
  left: -8.6rem;
  top: 3.4rem;
`

const Chair = styled(GatsbyImage)`
  width: 28.9vw;
  max-width: 24.688rem;
  right: -5rem;
  top: 0;
`

const Toggler = styled.button`
  width: 21.813rem;
  height: 13rem;
  border: 0;
  background-color: var(--color-black);
  display: flex;
  border-radius: 13rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  &:focus-visible {
    outline-offset: 4px;
    outline: 4px solid var(--color-accent);
  }
  > span {
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    display: inline-block;
    background-color: var(--color-accent);
  }
`

const ImageWrapper = styled(motion.div)``

const ToggleSection = ({ chairoff, chairon, armchairoff, armchairon }) => {
  const [toggleState, setToggleState] = useState(false)
  const transition = { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }
  return (
    <ToggleStyles>
      <div>
        <AnimatePresence>
          {toggleState ? (
            <ImageWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="armchair-off"
              transition={{ ...transition, duration: 1 }}
            >
              <Armchair image={armchairoff.gatsbyImageData} />
            </ImageWrapper>
          ) : (
            <ImageWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="armchair-on"
              transition={{ ...transition, duration: 1 }}
            >
              <Armchair image={armchairon.gatsbyImageData} />
            </ImageWrapper>
          )}
          {toggleState ? (
            <ImageWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="chair-on"
              transition={{ ...transition, duration: 1 }}
            >
              <Chair image={chairon.gatsbyImageData} />
            </ImageWrapper>
          ) : (
            <ImageWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="chair-off"
              transition={{ ...transition, duration: 1 }}
            >
              <Chair image={chairoff.gatsbyImageData} />
            </ImageWrapper>
          )}
        </AnimatePresence>
        <Toggler onClick={() => setToggleState(!toggleState)}>
          <motion.span
            initial={{ x: 0 }}
            animate={toggleState ? { x: "8.813rem" } : { x: 0 }}
            transition={transition}
          />
        </Toggler>
      </div>
    </ToggleStyles>
  )
}

export default ToggleSection
