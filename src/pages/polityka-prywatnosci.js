import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import Circles from "../components/Circles"
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
        <Circles
          plainText={data.datoCmsPageHome.additionalInfoCtaText}
          filledCircleText={data.datoCmsPageHome.filledCircleContent}
          variant="plainText"
        />
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

export default PrivacyPolicyPage
