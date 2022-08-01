import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import Layout from "../components/Layout"
import siteConfig from "../../config/site-config"
import Seo from "../components/Seo"
import styled from "styled-components"
import { RichArrowDown } from "../components/Icons"
import AddToCalendarBtn from "../components/AddToCalendarBtn"
import LinkWithDot from "../components/LinkWithDot"

const ContentWrapper = styled.div`
  padding: 5.25rem 0 5.5rem;
  @media (max-width: 967px) {
    padding: 4rem 0 6rem;
  }
  @media (max-width: 567px) {
    padding-top: 2rem;
  }

  > h1 {
    font-size: var(--font-80);
    font-family: Diagramm;
    font-weight: bold;
    @media (max-width: 567px) {
      font-size: var(--font-32);
    }
    > p {
      font-size: var(--font-80);
      @media (max-width: 567px) {
        font-size: var(--font-32);
      }
      font-family: Diagramm;
      font-weight: bold;
      line-height: 1.2;
    }
    @media (max-width: 967px) {
      margin-bottom: 6rem;
    }
    @media (max-width: 567px) {
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 567px) {
    h2 {
      font-size: var(--font-24);
    }
  }
`

const ArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -7.5%;
  padding-right: 12.5%;
  @media (max-width: 967px) {
    display: none;
  }
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
    } = data.allDatoCmsPageConference.nodes[0]

    return (
        <Layout>
            <Seo
                title={siteConfig.title}
                description={siteConfig.description}
                meta={data.allDatoCmsPageHome.nodes[0].seoMetaTags}
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
                    type="buyTicket"
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
    @media (max-width: 832px) {
      margin-top: 6rem;
    }
    @media (max-width: 567px) {
      margin-top: 2rem;
    }
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
  @media (max-width: 1291px) {
    grid-template-columns: 3fr 4fr 4fr;
    grid-gap: 2rem;
  }
  padding: 0 0.75rem 2.75rem;
  @media (max-width: 832px) {
    grid-template-columns: 1fr;
    grid-gap: 1.125rem;
    padding-bottom: 1.625rem;
    margin: 3.375rem -0.75rem 0;
  }
  @media (max-width: 567px) {
    margin: 1.125rem -0.75rem 0;
    grid-gap: 0.5rem;
    padding-bottom: 1rem;
  }
  border-bottom: 1px solid var(--color-gray);
  align-items: center;
  .title p {
    font-size: var(--font-24);
    font-weight: bold;
    line-height: 1.41;
    font-family: Diagramm;
    @media (max-width: 567px) {
      font-size: var(--font-18);
    }
  }
  .date p {
    font-family: Diagramm;
    font-size: var(--font-32);
    line-height: 1.08;
    font-weight: bold;

    @media (max-width: 832px) {
      margin-top: 0.7rem;
    }
    @media (max-width: 767px) {
      font-size: var(--font-28);
    }
  }

  + p {
    font-size: var(--font-20);
    line-height: 1.4;
    margin: 2.25rem 0 0 0.75rem;
    @media (max-width: 832px) {
      margin: 1.625rem 0 0 0;
    }
    @media (max-width: 567px) {
      font-size: var(--font-16);
      margin-top: 1.125rem;
    }
  }
  .link {
    position: relative;
  }
`

const AttendSection = ({
    type,
    title,
    attendName,
    date,
    ctaText,
    asteriskText,
}) => {
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
                    {type === "buyTicket" ? (
                        <LinkWithDot
                            href="https://sklep.liberte.pl/bilety/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {ctaText}
                        </LinkWithDot>
                    ) : (
                        <AddToCalendarBtn
                            buttonText={ctaText}
                            location={attendName.value.document.children[0].children[0].value}
                        />
                    )}
                </div>
            </Row>
            <StructuredText data={asteriskText} />
        </Wrapper>
    )
}

export const privacyQuery = graphql`
  query Udzial($id: String!, $rok: String!){
    allDatoCmsPageHome(filter: {rok: {eq: $rok}}) {
        nodes{
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
        }
    }
    allDatoCmsPageConference(filter: {id: {eq: $id}}) {
        nodes {
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
  }
`

export default HowToTakePartPage
