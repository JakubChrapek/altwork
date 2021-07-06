import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import Circles from "../components/Circles"
import Layout from "../components/Layout"
import { TextPageStyles } from "../components/TextPageStyles"
import siteConfig from "../../config/site-config"
import Seo from "../components/Seo"

const PageStyles = styled(TextPageStyles)`
  h2 {
    text-align: center;
  }
`

const PrivacyPolicyPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={siteConfig.title}
        description={siteConfig.description}
        meta={data.datoCmsPageHome.seoMetaTags}
      />
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

export default PrivacyPolicyPage
