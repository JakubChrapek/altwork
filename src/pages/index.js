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
import siteConfig from "../../config/site-config"

const IndexPage = ({ data }) => {
  // const {
  //   datoCmsPageHome: {
  //     emptyCircleContent,
  //     filledCircleContent,
  //     heroClaim,
  //     previewImage,
  //     firstContentColumn,
  //     secondContentColumn,
  //     aboutWhatTitle,
  //     shortQuestions,
  //     longerQuestions,
  //     armchairon,
  //     armchairoff,
  //     chairon,
  //     chairoff,
  //     whyWorthItTitle,
  //     whyWorthItAnswers,
  //     lecturersTitle,
  //     lecturersSeeMoreButtonText,
  //     lecturersBackButtonText,
  //     lecturers,
  //     programTitle,
  //     programDescription,
  //     meetingSessions,
  //     additionalFirstColText,
  //     additionalSecondColText,
  //     additionalInfoCtaText,
  //   },
  // } = data
  return (
    <Layout>
      {/* <Seo
        title={siteConfig.title}
        description={siteConfig.description}
        meta={data.datoCmsPageHome.seoMetaTags}
      />
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
      <LecturersSection
        buttonText={lecturersSeeMoreButtonText}
        lecturersBackButtonText={lecturersBackButtonText}
        lecturersTitle={lecturersTitle}
        lecturers={lecturers}
      />
      <ProgramSection
        programTitle={programTitle}
        programDescription={programDescription}
        meetingSessions={meetingSessions}
        filledCircleText={filledCircleContent}
        additionalFirstColText={additionalFirstColText}
        additionalSecondColText={additionalSecondColText}
        additionalInfoCtaText={additionalInfoCtaText}
      /> */}
    </Layout>
  )
}

// export const homeQuery = graphql`
//   {
//     datoCmsPageHome {
//       seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//       emptyCircleContent {
//         value
//       }
//       filledCircleContent {
//         value
//       }
//       heroClaim {
//         value
//       }
//       previewImage {
//         alt
//         gatsbyImageData
//       }
//       firstContentColumn {
//         value
//       }
//       secondContentColumn {
//         value
//       }
//       aboutWhatTitle {
//         value
//       }
//       shortQuestions {
//         questionText {
//           value
//         }
//       }
//       longerQuestions {
//         questionText {
//           value
//         }
//       }
//       armchairoff {
//         gatsbyImageData(placeholder: NONE)
//       }
//       armchairon {
//         gatsbyImageData(placeholder: NONE)
//       }
//       chairon {
//         gatsbyImageData(placeholder: NONE)
//       }
//       chairoff {
//         gatsbyImageData(placeholder: NONE)
//       }
//       whyWorthItTitle {
//         value
//       }
//       whyWorthItAnswers {
//         paragraphText {
//           value
//         }
//       }
//       lecturersTitle
//       lecturersSeeMoreButtonText
//       lecturersBackButtonText
//       lecturers {
//         lecturerPhoto {
//           gatsbyImageData
//           alt
//         }
//         lecturerHeader {
//           value
//         }
//         lecturerShortBio {
//           value
//         }
//         lecturerSlug
//       }
//       programTitle
//       programDescription {
//         value
//       }
//       meetingSessions {
//         sessionTitleFirstColumn {
//           value
//         }
//         sessionTime {
//           value
//         }
//         sessionTitleBold {
//           value
//         }
//         sessionQuestion {
//           value
//         }
//         sessionLecturersList {
//           value
//         }
//       }

//       additionalFirstColText {
//         value
//       }
//       additionalSecondColText {
//         value
//       }
//       additionalInfoCtaText {
//         value
//       }
//     }
//   }
// `

export default IndexPage
