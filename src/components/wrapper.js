import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--content-max-width-desktop);
  padding: 0 8.75rem 0;

  @media (max-width: 1366px) {
    padding: 0 5.75rem 0;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`
