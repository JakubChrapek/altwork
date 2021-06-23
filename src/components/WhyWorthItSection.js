import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { ClaimStyles } from "./Typography"
import { RichArrowRight } from "./Icons"

const WhyWorthItSectionStyles = styled.section`
  margin-top: 8.125rem;
  @media (max-width: 1024px) {
    margin-top: 30vw;
  }
`

const ContentWrapper = styled.div`
  margin-top: 7.063rem;
  display: flex;
  > div {
    flex: 1 1 50%;
  }
  @media (max-width: 1024px) {
    margin-top: 4rem;
  }
  @media (max-width: 767px) {
    margin-top: 2.75rem;
  }
`
const IconColumn = styled.div`
  svg {
    width: 70%;
    max-width: 19.284rem;
  }
  @media (max-width: 767px) {
    display: none;
  }
`
const AnswersWrapper = styled.div`
  @media (max-width: 1283px) {
    && {
      flex: 1 1 65%;
    }
  }
  > ul {
    list-style: none;
    padding: 0;
    > li {
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--color-gray);
      :not(:first-of-type) {
        margin-top: 2rem;
      }
      @media (max-width: 767px) {
        &:nth-last-of-type(2) {
          border: 0;
        }
      }
    }
  }
  p {
    font-size: var(--font-20);
    color: var(--color-black);
    font-weight: bold;
    line-height: 1.4;
    @media (max-width: 767px) {
      font-size: var(--font-18);
      line-height: 1.33;
    }
  }
`

const WhyWorthItSection = ({ whyWorthItTitle, whyWorthItAnswers }) => {
  return (
    <WhyWorthItSectionStyles>
      <ClaimStyles maxWidth="37rem">
        <StructuredText data={whyWorthItTitle} />
      </ClaimStyles>
      <ContentWrapper>
        <IconColumn>
          <RichArrowRight />
        </IconColumn>
        <AnswersWrapper>
          <ul>
            {whyWorthItAnswers.map((answer, i) => (
              <li key={`answer-${i}`}>
                <StructuredText data={answer.paragraphText} />
              </li>
            ))}
          </ul>
        </AnswersWrapper>
      </ContentWrapper>
    </WhyWorthItSectionStyles>
  )
}

export default WhyWorthItSection
