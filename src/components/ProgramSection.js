import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { SectionTitle } from "./typography"
import { RichArrowDown } from "./icons"
import Circles from "./Circles"

const ProgramSectionStyles = styled.section`
  margin-top: 11rem;
  @media (max-width: 767px) {
    margin-top: 5rem;
  }
`

const ContentWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  > div {
    flex: 1 1 50%;
  }
`
const IconColumn = styled.div`
  padding-left: 4.75rem;
  @media (max-width: 1024px) {
    padding-left: 0;
    svg {
      width: 42%;
      height: auto;
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`
const DescriptionWrapper = styled.div`
  @media (max-width: 1200px) {
    && {
      flex: 1 1 65%;
    }
  }
  p {
    font-size: var(--font-20);
    color: var(--color-black);
    line-height: 1.4;
    @media (max-width: 767px) {
      line-height: 1.33;
      font-size: var(--font-18);
    }
    + * {
      margin-top: 1.8rem;
    }
  }
`

const SessionsWrapper = styled.ul`
  margin-top: 5.625rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    margin-top: 4rem;
  }
  > li {
    display: flex;
    padding: 2rem 0.75rem;
    border-bottom: 1px solid var(--color-gray);
    > p {
      flex: 1 1 33%;
      :nth-of-type(1) {
        flex-basis: 15%;
        font-size: var(--font-24);
        font-weight: bold;
        line-height: 1.4;
        font-family: Diagramm;
      }
      :nth-of-type(2) {
        margin-right: 6.75rem;
        font-family: Diagramm;
        font-size: var(--font-32);
        line-height: 1.08;
        font-weight: bold;
      }
      :nth-of-type(3) {
        font-size: var(--font-20);
        line-height: 1.4;
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 3rem 0 1.5rem;
      :nth-of-type(1) {
        padding-top: 0;
      }
      > p {
        :nth-of-type(2) {
          margin: 1rem 0 0;
        }
        :nth-of-type(3) {
          margin-top: 1rem;
        }
      }
    }
    @media (max-width: 767px) {
      flex-direction: column;
      padding: 2rem 0 1.5rem;
      > p {
        :nth-of-type(2) {
          margin: 1.5rem 0 0;
          font-size: var(--font-28);
        }
        :nth-of-type(3) {
          margin-top: 1.925rem;
          font-size: var(--font-18);
        }
      }
    }
  }
`

const AdditionalInfoWrapper = styled.div`
  margin: 6.063rem 0 7.625rem;
  @media (max-width: 767px) {
    margin: 5rem 0;
  }
`

const CtaWrapper = styled.div`
  display: flex;
  > * {
    flex: 1 1 50%;
  }
  > p {
    margin-right: 6.75rem;
    font-size: var(--font-20);
    line-height: 1.4;
    color: var(--color-black);
    @media (max-width: 1024px) {
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    > p {
      margin: 0;
      font-size: var(--font-18);
      + p {
        margin-top: 1.5rem;
      }
    }
  }
`

const ProgramSection = ({
  programTitle,
  programDescription,
  meetingSessions,
  filledCircleText,
  additionalFirstColText,
  additionalSecondColText,
  additionalInfoCtaText,
}) => {
  return (
    <ProgramSectionStyles id="program">
      <SectionTitle>{programTitle}</SectionTitle>
      <ContentWrapper>
        <IconColumn>
          <RichArrowDown />
        </IconColumn>
        <DescriptionWrapper>
          <StructuredText data={programDescription} />
        </DescriptionWrapper>
      </ContentWrapper>
      <SessionsWrapper>
        {meetingSessions.map((session, iterator) => (
          <li>
            <p>Sesja {iterator + 1}</p>
            <StructuredText data={session.sessionTitle} />
            <StructuredText
              className="question"
              data={session.sessionQuestion}
            />
          </li>
        ))}
      </SessionsWrapper>
      <AdditionalInfoWrapper id="kontakt">
        <CtaWrapper>
          <StructuredText data={additionalFirstColText} />
          <StructuredText data={additionalSecondColText} />
        </CtaWrapper>
        <Circles
          plainText={additionalInfoCtaText}
          filledCircleText={filledCircleText}
          variant="plainText"
        />
      </AdditionalInfoWrapper>
    </ProgramSectionStyles>
  )
}

export default ProgramSection
