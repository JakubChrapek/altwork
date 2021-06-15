import { graphql } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import Layout from "../components/layout"
import { Wrapper } from "../components/Wrapper"

const PageStyles = styled.section`
  padding: 5.25rem 0;
  > h1 {
    > p {
      font-size: var(--font-80);
      font-family: Diagramm;
      font-weight: bold;
      margin: 0 0 5rem;
    }
  }
  h2 {
    text-align: center;
    font-size: var(--font-50);
    font-weight: bold;
    margin: 0 0 2.5rem;
  }
  p {
    font-size: var(--font-20);
    line-height: 1.4;
    + p {
      margin-top: 1em;
    }
    + h2 {
      margin-top: 5rem;
    }
  }
  li {
    list-style-position: inside;
    > p {
      display: inline;
    }
    &::marker {
      font-weight: bold;
      font-size: var(--font-20);
    }
    + li {
      margin-top: 1em;
    }
  }
  ol + h2 {
    margin-top: 5rem;
  }
  a {
    color: var(--color-black);
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
