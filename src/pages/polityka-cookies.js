import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import Circles from "../components/Circles"
import Layout from "../components/Layout"
import { TextPageStyles } from "../components/TextPageStyles"

const CookiesPage = ({ data }) => {
  return (
    <Layout>
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
