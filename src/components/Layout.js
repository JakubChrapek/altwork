import React, { useEffect, useState, useRef } from "react"
import Header from "./Header"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"
import { Wrapper } from "./Wrapper"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <>
      <GlobalStyles />
      <div id="main-container" ref={ref}>
        <Helmet
          htmlAttributes={{
            lang: 'pl',
          }}
        />
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
