import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Collapsible from "../components/Collapsible"
import Seo from "../components/Seo"
import HeroSection from "../components/HeroSection"
import VideoSection from "../components/VideoSection"

const IndexPage = ({ data }) => {
  const {
    datoCmsPageHome: {
      emptyCircleContent,
      filledCircleContent,
      heroClaim,
      previewImage,
      firstContentColumn,
      secondContentColumn,
    },
  } = data
  console.log(data)
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
    }
  }
`

export default IndexPage
