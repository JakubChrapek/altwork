import React, { useState } from "react"
import { motion } from "framer-motion"

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
                    fill="var(--color-accent)"
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
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        />
                        <line
                            id="richArrowRight-straightLine"
                            data-name="richArrowRight-straightLine"
                            y2="216.508"
                            transform="translate(71.69 0.043)"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        />
                        <path
                            id="richArrowRight-bottomLine"
                            data-name="richArrowRight-bottomLine"
                            d="M71.674,73.876C32.09,73.876,0,40.8,0,0"
                            transform="translate(71.647 0)"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        />
                        <path
                            id="richArrowRight-topLine"
                            data-name="richArrowRight-topLine"
                            d="M71.674,0C71.674,40.8,39.585,73.876,0,73.876"
                            transform="translate(0 0)"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit="10"
                            strokeWidth="2"
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
                fill="var(--color-accent)"
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
                        strokeMiterlimit="10"
                        strokeWidth="2"
                    />
                    <line
                        id="richArrowDownWrapper-straightLine"
                        data-name="richArrowDownWrapper-straightLine"
                        y2="216.508"
                        transform="translate(71.69 0.043)"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                    />
                    <path
                        id="richArrowDownWrapper-leftCurve"
                        data-name="richArrowDownWrapper-leftCurve"
                        d="M71.674,73.876C32.09,73.876,0,40.8,0,0"
                        transform="translate(71.647 0)"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                    />
                    <path
                        id="richArrowDownWrapper-rightCurve"
                        data-name="richArrowDownWrapper-rightCurve"
                        d="M71.674,0C71.674,40.8,39.585,73.876,0,73.876"
                        transform="translate(0 0)"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                    />
                </g>
            </g>
        </motion.svg>
    )
}