import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import Layout from "../components/layout"
import { TextPageStyles } from "../components/TextPageStyles"

const CookiesPage = ({ data }) => {
  return (
    <Layout>
      <TextPageStyles>
        <h1>
          <StructuredText data={data.datoCmsPageCookie.cookiesTitle.value} />
        </h1>
        <StructuredText data={data.datoCmsPageCookie.cookiesText} />
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
  }
`

export default CookiesPage
