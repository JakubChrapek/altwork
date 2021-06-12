import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/heroSection"
import VideoSection from "../components/videoSection"
import AboutSection from "../components/aboutSection"
import ToggleSection from "../components/toggleSection"
import WhyWorthItSection from "../components/whyWorthItSection"
import LecturersSection from "../components/lecturersSection"
import ProgramSection from "../components/programSection"

const IndexPage = ({ data }) => {
  const {
    datoCmsPageHome: {
      emptyCircleContent,
      filledCircleContent,
      heroClaim,
      previewImage,
      firstContentColumn,
      secondContentColumn,
      aboutWhatTitle,
      shortQuestions,
      longerQuestions,
      whyWorthItTitle,
      whyWorthItAnswers,
      lecturersTitle,
      lecturers,
      programTitle,
      programDescription,
      meetingSessions,
      additionalFirstColText,
      additionalSecondColText,
      additionalInfoCtaText,
    },
    chairoff,
    chairon,
    armchairoff,
    armchairon,
  } = data
  return (
    <Layout>
      <SEO meta={data.datoCmsPageHome.seoMetaTags} />
      <HeroSection
        emptyCircleText={emptyCircleContent}
        filledCircleText={filledCircleContent}
        claimText={heroClaim}
      />
      <VideoSection
        previewImage={previewImage}
        firstContentColumn={firstContentColumn}
        secondContentColumn={secondContentColumn}
      />
      <AboutSection
        aboutWhatTitle={aboutWhatTitle}
        shortQuestions={shortQuestions}
        longerQuestions={longerQuestions}
      />
      <ToggleSection
        chairoff={chairoff.nodes[0]}
        chairon={chairon.nodes[0]}
        armchairoff={armchairoff.nodes[0]}
        armchairon={armchairon.nodes[0]}
      />
      <WhyWorthItSection
        whyWorthItTitle={whyWorthItTitle}
        whyWorthItAnswers={whyWorthItAnswers}
      />
      <LecturersSection lecturersTitle={lecturersTitle} lecturers={lecturers} />
      <ProgramSection
        programTitle={programTitle}
        programDescription={programDescription}
        meetingSessions={meetingSessions}
        filledCircleText={filledCircleContent}
        additionalFirstColText={additionalFirstColText}
        additionalSecondColText={additionalSecondColText}
        additionalInfoCtaText={additionalInfoCtaText}
      />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    datoCmsPageHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      emptyCircleContent {
        value
      }
      filledCircleContent {
        value
      }
      heroClaim {
        value
      }
      previewImage {
        alt
        gatsbyImageData
      }
      firstContentColumn {
        value
      }
      secondContentColumn {
        value
      }
      aboutWhatTitle {
        value
      }
      shortQuestions {
        questionText {
          value
        }
      }
      longerQuestions {
        questionText {
          value
        }
      }
      whyWorthItTitle {
        value
      }
      whyWorthItAnswers {
        paragraphText {
          value
        }
      }
      lecturersTitle
      lecturers {
        lecturerPhoto {
          gatsbyImageData
          alt
        }
        lecturerBio {
          value
        }
        lecturerHeader {
          value
        }
      }
      programTitle
      programDescription {
        value
      }
      meetingSessions {
        sessionTitle {
          value
        }
        sessionQuestion {
          value
        }
      }

      additionalFirstColText {
        value
      }
      additionalSecondColText {
        value
      }
      additionalInfoCtaText {
        value
      }
    }
    chairoff: allImageSharp(
      filter: { id: { eq: "64357852-a7b7-50ec-9106-ac45833571ae" } }
    ) {
      nodes {
        gatsbyImageData
        id
      }
    }
    chairon: allImageSharp(
      filter: { id: { eq: "0f5cb491-5c9a-5c6d-ba01-2dafd720c8b5" } }
    ) {
      nodes {
        gatsbyImageData
        id
      }
    }
    armchairoff: allImageSharp(
      filter: { id: { eq: "8748fa35-caf8-5313-a56f-5e290080ebaf" } }
    ) {
      nodes {
        gatsbyImageData
        id
      }
    }
    armchairon: allImageSharp(
      filter: { id: { eq: "7e9487f2-e1d9-5d25-890b-877077837e19" } }
    ) {
      nodes {
        gatsbyImageData
        id
      }
    }
  }
`

export default IndexPage
