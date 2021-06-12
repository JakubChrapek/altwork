import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { ClaimStyles } from "./Typography"
import { RichArrowRight } from "./Icons"

const WhyWorthItSectionStyles = styled.section`
  margin-top: 8.125rem;
`

const ContentWrapper = styled.div`
  margin-top: 7.063rem;
  display: flex;
  > div {
    flex: 1 1 50%;
  }
`
const IconColumn = styled.div``
const AnswersWrapper = styled.div`
  > ul {
    list-style: none;
    padding: 0;
    > li {
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--color-gray);
      :not(:first-of-type) {
        margin-top: 2rem;
      }
    }
  }
  p {
    font-size: var(--font-20);
    color: var(--color-black);
    font-weight: bold;
    line-height: 1.4;
  }
`

const WhyWorthItSection = ({ whyWorthItTitle, whyWorthItAnswers }) => {
  return (
    <WhyWorthItSectionStyles>
      <ClaimStyles maxWidth="40rem">
        <StructuredText data={whyWorthItTitle} />
      </ClaimStyles>
      <ContentWrapper>
        <IconColumn>
          <RichArrowRight />
        </IconColumn>
        <AnswersWrapper>
          <ul>
            {whyWorthItAnswers.map(answer => (
              <li>
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
