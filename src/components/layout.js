import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Scroll from "./LocomotiveScroll"
import Header from "./header"
import GlobalStyles from "../styles/globalStyles"
import styled from "styled-components"
import Footer from "./footer"
import { Wrapper } from "./wrapper"

// This `location` prop will serve as a callback on route change
const Layout = ({ children, location }) => {
  const [hasMounted, setHasMounted] = useState(false)
  // useEffect(() => {
  //   setRouteChange(!routeChange)
  //   setPanelComplete(false)
  // }, [pathname])
  useEffect(() => {
    setHasMounted(true)
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (!hasMounted) {
    return null
  }

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />

      {/* Here we pass the callbacks to the component. Anything that impacts the innerHeight, for example: Font Loaded */}
      {/* <Scroll callbacks={location} /> */}

      <Wrapper data-scroll-container id="container">
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout
