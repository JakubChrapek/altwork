import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import Layout from "../components/layout"
import { TextPageStyles } from "../components/TextPageStyles"

const PageStyles = styled(TextPageStyles)`
  h2 {
    text-align: center;
  }
`

const PrivacyPolicyPage = ({ data }) => {
  return (
    <Layout>
      <PageStyles>
        <h1>
          <StructuredText
            data={data.datoCmsPagePrivacyPolicy.privacyTitle.value}
          />
        </h1>
        <StructuredText data={data.datoCmsPagePrivacyPolicy.privacyText} />
      </PageStyles>
    </Layout>
  )
}

export const privacyQuery = graphql`
  {
    datoCmsPagePrivacyPolicy {
      privacyTitle {
        value
      }
      privacyText {
        value
      }
    }
  }
`

export default PrivacyPolicyPage
