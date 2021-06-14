import React, { useRef } from "react"
import { StructuredText } from "react-datocms"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { LeftArrow, RightArrow } from "./icons"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem 0 0;
  padding-top: 4rem;
  cursor: grab;

  > .gatsby-image-wrapper,
  picture,
  img {
    border-radius: 100%;
    width: 14.6vw;
    height: 14.6vw;
    max-width: 12.5rem;
    max-height: 12.5rem;
    filter: saturate(0) opacity(0.8);
    opacity: 0.1;
    mix-blend-mode: multiply;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  padding-left: 6rem;
  overflow: visible;
  pointer-events: none;
  svg {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 0;
    z-index: -1;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6rem;
  z-index: 1;
  pointer-events: none;
  > h3 {
    font-family: Diagramm;
    font-weight: bold;
    font-size: var(--font-50);
    color: var(--color-black);
    line-height: 1.08;
    margin-top: -2.8rem;
  }
  > p {
    margin-top: 1.5rem;
    font-size: var(--font-20);
    font-weight: bold;
    color: var(--color-black);
    line-height: 1.4;
  }
`

const Slide = ({ slide, index }) => {
  const { lecturerPhoto, lecturerBio, lecturerHeader } = slide
  const circleVariant = index % 3
  return (
    <SlideWrapper>
      <ImageWrapper>
        <GatsbyImage image={lecturerPhoto.gatsbyImageData} />
        <svg
          aria-labelledby="green decorative circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          overflow="visible"
        >
          <motion.circle
            cx="100"
            cy={40 + 60 * circleVariant}
            r="100"
            fill="#02E745"
          />
        </svg>
      </ImageWrapper>
      <TextWrapper>
        <h3>
          <StructuredText data={lecturerHeader} />
        </h3>
        <StructuredText data={lecturerBio} />
      </TextWrapper>
    </SlideWrapper>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  > button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    &:focus-visible {
      outline: 1px solid var(--color-black);
    }
  }
  svg {
    width: 76px;
    height: 76px;
    margin-right: 0.5rem;
    &:last-of-type {
      margin: 0 0 0 0.5rem;
    }
  }
`

const SliderStyles = styled(Slider)`
  margin-top: 5rem;
`

const LecturersSlider = ({ lecturers }) => {
  const sliderRef = useRef()

  const handleNext = () => {
    sliderRef.current.slickNext()
    console.log(sliderRef.current)
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }
  var settings = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    swipeToSlide: true,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <ButtonsWrapper>
        <button onClick={handlePrev}>
          <LeftArrow />
        </button>
        <button onClick={handleNext}>
          <RightArrow />
        </button>
      </ButtonsWrapper>
      <SliderStyles ref={sliderRef} {...settings}>
        {lecturers.map((slide, index) => (
          <Slide slide={slide} index={index} />
        ))}
      </SliderStyles>
    </>
  )
}

export default LecturersSlider
