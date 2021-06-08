import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Logo } from "./Icons"

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`

const HeaderContainer = styled.div`
  transition: transform 0.3s;
`

const HeaderStyles = styled.div`
  margin: 0 auto;
  padding: 1.063rem 3.75rem 0 2.25rem;
  display: flex;
  align-items: center;
  h1 {
    font-size: 1.875rem;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: var(--color-white);
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      datoCmsHeader {
        logo {
          gatsbyImageData(width: 200, placeholder: BLURRED)
        }
        headerLinks {
          linkText
          linkUrl
        }
        headerSocialLinks {
          socialLink
          socialImage {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper
      data-scroll
      data-scroll-sticky
      data-scroll-target="#container"
    >
      <HeaderContainer className="header">
        <HeaderStyles>
          <h1>
            <Link to="/">
              <Logo />
            </Link>
          </h1>
        </HeaderStyles>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
