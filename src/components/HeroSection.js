import React from "react"
import styled, { css } from "styled-components"
import { StructuredText } from "react-datocms"

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
  max-width: 12.5rem;
  height: 14.8vw;
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
    }
  }
`

const EmptyCircleWrapper = styled(CircleWrapper)`
  > p {
    :not(:first-of-type) {
      margin-top: 0.688rem;
      font-family: "Diagramm";
    }
  }
`

const FilledCircleWrapper = styled(CircleWrapper)``

const ClaimStyles = styled.div``

const HeroSection = ({ emptyCircleText, filledCircleText, claimText }) => {
  return (
    <SectionStyles>
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
