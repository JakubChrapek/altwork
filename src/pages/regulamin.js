import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import Circles from "../components/Circles"
import Layout from "../components/Layout"
import { TextPageStyles } from "../components/TextPageStyles"
import siteConfig from "../../config/site-config"
import Seo from "../components/Seo"

const StatutePage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={siteConfig.title}
        description={siteConfig.description}
        meta={data.datoCmsPageHome.seoMetaTags}
      />
      <TextPageStyles>
        <h1>
          <StructuredText data={data.datoCmsPageTerm.statuteTitle.value} />
        </h1>
        <StructuredText data={data.datoCmsPageTerm.statuteText} />
        <Circles
          plainText={data.datoCmsPageHome.additionalInfoCtaText}
          filledCircleText={data.datoCmsPageHome.filledCircleContent}
          variant="plainText"
        />
      </TextPageStyles>
    </Layout>
  )
}

export const statuteQuery = graphql`
  {
    datoCmsPageTerm {
      statuteText {
        value
      }
      statuteTitle {
        value
      }
    }
    datoCmsPageHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      filledCircleContent {
        value
      }
      additionalInfoCtaText {
        value
      }
    }
  }
`

export default StatutePage
