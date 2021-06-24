import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeroSection from "../components/HeroSection"
import VideoSection from "../components/VideoSection"
import AboutSection from "../components/AboutSection"
import ToggleSection from "../components/ToggleSection"
import WhyWorthItSection from "../components/WhyWorthItSection"
import LecturersSection from "../components/LecturersSection"
import ProgramSection from "../components/ProgramSection"

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
      armchairon,
      armchairoff,
      chairon,
      chairoff,
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
  } = data
  return (
    <Layout>
      <Seo meta={data.datoCmsPageHome.seoMetaTags} />
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
        chairoff={chairoff}
        chairon={chairon}
        armchairoff={armchairoff}
        armchairon={armchairon}
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
      armchairoff {
        gatsbyImageData(placeholder: NONE)
      }
      armchairon {
        gatsbyImageData(placeholder: NONE)
      }
      chairon {
        gatsbyImageData(placeholder: NONE)
      }
      chairoff {
        gatsbyImageData(placeholder: NONE)
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
  }
`

export default IndexPage
