import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--content-max-width-desktop);
  padding: 15.375rem 8.75rem 0;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`
