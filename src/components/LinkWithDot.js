import styled from "styled-components"

const LinkWithDot = styled.a`
  position: relative;
  font-family: Poppins;
  font-size: var(--font-20);
  display: inline-block;
  font-weight: 700;
  line-height: 1.2;
  padding: 0.8rem 0 0.4rem 2.688rem;
  text-decoration: none;
  color: currentColor;
  &:hover:after {
    transform: translate(2.5rem, calc(-50% + 0.2rem)) scale(1.4);
  }
  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(calc(-50% + 0.2rem));
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 1.75rem;
    background-color: var(--color-accent);
    transition: transform 0.25s var(--cubic);
    z-index: -1;
  }
  p {
    display: inline-block;
    line-height: 1.2;
  }
`

export default LinkWithDot
