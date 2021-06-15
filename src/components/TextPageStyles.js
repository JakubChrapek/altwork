import styled from "styled-components"

export const TextPageStyles = styled.section`
  padding: 5.25rem 0;
  > h1 {
    > p {
      font-size: var(--font-80);
      font-family: Diagramm;
      font-weight: bold;
      margin: 0 0 5rem;
    }
  }
  h2 {
    text-align: left;
    font-size: var(--font-50);
    font-weight: bold;
    margin: 0 0 2.5rem;
  }
  p {
    font-size: var(--font-20);
    line-height: 1.4;
    + p {
      margin-top: 1em;
    }
    + h2 {
      margin-top: 5rem;
    }
  }
  li {
    list-style-position: inside;
    > p {
      display: inline;
    }
    &::marker {
      font-weight: bold;
      font-size: var(--font-20);
    }
    + li {
      margin-top: 1em;
    }
  }
  ol + h2 {
    margin-top: 5rem;
  }
  a {
    color: var(--color-black);
  }
`
