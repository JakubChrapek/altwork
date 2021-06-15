import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import Layout from "../components/layout"
import { TextPageStyles } from "../components/TextPageStyles"

const StatutePage = ({ data }) => {
  return (
    <Layout>
      <TextPageStyles>
        <h1>
          <StructuredText data={data.datoCmsPageTerm.statuteTitle.value} />
        </h1>
        <StructuredText data={data.datoCmsPageTerm.statuteText} />
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
  }
`

export default StatutePage
