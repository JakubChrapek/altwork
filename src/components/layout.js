import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Scroll from "./LocomotiveScroll"
import Header from "./header"
import GlobalStyles from "../styles/globalStyles"
import styled from "styled-components"

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: var(--content-max-width-desktop);
  padding: 15.375rem 8.75rem 0;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`

// This `location` prop will serve as a callback on route change
const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />

      {/* Here we pass the callbacks to the component. Anything that impacts the innerHeight, for example: Font Loaded */}
      {/* <Scroll callbacks={location} /> */}

      <PageWrapper data-scroll-container id="container">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </PageWrapper>
    </>
  )
}

export default Layout
