import React from "react"
import styled, { css } from "styled-components"
import { StructuredText } from "react-datocms"
import { ClaimStyles } from "./Typography"

const SectionStyles = styled.section``

const CirclesWrapper = styled.div`
  margin: 4.5rem 0 4.813rem;
  display: flex;
  > div {
    flex: 1 1 50%;
  }
`

const Circle = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 14.8vw;
  min-width: 12.5rem;
  max-width: 12.5rem;
  height: 14.8vw;
  min-height: 12.5rem;
  max-height: 12.5rem;
  border-radius: 100%;
  z-index: -1;
  ${({ variant }) =>
    variant === "empty"
      ? css`
          border: 1px solid var(--color-black);
        `
      : css`
          border: 0;
          background-color: var(--color-accent);
        `}
`

const CircleWrapper = styled.div`
  position: relative;
  padding: 2.875rem 0 0 2.438rem;
  > p {
    :first-of-type {
      font-size: var(--font-18);
      line-height: var(--font-20);
      font-family: Poppins;
      text-transform: uppercase;
      margin-bottom: 1.1rem;
    }
    :not(:first-of-type) {
      display: inline;
      font-family: Diagramm;
      font-weight: bold;
      position: relative;
    }
  }
`

const EmptyCircleWrapper = styled(CircleWrapper)`
  > p {
    :not(:first-of-type) {
      font-size: var(--font-40);
      line-height: 1.05;
      text-decoration: underline;
      text-decoration-thickness: 3px;
      /* background-image: linear-gradient(var(--color-black), var(--color-black)),
        linear-gradient(var(--color-black), var(--color-black)),
        linear-gradient(var(--color-black), var(--color-black));
      background-size: 20px 2px, 0 2px, 100% 3px;
      background-position: calc(100% + 20px) 100%, 100% 100%, 0 calc(100% - 4px);
      background-repeat: no-repeat; */
    }
  }
`

const FilledCircleWrapper = styled(CircleWrapper)`
  a {
    text-decoration: none;
    color: var(--color-black);
  }
  > p {
    :not(:first-of-type) {
      font-size: var(--font-64);
      line-height: 1;
      text-decoration: underline;
      /* background-image: linear-gradient(var(--color-black), var(--color-black)),
        linear-gradient(var(--color-black), var(--color-black)),
        linear-gradient(var(--color-black), var(--color-black));
      background-size: 20px 2px, 0 2px, 100% 3px;
      background-position: calc(100% + 20px) 100%, 100% 100%, 0 calc(100% - 4px);
      background-repeat: no-repeat; */
    }
  }
`

const HeroSection = ({ emptyCircleText, filledCircleText, claimText }) => {
  return (
    <SectionStyles id="info">
      <CirclesWrapper>
        <EmptyCircleWrapper>
          <Circle variant="empty" />
          <StructuredText data={emptyCircleText} />
        </EmptyCircleWrapper>
        <FilledCircleWrapper>
          <Circle variant="accent" />
          <StructuredText data={filledCircleText} />
        </FilledCircleWrapper>
      </CirclesWrapper>
      <ClaimStyles>
        <StructuredText data={claimText} />
      </ClaimStyles>
    </SectionStyles>
  )
}

export default HeroSection
