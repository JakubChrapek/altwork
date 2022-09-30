import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { TextPageStyles } from "../components/TextPageStyles"
import siteConfig from "../../config/site-config"
import Seo from "../components/Seo"

const StyledLink = styled(Link)`
  margin: 0 0 3rem;
  display: inline-block;
`

const NotFoundPage = ({ data }) => {
  return (
    <Layout rok={data.datoCmsPageHome.rok} kolorRoku={data.datoCmsPageHome.kolorRoku.hex}>
      <Seo
        title={siteConfig.title}
        description={siteConfig.description}
        meta={data.datoCmsPageHome.seoMetaTags}
      />
      <TextPageStyles>
        <h1>
          <p>404. Strony nie znaleziono.</p>
        </h1>
        <StyledLink to="/">Strona główna &rarr;</StyledLink>
      </TextPageStyles>
    </Layout>
  )
}

export const cookiesQuery = graphql`
  {
    datoCmsPageHome (isActual: {eq: true}){
      isActual
      rok
      kolorRoku {
        hex
      }
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

export default NotFoundPage
