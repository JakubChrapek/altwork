import { graphql } from "gatsby"
import { TextPageStyles } from "../components/TextPageStyles"
import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Circles from "../components/Circles"

const PartnerBio = styled.section`
  display: flex;
  > * {
    flex: 1 1 50%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const PartnerLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 6.25rem 0 5.688rem;
  svg {
    width: 22rem;
    height: 22rem;
  }
  svg,
  path {
    fill: var(--color-black);
  }
  @media (max-width: 1024px) {
    svg {
      width: 55vw;
      max-width: 20rem;
    }
    justify-content: flex-start;
    padding: 0;
  }
`

const PartnerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PartnerPage = ({ data }) => {
  return (
    <Layout>
      <TextPageStyles>
        <h1>
          Nasi
          <br />
          partnerzy
        </h1>
        <PartnerBio>
          <PartnerLogoWrapper>
            <span
              dangerouslySetInnerHTML={{ __html: data.datoCmsLogo.grafikaSvg }}
            />
          </PartnerLogoWrapper>
          <PartnerInfoWrapper>
            <h2>{data.datoCmsLogo.partnerName}</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </PartnerInfoWrapper>
        </PartnerBio>
        <Circles
          plainText={data.datoCmsPageHome.additionalInfoCtaText}
          filledCircleText={data.datoCmsPageHome.filledCircleContent}
          variant="plainText"
        />
      </TextPageStyles>
    </Layout>
  )
}

export default PartnerPage

export const query = graphql`
  query ($partnerPageSlug: String) {
    datoCmsLogo(partnerPageSlug: { eq: $partnerPageSlug }) {
      partnerPageSlug
      partnerName
      grafikaSvg
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
