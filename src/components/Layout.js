import React, { useEffect, useState, useRef } from "react"
import Header from "./Header"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"
import { Wrapper } from "./Wrapper"
import { Helmet } from "react-helmet"
import ActualYear from "./actualYear"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ kolorRoku, children, rok }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  const data = useStaticQuery(graphql`
    query header {
      allDatoCmsPageHome {
          nodes{
            rok
            favicon {
              url
            }
          }
        }
    }
  `)

  const favicon = data.allDatoCmsPageHome.nodes.filter(el => el.rok === rok)[0].favicon.url

  if (!hasMounted) {
    return null
  }

  return (
    <>
      <GlobalStyles kolorRoku={kolorRoku} />
      <div id="main-container" ref={ref}>
        <Helmet
          htmlAttributes={{
            lang: 'pl',
          }}
        >
          <link rel="icon" href={favicon} />
        </Helmet>
        <ActualYear rok={rok} />
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

