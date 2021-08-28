import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import Layout from "../components/Layout"
import siteConfig from "../../config/site-config"
import Seo from "../components/Seo"
import styled from "styled-components"
import { RichArrowDown } from "../components/Icons"
import AddToCalendarBtn from "../components/AddToCalendarBtn"

const ContentWrapper = styled.div`
  padding: 5.25rem 0 5.5rem;
  @media (max-width: 767px) {
    padding: 4rem 0 1rem;
  }
  > h1 {
    font-size: var(--font-80);
    font-family: Diagramm;
    font-weight: bold;
    > p {
      font-size: var(--font-80);
      font-family: Diagramm;
      font-weight: bold;
      line-height: 1.2;
    }
  }
`

const ArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -7.5%;
  padding-right: 12.5%;
`

const HowToTakePartPage = ({ data }) => {
  const {
    heroTitle,
    onlineTitle,
    onlineDateTime,
    onlineAttendName,
    onlineCtaText,
    onlineTextWithAnAsterisk,
    personalTitle,
    personalDateTime,
    personalAttendName,
    personalCtaText,
    personalTextWithAnAsterisk,
  } = data.datoCmsPageConference

  return (
    <Layout>
      <Seo
        title={siteConfig.title}
        description={siteConfig.description}
        meta={data.datoCmsPageHome.seoMetaTags}
      />
      <ContentWrapper>
        <h1>
          <StructuredText data={heroTitle} />
        </h1>
        <ArrowWrapper>
          <RichArrowDown />
        </ArrowWrapper>
        <AttendSection
          title={onlineTitle}
          attendName={onlineAttendName}
          date={onlineDateTime}
          ctaText={onlineCtaText}
          asteriskText={onlineTextWithAnAsterisk}
        />
        <AttendSection
          title={personalTitle}
          attendName={personalAttendName}
          date={personalDateTime}
          ctaText={personalCtaText}
          asteriskText={personalTextWithAnAsterisk}
        />
      </ContentWrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  + section {
    margin-top: 7.375rem;
  }
`
const AttendHeader = styled.h2`
  font-size: var(--font-50);
  line-height: 1.2;
  color: var(--color-black);
`

const Row = styled.div`
  margin-top: 5.375rem;
  display: grid;
  grid-template-columns: 2fr 4fr 6fr;
  grid-gap: 2.25rem;
  padding: 0 0.75rem 2.75rem;
  border-bottom: 1px solid var(--color-gray);
  align-items: center;
  .title p {
    font-size: var(--font-24);
    font-weight: bold;
    line-height: 1.41;
    font-family: Diagramm;
  }
  .date p {
    font-family: Diagramm;
    font-size: var(--font-32);
    line-height: 1.08;
    font-weight: bold;

    @media (max-width: 1024px) {
      margin-top: 1rem;
    }
    @media (max-width: 767px) {
      margin: 1.5rem 0 0;
      font-size: var(--font-28);
    }
  }

  + p {
    font-size: var(--font-20);
    line-height: 1.4;
    margin: 2.25rem 0 0 0.75rem;
  }
  .link {
    position: relative;
  }
`

const AttendSection = ({ title, attendName, date, ctaText, asteriskText }) => {
  return (
    <Wrapper>
      <AttendHeader>
        <StructuredText data={title} />
      </AttendHeader>
      <Row>
        <div className="title">
          <StructuredText data={attendName} />
        </div>
        <div className="date">
          <StructuredText data={date} />
        </div>
        <div className="link">
          <AddToCalendarBtn buttonText={ctaText} />
          {/* <LinkWithDot as="span"> */}
          {/* <AddToCalendarLink btnText={ctaText} /> */}
          {/* <AddToCalendar event={event} /> */}
          {/* </LinkWithDot> */}
        </div>
      </Row>
      <StructuredText data={asteriskText} />
    </Wrapper>
  )
}

export const privacyQuery = graphql`
  {
    datoCmsPageHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    datoCmsPageConference {
      heroTitle {
        value
      }
      onlineTitle {
        value
      }
      onlineDateTime {
        value
      }
      onlineAttendName {
        value
      }
      onlineCtaText
      onlineTextWithAnAsterisk {
        value
      }
      personalTitle {
        value
      }
      personalDateTime {
        value
      }
      personalAttendName {
        value
      }
      personalCtaText
      personalTextWithAnAsterisk {
        value
      }
    }
  }
`

export default HowToTakePartPage
