import gsap from "gsap"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"
import React, { useRef } from "react"

const LogoStyles = styled.svg`
    width: 21.75rem;
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "21.75rem")};
    @media (max-width: 1280px) {
    width: 16.5rem;
    }
    @media (max-width: 767px) {
    width: clamp(9rem, 47vw, 11rem);
    }
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
    path,
    rect {
    pointer-events: none;
    }
`

export const Logo = ({
    maxWidth,
    variant = "dark",
    circleFillColor,
    onClick,
    aktualnyRok
}) => {
    const ref = useRef(null)

    const HandleMouseOver = () => {
        if (ref.current) {
            gsap.to(ref.current, {
                x: -31,
                ease: "Power4.out",
                duration: 0.3,
            })
        }
    }
    const HandleMouseOut = () => {
        if (ref.current) {
            gsap.to(ref.current, {
                x: 0,
                ease: "Power4.out",
                duration: 0.3,
            })
        }
    }

    return (
        <Link
            style={{ display: "inline-block" }}
            variant={variant}
            to={"/" + aktualnyRok + '/'}
            onClick={onClick}
            onMouseOver={HandleMouseOver}
            onMouseOut={HandleMouseOut}
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
                <title id="altworkTitle">
                    Alt:work - porozmawiajmy o pracy przyszłości, 12 września 2021r.
                </title>
                <desc id="altworkDescription">
                    Alt:work to spotkanie służące wymianie myśli, doświadczeń i refleksji
                    na temat zmieniającej się na naszych oczach podstawowej formy
                    aktywności człowieka: pracy. Spotkajmy się podczas Igrzysk Wolności
                    2021, 12 września 2021r. Zapraszamy!
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
                            ref={ref}
                            x="97"
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