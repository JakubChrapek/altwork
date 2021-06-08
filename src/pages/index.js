import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Collapsible from "../components/Collapsible"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo meta={data.datoCmsPageHome.seoMetaTags} />
    <h1>Hi people</h1>
    <p>Welcome to my quick Locomotive scroll starter.</p>
    <h2>Locomotive Scroll and innerHeight</h2>
    <p>
      Any component that changes the innerHeight of the page should trigger the
      update method.
    </p>
    <p>
      In our case <code>window.scroll.update()</code>
    </p>
    <Collapsible>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
      veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
      rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
      veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
      rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
    </Collapsible>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export const homeQuery = graphql`
  {
    datoCmsPageHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`

export default IndexPage
