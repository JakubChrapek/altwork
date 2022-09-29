import { graphql } from "gatsby"
import { TextPageStyles } from "../components/TextPageStyles"
import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Circles from "../components/Circles"
import { StructuredText } from "react-datocms"
import siteConfig from "../../config/site-config"
import Seo from "../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"

const PartnerBio = styled.section`
  display: flex;
  margin-bottom: 6rem;
  > * {
    flex: 1 1 50%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 8rem;
  }
`

const PartnerLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 6.25rem 0rem 5.688rem;
  @media (max-width: 1280px) {
    justify-content: flex-start;
    padding-left: 0;
  }
  @media (max-width: 1200px) {
    flex: 1 1 40%;
    padding-right: 5rem;
  }
  > a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-light-gray);
    width: 22rem;
    height: 22rem;
    border-radius: 22rem;
    padding: 4rem;
    transition: background-color 0.25s var(--cubic);
    &:hover {
      background-color: var(--color-accent);
    }
    @media (max-width: 1200px) {
      width: 18rem;
      height: 18rem;
      border-radius: 18rem;
      padding: 3rem;
    }
    @media (max-width: 1024px) {
      width: 55vw;
      height: 55vw;
      max-width: 13rem;
      max-height: 13rem;
      padding: 2rem;
    }
  }
  svg,
  path {
    fill: var(--color-black);
  }
  @media (max-width: 1024px) {
    justify-content: flex-start;
    padding: 0;
  }
`

const PartnerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.8rem;
  @media (max-width: 1200px) {
    flex: 1 1 60%;
  }
  @media (max-width: 1024px) {
    margin-top: 2.125rem;
  }
`

const PartnerPage = ({ data }) => {
  return (
    <Layout kolorRoku={data.datoCmsPageHome.kolorRoku.hex}>
      <Seo
        title={`${data.datoCmsLogo?.partnerName} - alt:work - porozmawiajmy o pracy przyszłości.`}
        description={siteConfig.description}
        meta={data.datoCmsPageHome.seoMetaTags}
      />
      <TextPageStyles>
        <h1>
          Nasi
          <br />
          partnerzy
        </h1>
        <PartnerBio>
          <PartnerLogoWrapper >
            {data.datoCmsLogo.logoGraphic?.gatsbyImageData != null ? (
              <a
                href={data.datoCmsLogo?.partnerWebsiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage
                  image={data.datoCmsLogo.logoGraphic.gatsbyImageData}
                  alt={`Logo ${data.datoCmsLogo.partnerName}`}
                />
              </a>
            ) : (
              <a
                aria-label='logo'
                href={data.datoCmsLogo?.partnerWebsiteLink}
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsLogo.grafikaSvg,
                }}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
          </PartnerLogoWrapper>
          <PartnerInfoWrapper>
            <h2>{data.datoCmsLogo.partnerName}</h2>
            <StructuredText
              data={data.datoCmsLogo.partnerRichInformation.value}
            />
          </PartnerInfoWrapper>
        </PartnerBio>
        <Circles
          plainText={data.datoCmsPageHome.additionalInfoCtaText}
          filledCircleText={data.datoCmsPageHome.filledCircleContent}
          variant="plainText"
        />
      </TextPageStyles>
    </Layout>
  )
}

export default PartnerPage

export const query = graphql`
  query ($partnerPageSlug: String) {
    datoCmsLogo(partnerPageSlug: { eq: $partnerPageSlug }) {
      partnerPageSlug
      partnerName
      partnerWebsiteLink
      grafikaSvg
      logoGraphic {
        gatsbyImageData
      }
      partnerRichInformation {
        value
      }
    }
    datoCmsPageHome (isActual: {eq: true}){
      kolorRoku {
        hex
      }
      rok
      filledCircleContent {
        value
      }
      additionalInfoCtaText {
        value
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
