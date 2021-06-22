import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import Circles from "../components/Circles"
import Layout from "../components/Layout"
import { TextPageStyles } from "../components/TextPageStyles"

const StatutePage = ({ data }) => {
  return (
    <Layout>
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
