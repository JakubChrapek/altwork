import styled from "styled-components"

export const TextPageStyles = styled.section`
  padding: 5.25rem 0 2rem;
  @media (max-width: 767px) {
    padding: 4rem 0 1rem;
  }
  > h1 {
    font-size: var(--font-80);
    font-family: Diagramm;
    font-weight: bold;
    margin: 0 0 5rem;
    > p {
      font-size: var(--font-80);
      font-family: Diagramm;
      font-weight: bold;
      margin: 0 0 5rem;
      line-height: 1.2;
    }
    @media (max-width: 767px) {
      margin: 0 0 3.75rem;
      > p {
        margin: 0 0 3.75rem;
      }
    }
  }
  h2 {
    text-align: left;
    font-size: var(--font-50);
    font-weight: bold;
    margin: 0 0 2.5rem;
    @media (max-width: 767px) {
      font-size: var(--font-32);
      margin: 0 0 1.5rem;
    }
  }
  p {
    font-size: var(--font-20);
    line-height: 1.4;
    + p,
    + ul {
      margin-top: 1em;
    }
    + h2 {
      margin-top: 5rem;
      @media (max-width: 767px) {
        margin-top: 3rem;
      }
    }
    @media (max-width: 767px) {
      font-size: var(--font-18);
      line-height: 1.33;
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
