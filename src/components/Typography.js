import React from "react"
import styled from "styled-components"

export const ClaimStyles = styled.div`
  p {
    font-size: var(--font-80);
    font-family: Diagramm;
    line-height: 1.12;
    font-weight: bold;
    max-width: ${({ maxWidth }) => maxWidth};
    > em {
      font-family: Playfair Display;
      line-height: 0.9;
    }
  }
`

export const SectionTitle = styled.h2`
  font-size: var(--font-80);
  font-family: Diagramm;
  line-height: 1.12;
  font-weight: bold;
  max-width: ${({ maxWidth }) => maxWidth};
  > em {
    font-family: Playfair Display;
    line-height: 0.9;
  }
`
