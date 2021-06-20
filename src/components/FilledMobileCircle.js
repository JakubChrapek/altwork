import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"

const CircleWrapper = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    margin-top: 3.75rem;
    padding: 2.875rem 0 0 2.5rem;
    position: relative;
    > p {
      color: var(--color-black);
      &:first-of-type {
        font-size: var(--font-20);
        text-transform: uppercase;
        margin-bottom: 0.4rem;
      }
      &:last-of-type {
        font-size: var(--font-40);
        display: inline;
        font-family: Diagramm;
        font-weight: bold;
        position: relative;
        a {
          color: inherit;
        }
      }
    }
  }
`

const Circle = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 12.5rem;
  height: 12.5rem;
  background-color: var(--color-accent);
  border-radius: 12.5rem;
  z-index: -1;
`

const FilledMobileCircle = ({ text }) => (
  <CircleWrapper>
    <Circle />
    <StructuredText data={text} />
  </CircleWrapper>
)

export default FilledMobileCircle
