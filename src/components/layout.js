import React, { useEffect, useState } from "react"
// import Scroll from "./LocomotiveScroll"
import Header from "./Header"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"
import { Wrapper } from "./Wrapper"

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

  if (!hasMounted) {
    return null
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      {/* <Scroll callbacks={location} /> */}
      <Wrapper data-scroll-container id="container">
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout
