import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Scroll from "./LocomotiveScroll"
import Header from "./Header"
import GlobalStyles from '../styles/GlobalStyles'
// import "../styles/layout.scss"
// import "../styles/locomotive-scroll.scss"

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
      <Scroll callbacks={location} />

      <div
        id="container"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `120px 1.45rem 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
