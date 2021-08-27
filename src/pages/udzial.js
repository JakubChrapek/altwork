import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import Layout from "../components/Layout"
import siteConfig from "../../config/site-config"
import Seo from "../components/Seo"
import styled from "styled-components"
import LinkWithDot from "../components/LinkWithDot"

const ContentWrapper = styled.div`
  padding: 5.25rem 0 5.5rem;
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
`

const HowToTakePartPage = ({ data }) => {
  const {
    heroTitle,
    onlineTitle,
    onlineDateTime,
    onlineAttendName,
    onlineTekstLinku,
    onlineTextWithAnAsterisk,
    personalTitle,
    personalDateTime,
    personalAttendName,
    personalTekstLinku,
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
        {/* <StructuredText data={data.datoCmsPagePrivacyPolicy.privacyText} /> */}
        <AttendSection
          title={onlineTitle}
          attendName={onlineAttendName}
          date={onlineDateTime}
          ctaText={onlineTekstLinku}
          asteriskText={onlineTextWithAnAsterisk}
        />
        <AttendSection
          title={personalTitle}
          attendName={personalAttendName}
          date={personalDateTime}
          ctaText={personalTekstLinku}
          asteriskText={personalTextWithAnAsterisk}
        />
      </ContentWrapper>
    </Layout>
  )
}

const Wrapper = styled.section``
const AttendHeader = styled.h2`
  font-size: var(--font-50);
  color: var(--color-black);
`

const Row = styled.div``

const AttendSection = ({ title, attendName, date, ctaText, asteriskText }) => (
  <Wrapper>
    <AttendHeader>
      <StructuredText data={title} />
    </AttendHeader>
    <Row>
      <div>
        <StructuredText data={attendName} />
      </div>
      <div>
        <StructuredText data={date} />
      </div>
      <div>
        <LinkWithDot href="https://google.com">
          <StructuredText data={ctaText} />
        </LinkWithDot>
      </div>
    </Row>
    <StructuredText data={asteriskText} />
  </Wrapper>
)

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
      onlineTekstLinku {
        value
      }
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
      personalTekstLinku {
        value
      }
      personalTextWithAnAsterisk {
        value
      }
    }
  }
`

export default HowToTakePartPage
