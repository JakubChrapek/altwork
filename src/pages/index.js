import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Collapsible from "../components/Collapsible"
import Seo from "../components/Seo"
import HeroSection from "../components/HeroSection"

const IndexPage = ({ data }) => {
  const {
    datoCmsPageHome: { emptyCircleContent, filledCircleContent, heroClaim },
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
    }
  }
`

export default IndexPage
