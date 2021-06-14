import React from "react"

const PartnerPage = props => {
  console.log(props)
  return <div></div>
}

export default PartnerPage

export const query = graphql`
  query {
    allDatoCmsLogo {
      nodes {
        partnerPageSlug
        __typename
      }
    }
  }
`
