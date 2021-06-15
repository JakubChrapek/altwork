import React, { useEffect, useState } from "react"
import styled from "styled-components"
import GSAP from "gsap"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const LogoStyles = styled.svg`
  width: 25.4vw;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "21.75rem")};
  cursor: pointer;
  #toggle-bg,
  path {
    fill: ${({ variant }) =>
      variant === "light" ? "var(--color-white)" : "var(--color-black)"};
  }
  #toggle-circle {
    fill: ${({ circleFillColor }) =>
      circleFillColor ? circleFillColor : "var(--color-accent)"};
  }
`

export const Logo = ({ maxWidth, variant = "dark", circleFillColor }) => {
  const [toggle, setToggle] = useState(false)

  const handleChangeToggle = () => {
    console.log("TEST")
    setToggle(!toggle)
  }

  useEffect(() => {
    GSAP.to("#toggle-circle", {
      duration: 1,
      attr: { x: 100 },
    })
  }, [toggle])

  return (
    <Link
      to="/"
      onPointerEnter={handleChangeToggle}
      onPointerLeave={handleChangeToggle}
    >
      <LogoStyles
        maxWidth={maxWidth}
        variant={variant}
        circleFillColor={circleFillColor}
        aria-labelledby="altworkTitle altworkDescription"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 222.33 108.38"
      >
        <title id="altworkTitle">Logo konferencji alt:work</title>
        <desc id="altworkDescription">
          Logo alt:work to dwa wiersze tekstu dekoracyjnego. Pierwsza linia
          zawiera słowo alt nawiązujące do alternatynego podejścia. Drugi wiersz
          to słowo work, w którym zamiast litery o umieszczono grafikę
          włączonego przełącznika zielonego koloru.
        </desc>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M43.84,16.51V57.94H33.52L32.17,46c-2.38,10-7.62,12.86-15.24,12.86C5.5,58.82,0,49,0,37.23c0-12.07,5.63-21.59,16.9-21.59,7.62,0,12.62,2.85,14.69,12.86l1.27-12ZM31.7,37.23c0-6.67-3.73-11.67-9.77-11.67-5.87,0-9.76,5.4-9.76,11.67s3.89,11.59,9.76,11.59C28,48.82,31.7,43.82,31.7,37.23Z" />
            <path d="M53.45,0H65.59V57.94H53.45Z" />
            <path d="M99.41,47.94v10H90.83c-8.81,0-13.25-4.68-13.25-13.65V26h-6V16.51h6V5.16H89.72V7.62c0,4.21-2.62,8.89-9,8.89H99.33V26H89.72v16.5c0,3.5,1.83,5.4,5.24,5.4Z" />
            <path d="M106.39,23.26c0-3.5,2.07-6.12,6.19-6.12s6.27,2.62,6.27,6.12-2.14,6.11-6.27,6.11S106.39,26.75,106.39,23.26Zm0,29.13c0-3.49,2.07-6.11,6.19-6.11s6.27,2.62,6.27,6.11-2.14,6.11-6.27,6.11S106.39,55.88,106.39,52.39Z" />
            <path d="M63,65.32,52.71,106.75H38.1L31.43,74.61l-6.59,32.14H10.24L0,65.32H12.3L18.1,95,24,65.32H39l5.8,29.61,5.79-29.61Z" />
            <path d="M174.71,65.32v9.52h-4.84c-7.15,0-11.12,3.89-11.12,11.75v20.16H146.61V65.32h9.84l1.19,12.94c1.75-9.53,6.19-12.94,12-12.94Z" />
            <path d="M209,106.75,193,87v19.76H180.82V48.81H193V82.7l15.47-17.38H222.1L204.63,85.4l17.7,21.35Z" />
            <motion.rect
              id="toggle-bg"
              x="66.29"
              y="64.31"
              width="74.13"
              height="44.07"
              rx="22.03"
            />
            <motion.rect
              id="toggle-circle"
              x="96.53"
              y="64.31"
              width="44.07"
              height="44.07"
              rx="22.03"
            />
          </g>
        </g>
      </LogoStyles>
    </Link>
  )
}

const IconStyles = styled.svg`
  width: 3.75rem;
  height: 3.75rem;
`

export const IconFB = ({ variant = "dark" }) => (
  <IconStyles xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
    <path
      id="facebook-with-circle"
      d="M30.72.72a30,30,0,1,0,30,30A30,30,0,0,0,30.72.72Zm7.106,20.731H33.317c-.535,0-1.128.7-1.128,1.637v3.257h5.641l-.852,4.644H32.189V44.93H26.868V30.989H22.039V26.345h4.828V23.614c0-3.918,2.719-7.1,6.45-7.1h4.509v4.941Z"
      transform="translate(-0.72 -0.72)"
      fill={variant === "dark" ? "var(--color-black)" : "var(--color-white)"}
    />
  </IconStyles>
)

export const IconYT = ({ variant = "dark" }) => (
  <IconStyles
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
  >
    <g id="Group_146" data-name="Group 146" transform="translate(-891 -168)">
      <path
        id="Subtraction_4"
        data-name="Subtraction 4"
        d="M-1349,60a29.811,29.811,0,0,1-11.677-2.358,29.9,29.9,0,0,1-9.536-6.429,29.9,29.9,0,0,1-6.429-9.536A29.814,29.814,0,0,1-1379,30a29.812,29.812,0,0,1,2.358-11.677,29.9,29.9,0,0,1,6.429-9.536,29.9,29.9,0,0,1,9.536-6.429A29.811,29.811,0,0,1-1349,0a29.813,29.813,0,0,1,11.677,2.358,29.9,29.9,0,0,1,9.536,6.429,29.9,29.9,0,0,1,6.429,9.536A29.813,29.813,0,0,1-1319,30a29.815,29.815,0,0,1-2.357,11.678,29.9,29.9,0,0,1-6.429,9.536,29.9,29.9,0,0,1-9.536,6.429A29.812,29.812,0,0,1-1349,60Zm-.761-32.864c-5,.168-8.408.252-10.119.252a3.576,3.576,0,0,0-3.513,2.76,14.7,14.7,0,0,0-.418,2.592c-.167,2.941-.223,5.586-.167,7.861a17.033,17.033,0,0,0,.669,4.349,3.51,3.51,0,0,0,2.426,2.175,5.885,5.885,0,0,0,1.84.334c.554,0,1.662.027,3.388.083,1.692.056,3.029.084,3.973.084,2.72,0,7-.084,12.712-.251a3.72,3.72,0,0,0,3.6-2.091,6.255,6.255,0,0,0,.585-2.09c.167-2.665.251-5.113.251-7.276a36.027,36.027,0,0,0-.419-4.935c-.333-1.887-1.29-3.012-2.843-3.344a8.369,8.369,0,0,0-2.175-.251c-1.109-.056-2.783-.112-4.975-.167s-3.811-.084-4.81-.084Zm6.439-11.707a14.3,14.3,0,0,0-1.839.083v8.364a2.448,2.448,0,0,0,.083.585,1.429,1.429,0,0,0,.71.963,1.117,1.117,0,0,0,.534.136,1.533,1.533,0,0,0,.679-.178,4.353,4.353,0,0,0,.92-.585l.418-.418v1h1.84V15.43h-1.84v7.024a1.364,1.364,0,0,1-.585,1.171.792.792,0,0,1-.456.189.414.414,0,0,1-.129-.02c-.222-.056-.335-.252-.335-.585V15.43Zm-6.022-.167a2.37,2.37,0,0,0-2.592,2.258c-.055.609-.084,1.988-.084,4.1a13.593,13.593,0,0,0,.084,1.757,3.249,3.249,0,0,0,.92,1.547,2.362,2.362,0,0,0,1.673.627,2.668,2.668,0,0,0,1.756-.627,2.218,2.218,0,0,0,.836-1.547l.126-.921.042-1.086v-.921c0-.285-.014-.707-.042-1.255s-.042-.965-.042-1.255a.7.7,0,0,0-.042-.209.685.685,0,0,1-.042-.209A2.433,2.433,0,0,0-1349.345,15.262ZM-1358.459,12h0c.44,1.543.919,3.091,1.422,4.6a16.747,16.747,0,0,1,1.086,6.523,2.8,2.8,0,0,0-.083.67c0,.225.013.493.042.795s.041.541.041.71h1.924V20.363a2.752,2.752,0,0,1,.167-.835c.228-.8.594-1.979,1.087-3.513.512-1.595.867-2.744,1.086-3.513a.239.239,0,0,1,.084-.167,1.384,1.384,0,0,0,.084-.335h-1.84a.505.505,0,0,0-.335.335c-.052.211-.134.526-.25.961s-.2.72-.251.878a22.6,22.6,0,0,0-.753,2.677c-.112-.113-.167-.2-.167-.251-.223-.95-.606-2.345-1.171-4.265-.11-.222-.223-.335-.334-.335h-1.84Zm13.284,32.1a1.691,1.691,0,0,1-.823-.233c-.491-.326-.856-.579-1.087-.752a1.7,1.7,0,0,0,0,.752h-1.756V30.649h1.756v4.182l.293-.293a1.53,1.53,0,0,1,.376-.293,2.088,2.088,0,0,1,1.2-.465,1.3,1.3,0,0,1,.474.089,1.77,1.77,0,0,1,1,1.381,3.159,3.159,0,0,1,.25,1.254v5.018a5.813,5.813,0,0,1-.167,1.171,1.6,1.6,0,0,1-.878,1.255A1.494,1.494,0,0,1-1345.175,44.1Zm-.656-8.511c-.611,0-.921.253-.921.752V38.93a21.854,21.854,0,0,0,0,2.677c0,.444.31.7.921.752a.611.611,0,0,0,.67-.585v-5.6C-1345.162,35.782-1345.387,35.585-1345.831,35.585Zm6.135,8.478a2.693,2.693,0,0,1-1.452-.41,2.5,2.5,0,0,1-1.171-1.881,31.444,31.444,0,0,1,0-5.6,2.407,2.407,0,0,1,.881-1.8,2.66,2.66,0,0,1,1.694-.554c.084,0,.175,0,.271.01a2.694,2.694,0,0,1,1.756.752,2.79,2.79,0,0,1,.753,1.84,4.568,4.568,0,0,1,.083.878c0,.311-.014.662-.042,1.045s-.042.695-.042.921c-1.51,0-2.72-.03-3.6-.085.056,1.16.112,2,.167,2.509a.684.684,0,0,0,.753.67c.444,0,.7-.253.752-.752a5.587,5.587,0,0,0,.084-1.172h1.839a2.915,2.915,0,0,1-.21,2.216,2.388,2.388,0,0,1-1.63,1.3A3.688,3.688,0,0,1-1339.7,44.063Zm-.114-8.563c-.444,0-.7.169-.752.5,0,.22-.014.508-.042.878s-.042.657-.042.878h1.673a8.9,8.9,0,0,0-.167-1.756A.587.587,0,0,0-1339.81,35.5Zm-14.628,8.548c-.556,0-.924-.343-1.093-1.019a5.082,5.082,0,0,1-.083-.753V34h1.84v7.61c0,.333.084.529.251.585a.626.626,0,0,0,.232.048.676.676,0,0,0,.52-.3,1.13,1.13,0,0,0,.5-1V34h1.84v9.868l-1.84,0v-1a2.007,2.007,0,0,1-.5.5,4.2,4.2,0,0,1-1.087.585A1.97,1.97,0,0,1-1354.439,44.048Zm-3.017-.185h-2.091V32.574h-2.007V30.649h6.19v1.924h-2.093V43.862Zm8.2-20.07a.908.908,0,0,1-.67-.419,1.749,1.749,0,0,1-.084-.67V20.363c0-.278-.013-.672-.041-1.172-.028-.482-.042-.858-.042-1.087a1.183,1.183,0,0,1,.083-.5.725.725,0,0,1,.753-.585.657.657,0,0,1,.752.585v5.1a1.751,1.751,0,0,1-.084.67A.908.908,0,0,1-1349.26,23.793Z"
        transform="translate(2270 168)"
        fill={variant === "dark" ? "var(--color-black)" : "var(--color-white)"}
      />
    </g>
  </IconStyles>
)

export const IconPlay = ({ variant = "light" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="110"
    height="110"
    viewBox="0 0 110 110"
  >
    <path
      id="play-alt"
      d="M55,110a55,55,0,1,1,55-55A55,55,0,0,1,55,110ZM41.25,27.54V82.457L82.5,55Z"
      fill={variant === "dark" ? "var(--color-black)" : "var(--color-white)"}
    />
  </svg>
)

export const RichArrowRight = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="308.551"
      height="184"
      viewBox="0 0 308.551 184"
      overflow="visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.g
        id="richArrowRight"
        data-name="richArrowRight"
        transform="translate(0 184) rotate(-90)"
      >
        <motion.rect
          initial={{ y: 0 }}
          animate={hovered ? { y: "100%" } : { y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.3 }}
          id="richArrowRight-circle"
          data-name="richArrowRight-circle"
          width="184"
          height="184"
          rx="90"
          transform="translate(184) rotate(90)"
          fill="#03df07"
          a
        />
        <g
          id="Group_69"
          data-name="Group 69"
          transform="translate(4485.512 -269.195) rotate(90)"
        >
          <g
            id="Group_33"
            data-name="Group 33"
            transform="translate(577.746 4320.808) rotate(90)"
          >
            <path
              id="anonymousPath"
              data-name="anonymousPath"
              d="M0,0"
              transform="translate(75.89 40.085)"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <line
              id="richArrowRight-straightLine"
              data-name="richArrowRight-straightLine"
              y2="216.508"
              transform="translate(71.69 0.043)"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              id="richArrowRight-bottomLine"
              data-name="richArrowRight-bottomLine"
              d="M71.674,73.876C32.09,73.876,0,40.8,0,0"
              transform="translate(71.647 0)"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              id="richArrowRight-topLine"
              data-name="richArrowRight-topLine"
              d="M71.674,0C71.674,40.8,39.585,73.876,0,73.876"
              transform="translate(0 0)"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </g>
        </g>
      </motion.g>
    </motion.svg>
  )
}

export const RichArrowDown = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.svg
      id="richArrowDownWrapper"
      data-name="richArrowDownWrapper"
      xmlns="http://www.w3.org/2000/svg"
      width="184"
      height="308.551"
      viewBox="0 0 184 308.551"
      overflow="visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.rect
        initial={{ y: 0 }}
        animate={hovered ? { y: 184 } : { y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.3 }}
        id="richArrowDownWrapper-circle"
        data-name="richArrowDownWrapper-circle"
        width="184"
        height="184"
        rx="90"
        transform="translate(184) rotate(90)"
        fill="#03df07"
      />
      <g
        id="Group_69"
        data-name="Group 69"
        transform="translate(4485.512 -269.195) rotate(90)"
      >
        <g
          id="Group_33"
          data-name="Group 33"
          transform="translate(577.746 4320.808) rotate(90)"
        >
          <path
            id="Path_4"
            data-name="Path 4"
            d="M0,0"
            transform="translate(75.89 40.085)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            id="richArrowDownWrapper-straightLine"
            data-name="richArrowDownWrapper-straightLine"
            y2="216.508"
            transform="translate(71.69 0.043)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            id="richArrowDownWrapper-leftCurve"
            data-name="richArrowDownWrapper-leftCurve"
            d="M71.674,73.876C32.09,73.876,0,40.8,0,0"
            transform="translate(71.647 0)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            id="richArrowDownWrapper-rightCurve"
            data-name="richArrowDownWrapper-rightCurve"
            d="M71.674,0C71.674,40.8,39.585,73.876,0,73.876"
            transform="translate(0 0)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </g>
      </g>
    </motion.svg>
  )
}

export const LeftArrow = () => (
  <motion.svg
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.92 }}
    transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.3 }}
    xmlns="http://www.w3.org/2000/svg"
    width="81"
    height="81"
    viewBox="0 0 81 81"
  >
    <g
      id="Component_4_5"
      data-name="Component 4 – 5"
      transform="translate(0.5 0.5)"
    >
      <rect
        id="Rectangle_49"
        data-name="Rectangle 49"
        width="80"
        height="80"
        rx="40"
        fill="none"
        stroke="#000"
        stroke-width="1"
      />
      <g
        id="Group_65"
        data-name="Group 65"
        transform="translate(60.455 49.105) rotate(180)"
      >
        <g
          id="Group_33"
          data-name="Group 33"
          transform="translate(40.958) rotate(90)"
        >
          <path
            id="Path_4"
            data-name="Path 4"
            d="M0,0"
            transform="translate(10.132 5.352)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <line
            id="Line_5"
            data-name="Line 5"
            y2="40.952"
            transform="translate(9.572 0.006)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M9.569,9.863A9.72,9.72,0,0,1,0,0"
            transform="translate(9.566)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M9.569,0A9.72,9.72,0,0,1,0,9.863"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
      </g>
    </g>
  </motion.svg>
)

export const RightArrow = () => (
  <motion.svg
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.92 }}
    transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.3 }}
    xmlns="http://www.w3.org/2000/svg"
    width="81"
    height="81"
    viewBox="0 0 81 81"
  >
    <g
      id="Component_4_6"
      data-name="Component 4 – 6"
      transform="translate(80.5 80.5) rotate(180)"
    >
      <rect
        id="Rectangle_49"
        data-name="Rectangle 49"
        width="80"
        height="80"
        rx="40"
        fill="none"
        stroke="#000"
        stroke-width="1"
      />
      <g
        id="Group_65"
        data-name="Group 65"
        transform="translate(60.455 49.105) rotate(180)"
      >
        <g
          id="Group_33"
          data-name="Group 33"
          transform="translate(40.958) rotate(90)"
        >
          <path
            id="Path_4"
            data-name="Path 4"
            d="M0,0"
            transform="translate(10.132 5.352)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <line
            id="Line_5"
            data-name="Line 5"
            y2="40.952"
            transform="translate(9.572 0.006)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M9.569,9.863A9.72,9.72,0,0,1,0,0"
            transform="translate(9.566)"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M9.569,0A9.72,9.72,0,0,1,0,9.863"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
      </g>
    </g>
  </motion.svg>
)
