import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { ClaimStyles } from "./Typography"

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
    @media (max-width: 1047px) {
      margin-right: 1.7rem;
      &:last-of-type {
        margin: 0 0 0 1.7rem;
      }
    }
  }

  li {
    --list-indent: 4rem;
    position: relative;
    font-size: var(--font-20);
    line-height: 1.4;
    max-width: 23.75rem;
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
  @media (max-width: 1024px) {
    flex-direction: column;
    > ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1 1 100%;
      margin-right: 0;
      &:last-of-type {
        margin: 3rem 0 0;
        flex: 1 1 100%;
      }

      > li {
        --list-indent: 5rem;
        font-size: var(--font-28);
        max-width: 100%;
        padding: 0 0 1rem 0;
        :not(:first-of-type) {
          margin-top: 3rem;
        }
      }
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
