import React, { useRef } from "react"
import { StructuredText } from "react-datocms"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { LeftArrow, RightArrow } from "./Icons"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem 0 0;
  /* padding-top: 4rem; */
  cursor: grab;
  @media (max-width: 1024px) {
    margin: 0 auto;
    max-width: 20rem;
  }

  > .gatsby-image-wrapper,
  picture,
  img {
    border-radius: 100%;
    width: 12.5rem;
    height: 12.5rem;
    max-width: 50vw;
    max-height: 50vw;
    filter: saturate(0) opacity(0.8);
    opacity: 0.1;
    mix-blend-mode: multiply;
    @media (max-width: 480px) {
      right: 0;
      left: unset;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 6rem;
  overflow: visible;
  pointer-events: none;
  @media (max-width: 1024px) {
    overflow: hidden;
  }
  @media (max-width: 480px) {
    padding-left: 0;
    display: flex;
    justify-content: flex-end;
  }
  svg {
    position: absolute;
    left: 0;
    width: 12.5rem;
    height: 12.5rem;
    max-width: 50vw;
    max-height: 50vw;
    z-index: -1;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  pointer-events: none;
  > h3 {
    font-family: Diagramm;
    font-weight: bold;
    font-size: var(--font-50);
    color: var(--color-black);
    line-height: 1.08;
    margin-top: -6.8rem;
    max-width: 22.75rem;
    @media (max-width: 1024px) {
      font-size: var(--font-40);
    }
    @media (max-width: 767px) {
      margin-top: -5.2rem;
      max-width: 16rem;
    }
    @media (max-width: 480px) {
      font-size: var(--font-32);
      line-height: 1.33;
    }
  }
  > p {
    margin-top: 1.5rem;
    font-size: var(--font-20);
    font-weight: bold;
    color: var(--color-black);
    line-height: 1.4;
    @media (max-width: 480px) {
      margin-top: 1rem;
      font-size: var(--font-18);
    }
  }
`

const Slide = ({ slide, index }) => {
  const { lecturerPhoto, lecturerBio, lecturerHeader } = slide
  const circleVariant = index % 3
  return (
    <SlideWrapper>
      <ImageWrapper>
        <GatsbyImage
          image={lecturerPhoto.gatsbyImageData}
          alt={lecturerPhoto.alt}
        />
        <svg
          aria-labelledby="zielone dekoracyjne koło"
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
    margin-right: 0.5rem;
    &:last-of-type {
      margin: 0 0 0 0.5rem;
    }
    &:focus-visible {
      outline-offset: 0.25rem;
      outline: 1px solid var(--color-black);
    }
  }
  svg {
    width: 4.75rem;
    height: 4.75rem;
  }
`

const SliderStyles = styled(Slider)`
  margin-top: 5rem;
  .slick-list {
    padding: 0 !important;
    @media (max-width: 1366px) {
      overflow: visible;
    }
    @media (max-width: 1024px) {
      overflow: hidden;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
`

const LecturersSlider = ({ lecturers }) => {
  const sliderRef = useRef()

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }
  var settings = {
    className: "center",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  // {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   arrows: false,
  //   dots: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   variableWidth: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // }

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
          <Slide key={`slide-${index}`} slide={slide} index={index} />
        ))}
      </SliderStyles>
    </>
  )
}

export default LecturersSlider
