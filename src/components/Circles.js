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
    > div {
      flex: 1 1 100%;
    }
  }
  .cta {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .cta p {
    a {
      color: currentColor;
      font-size: var(--font-20);
      font-weight: bold;
      line-height: 1.7;
    }
    + * {
      margin-top: 1.2rem;
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
  border-radius: 100%;
  z-index: -1;
  ${({ variant }) =>
    variant === "empty"
      ? css`
          border: 1px solid var(--color-black);
          @media (max-width: 767px) {
            left: -2.5rem;
          }
        `
      : css`
          border: 0;
          background-color: var(--color-accent);
        `}
  @media (max-width: 767px) {
    width: 17.5rem;
    height: 17.5rem;
  }
`

const CircleWrapper = styled.div`
  position: relative;
  padding: 2.875rem 0 0 2.438rem;
  @media (max-width: 767px) {
    padding: 3.75rem 0 0 2.25rem;
  }
  > p {
    :first-of-type {
      font-size: var(--font-18);
      @media (max-width: 767px) {
        font-size: var(--font-20);
      }
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
    <CirclesWrapper hero={hero}>
      {variant === "plainText" ? (
        <div className="cta">
          <StructuredText data={plainText} />
        </div>
      ) : (
        <EmptyCircleWrapper>
          <Circle variant="empty" />
          <StructuredText data={emptyCircleText} />
        </EmptyCircleWrapper>
      )}
      <FilledCircleWrapper hide={hero}>
        <Circle variant="accent" />
        <StructuredText data={filledCircleText} />
      </FilledCircleWrapper>
    </CirclesWrapper>
  )
}

export default Circles
