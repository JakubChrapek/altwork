import styled, { css } from "styled-components"

export const ClaimStyles = styled.div`
  p {
    font-size: var(--font-80);
    font-family: Diagramm;
    line-height: 1.12;
    font-weight: bold;
    max-width: ${({ maxWidth }) => maxWidth};
    @media (max-width: 1283px) {
      max-width: ${({ maxWidth }) => maxWidth && "35rem"};
    }
    > em {
      font-family: Playfair Display;
      line-height: 0.9;
    }
    ${({ hero }) =>
      hero &&
      css`
        @media (max-width: 767px) {
          font-size: clamp(var(--font-20), 7.2vw, var(--font-28-pt));
        }
      `}
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
