import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import Circles from "../components/Circles"
import Layout from "../components/Layout"
import { TextPageStyles } from "../components/TextPageStyles"
import siteConfig from "../../config/site-config"
import Seo from "../components/Seo"

const CookiesPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={siteConfig.title}
        description={siteConfig.description}
        meta={data.datoCmsPageHome.seoMetaTags}
      />
      <TextPageStyles>
        <h1>
          <StructuredText data={data.datoCmsPageCookie.cookiesTitle.value} />
        </h1>
        <StructuredText data={data.datoCmsPageCookie.cookiesText} />
        <Circles
          plainText={data.datoCmsPageHome.additionalInfoCtaText}
          filledCircleText={data.datoCmsPageHome.filledCircleContent}
          variant="plainText"
        />
      </TextPageStyles>
    </Layout>
  )
}

export const cookiesQuery = graphql`
  {
    datoCmsPageCookie {
      cookiesTitle {
        value
      }
      cookiesText {
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

export default CookiesPage
