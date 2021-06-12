import React from "react"
import styled, { css } from "styled-components"
import { StructuredText } from "react-datocms"
import { ClaimStyles } from "./typography"
import Circles from "./circles"

const SectionStyles = styled.section``

const HeroSection = ({ emptyCircleText, filledCircleText, claimText }) => {
  return (
    <SectionStyles id="info">
      <Circles
        emptyCircleText={emptyCircleText}
        filledCircleText={filledCircleText}
        variant="circles"
      />
      <ClaimStyles>
        <StructuredText data={claimText} />
      </ClaimStyles>
    </SectionStyles>
  )
}

export default HeroSection
