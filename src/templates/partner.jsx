import { graphql, Link } from "gatsby"
import { TextPageStyles } from "../components/TextPageStyles"
import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Circles from "../components/Circles"
import { StructuredText } from "react-datocms"
import siteConfig from "../../config/site-config"
import Seo from "../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"

const LecturerTextStyles = styled(TextPageStyles)`
  padding: 4rem 0 2rem;
  @media (max-width: 767px) {
    padding: 2.5rem 0 1rem;
  }
  h2 {
    margin: 0 0 1.5rem;
  }
`

const PartnerBio = styled.section`
  margin-bottom: 2rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 8rem;
  }
`

const PartnerInfoWrapper = styled.div`
  padding-bottom: 0.8rem;
  display: flex;
  @media (max-width: 962px) {
    flex-direction: column;
  }
  > .gatsby-image-wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 20vw;
    max-width: 19.75rem;
    max-height: 19.75rem;
    min-width: 18rem;
    min-height: 18rem;
    border-radius: 20vw;

    img {
      width: 20vw;
      height: 20vw;
      max-width: 19.75rem;
      max-height: 19.75rem;
      min-width: 18rem;
      min-height: 18rem;
      border-radius: 20vw;
    }

    @media (max-width: 1200px) {
      max-width: 18rem;
      max-height: 18rem;
      border-radius: 18rem;
      img {
        max-width: 18rem;
        max-height: 18rem;
        border-radius: 18rem;
      }
    }
    @media (max-width: 1024px) {
      width: 55vw;
      height: 55vw;
      max-width: 13rem;
      max-height: 13rem;
      img {
        max-width: 13rem;
        max-height: 13rem;
        border-radius: 13rem;
      }
    }
    @media (max-width: 380px) {
      max-width: 100%;
      max-height: 100%;
      min-width: 220px;
      min-height: 220px;
      width: 100%;
      padding-bottom: 100%;
      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 220px;
        min-height: 220px;
        width: 100%;
        height: 100%;
      }
    }
  }
`

const BackToLecturers = styled(Link)`
  margin-top: 2rem;
  color: currentColor;
  font-size: var(--font-20);
  @media (max-width: 767px) {
    font-size: var(--font-18);
  }
  font-weight: bold;
  line-height: 1.7;
`

const ContentWrapper = styled.div`
  flex: 1 1 70%;
  margin: 0.5rem 0 0 4rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 962px) {
    margin: 2.5rem 0 0;
    flex: 1 1 100%;
  }
`

const PartnerPage = ({ data: { allDatoCmsPrelegent, allDatoCmsPageHome }, pageContext }) => {
  const prelegent = allDatoCmsPrelegent.nodes[0]
  const home = allDatoCmsPageHome.nodes.filter(el => el.rok === pageContext.rok)[0]

  const aktualnyRok = allDatoCmsPageHome.nodes.filter(el => el.isActual)[0].rok
  let currentPageYear = aktualnyRok
  if (typeof window !== 'undefined') {
    let result = window.location.pathname.match(/[0-9]+/)
    if (result) {
      currentPageYear = '/' + result[0]
    }

    if (currentPageYear === aktualnyRok) {
      currentPageYear = '/'
    }
  }

  return (
    <Layout kolorRoku={home.kolorRoku.hex}>
      <Seo
        title={`Alt:work - porozmawiajmy o pracy przyszłości. Prelegent ${prelegent.lecturerNameAndSurname}`}
        description={siteConfig.description}
        meta={home.seoMetaTags}
      />
      <LecturerTextStyles>
        <PartnerBio>
          <PartnerInfoWrapper>
            <GatsbyImage
              image={prelegent.lecturerPhoto.gatsbyImageData}
              alt={`Portret ${prelegent.lecturerNameAndSurname}`}
            />
            <ContentWrapper>
              <h2>{prelegent.lecturerNameAndSurname}</h2>
              <StructuredText
                data={prelegent.lecturerLongBiography.value}
              />
              <BackToLecturers to={currentPageYear + '#prelegenci'}>
                {home.lecturersBackButtonText || "Powrót"}
              </BackToLecturers>
            </ContentWrapper>
          </PartnerInfoWrapper>
        </PartnerBio>
        <Circles
          plainText={home.additionalInfoCtaText}
          filledCircleText={home.filledCircleContent}
          variant="plainText"
        />
      </LecturerTextStyles>
    </Layout>
  )
}

export default PartnerPage

export const query = graphql`
  query ($id: String!) {
    allDatoCmsPrelegent(filter: {id: { eq: $id }}) {
      nodes{
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
    }
    allDatoCmsPageHome {
      nodes{
        isActual
        rok
        kolorRoku {
          hex
        }
        lecturersBackButtonText
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
  }
`
