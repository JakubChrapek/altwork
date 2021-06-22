import React, { useEffect, useState, useRef } from "react"
import Header from "./Header"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"
import { Wrapper } from "./Wrapper"
import useLocoScroll from "../hooks/useLocoScroll"

const Layout = ({ children, location }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const ref = useRef(null)

  // useLocoScroll(hasMounted)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  if (typeof window === "undefined" || !window.document) {
    return null
  }

  return (
    <>
      <GlobalStyles />
      {/* <Scroll callbacks={location} /> */}
      <div id="main-container" ref={ref}>
        <Header />
        <Wrapper>
          <main>{children}</main>
        </Wrapper>
        <Footer />
      </div>
    </>
  )
}

export default Layout
