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
  margin-bottom: 6rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 8rem;
  }
  > .gatsby-image-wrapper {
    float: left;
    margin: 0 4rem 0.75rem 0;
    @media (max-width: 576px) {
      float: unset;
      margin-right: 0;
    }
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
    @media (max-width: 520px) {
      width: 75vw;
      height: 75vw;
      max-width: 460px;
      max-height: 460px;
      padding: 0;
    }
  }
`

const PartnerInfoWrapper = styled.div`
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
    <Layout>
      <Seo
        title={`Alt:work - porozmawiajmy o pracy przyszłości. Prelegent ${data.datoCmsPrelegent?.lecturerNameAndSurname}`}
        description={siteConfig.description}
        meta={data.datoCmsPageHome.seoMetaTags}
      />
      <TextPageStyles>
        <PartnerBio>
          <GatsbyImage
            image={data.datoCmsPrelegent.lecturerPhoto.gatsbyImageData}
            alt={`Portret ${data.datoCmsPrelegent.lecturerNameAndSurname}`}
          />
          <PartnerInfoWrapper>
            <h2>{data.datoCmsPrelegent.lecturerNameAndSurname}</h2>
            <StructuredText
              data={data.datoCmsPrelegent.lecturerLongBiography.value}
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
  query ($lecturerSlug: String) {
    datoCmsPrelegent(lecturerSlug: { eq: $lecturerSlug }) {
      lecturerSlug
      lecturerPhoto {
        gatsbyImageData
        alt
      }
      lecturerHeader {
        value
      }
      lecturerNameAndSurname
      lecturerLongBiography {
        value
      }
    }
    datoCmsPageHome {
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
