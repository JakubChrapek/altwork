import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { ClaimStyles } from "./typography"

const AboutSectionStyles = styled.section`
  margin-top: 7.125rem;
`

const QuestionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5.2rem;

  > ul {
    flex: 1 1 44.5%;
    list-style: none;
    margin-right: 2.406rem;
    &:last-of-type {
      margin: 0 0 0 2.406rem;
      flex: 1 1 55.5%;
    }
  }
  li {
    --list-indent: 4rem;
    position: relative;
    font-size: var(--font-20);
    line-height: 1.4;
    max-width: 380px;
    padding: 0 0 1rem 0;
    margin-left: var(--list-indent);
    border-bottom: 1px solid var(--color-gray);
    :not(:first-of-type) {
      margin-top: 2rem;
    }
    &:before {
      content: "";
      position: absolute;
      left: calc(-1 * var(--list-indent));
      top: 0;
      background-color: var(--color-black);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }
`

const AboutSection = ({ aboutWhatTitle, shortQuestions, longerQuestions }) => {
  return (
    <AboutSectionStyles>
      <ClaimStyles maxWidth="48rem">
        <StructuredText data={aboutWhatTitle} />
      </ClaimStyles>
      <QuestionsWrapper>
        <ul>
          {shortQuestions.map(question => (
            <li>
              <StructuredText data={question.questionText} />
            </li>
          ))}
        </ul>
        <ul>
          {longerQuestions.map(question => (
            <li>
              <StructuredText data={question.questionText} />
            </li>
          ))}
        </ul>
      </QuestionsWrapper>
    </AboutSectionStyles>
  )
}

export default AboutSection
