import React from "react"
import styled from "styled-components"
import { StructuredText } from "react-datocms"
import { ClaimStyles } from "./Typography"
import Circles from "./Circles"
import FilledMobileCircle from "./FilledMobileCircle"

const SectionStyles = styled.section``

const HeroSection = ({ isActual, emptyCircleText, filledCircleText, claimText }) => {
  return (
    <SectionStyles id="info">
      <Circles
      isActual={isActual}
        emptyCircleText={emptyCircleText}
        filledCircleText={filledCircleText}
        variant="circles"
        hero
      />
      <ClaimStyles hero>
        <StructuredText data={claimText} />
      </ClaimStyles>
      <FilledMobileCircle text={filledCircleText} />
    </SectionStyles>
  )
}

export default HeroSection
