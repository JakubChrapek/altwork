import React from "react"
import { StructuredText } from "react-datocms"
import styled, { css } from "styled-components"

const CirclesWrapper = styled.div`
  margin: 4.5rem 0 4.813rem;
  display: flex;
  > div {
    flex: 1 1 50%;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    margin: ${({ cta }) => cta && "2rem 0 7rem"};
    > div {
      flex: 1 1 100%;
    }
  }
  .cta {
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }
  .cta p {
    a {
      color: currentColor;
      font-size: var(--font-20);
      @media (max-width: 767px) {
        font-size: var(--font-18);
      }
      font-weight: bold;
      line-height: 1.7;
    }
    + * {
      margin-top: 1.2rem;

    @media (max-width: 767px) {
      margin-top: 0;
      margin-bottom: ${({ cta }) => cta && "1.2rem"};
    }
  }
  ${({ hero }) =>
    hero &&
    css`
      @media (max-width: 767px) {
        margin: 2rem -2.25rem 7rem;
      }
    `}
`

const Circle = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 12.5rem;
  height: 12.5rem;
  transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1);
  @media (max-width: 767px) {
    width: ${({ cta }) => (cta ? "12.5rem" : "17.5rem")};
    height: ${({ cta }) => (cta ? "12.5rem" : "17.5rem")};
  }
  border-radius: 100%;
  z-index: -1;
  ${({ variant }) =>
    variant === "empty"
      ? css`
          border: 1px solid var(--color-black);
          @media (max-width: 767px) {
            left: -4.75rem;
          }
        `
      : css`
          border: 0;
          background-color: var(--color-accent);
        `}
`

const CircleWrapper = styled.div`
  position: relative;
  padding: 2.875rem 0 0 2.438rem;
  @media (max-width: 767px) {
    margin-top: ${({ cta }) => cta && "5rem"};
    padding: ${({ cta }) => (cta ? "2.875rem 0 0 2.438rem" : "3.75rem 0 0 0")};
  }
  > p {
    &:hover + span {
      transform: scale(1.3);
    }
    :first-of-type {
      font-size: var(--font-18);
      line-height: var(--font-20);
      font-family: Poppins;
      text-transform: uppercase;
      margin-bottom: 1.1rem;
    }
    :not(:first-of-type) {
      display: inline;
      font-family: Diagramm;
      font-weight: bold;
      position: relative;
    }
  }
`

const EmptyCircleWrapper = styled(CircleWrapper)`
  > p {
    :not(:first-of-type) {
      font-size: var(--font-40);
      line-height: 1.05;
      text-decoration: underline;
      text-decoration-thickness: 3px;
    }
  }
  @media (max-width: 1024px) {
    > p {
      :not(:first-of-type) {
        font-size: var(--font-24-pt);
      }
    }
  }
  @media (max-width: 767px) {
    > p {
      :not(:first-of-type) {
        font-size: var(--font-40);
      }
    }
  }
`

const FilledCircleWrapper = styled(CircleWrapper)`
  a {
    text-decoration: none;
    color: var(--color-black);
  }
  > p {
    :not(:first-of-type) {
      font-size: var(--font-64);
      line-height: 1;
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    > p {
      :not(:first-of-type) {
        font-size: var(--font-32-pt);
      }
    }
  }
  @media (max-width: 767px) {
    display: ${({ hide }) => hide && "none"};
  }
`

const Circles = ({
  emptyCircleText,
  hero,
  plainText,
  filledCircleText,
  variant,
}) => {
  return (
    <CirclesWrapper cta={variant === "plainText"} hero={hero}>
      {variant === "plainText" ? (
        <div className="cta">
          <StructuredText data={plainText} />
        </div>
      ) : (
        <EmptyCircleWrapper>
          <StructuredText data={emptyCircleText} />
          <Circle variant="empty" />
        </EmptyCircleWrapper>
      )}
      <FilledCircleWrapper cta={variant === "plainText"} hide={hero}>
        <StructuredText data={filledCircleText} />
        <Circle cta={variant === "plainText"} variant="accent" />
      </FilledCircleWrapper>
    </CirclesWrapper>
  )
}

export default Circles
