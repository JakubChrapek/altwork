import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import HamburgerMenu from "./HamburgerMenu"
import { Logo, IconFB, IconYT } from "./icons"

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 2;
  background-color: var(--color-white);
`

const HeaderContainer = styled.div`
  transition: transform 0.3s;
  margin: 0 auto;
  max-width: var(--content-max-width-desktop);
  padding: 3.75rem 8.75rem 0;
  @media (max-width: 1366px) {
    padding: 3.75rem 5.75rem 0;
  }
  @media (max-width: 1024px) {
    padding: 3.75rem 3.75rem 0;
  }
  height: 15.375rem;
  position: relative;
  background-color: var(--color-white);
  z-index: 3;
`

const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    margin: 0 4rem 0 0;
    > a {
      display: flex;
    }
  }
  a {
    text-decoration: none;
    color: var(--color-black);
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const SocialColumn = styled.ul`
  margin-right: 4.563rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin-top: 0.375rem;

  > li:first-of-type {
    margin-bottom: 1.313rem;
  }

  a {
    display: flex;
  }
`

const AnchorColumn = styled(SocialColumn)`
  display: flex;
  flex-direction: column;
  margin-right: 0;
  width: 16.25rem;

  > a {
    position: relative;
    font-family: Poppins;
    font-size: var(--font-20);
    font-weight: 700;
    line-height: 0.95;
    padding: 0.8rem 0 0.4rem;
    border-bottom: 1px solid var(--color-gray);
    &:first-of-type {
      margin-top: -0.8rem;
    }
    &:last-of-type {
      border-bottom: 0;
    }
    &.link--accent {
      padding-left: 2.688rem;
      :after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(calc(-50% + 0.2rem));
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 1.75rem;
        background-color: var(--color-accent);
      }
    }
  }
`

const Header = ({ data }) => {
  const {
    datoCmsHeader: {
      headerLinks,
      headerSocialLinks,
      headerPartner1Svg,
      headerPartner2Svg,
    },
  } = data

  return (
    <>
      <HamburgerMenu
        headerLinks={headerLinks}
        headerSocialLinks={headerSocialLinks}
        firstPartnerLogo={headerPartner1Svg}
        secondPartnerLogo={headerPartner2Svg}
      />
      <HeaderWrapper
        data-scroll
        data-scroll-sticky
        data-scroll-target="#container"
      >
        <HeaderContainer className="header">
          <HeaderStyles>
            <h1>
              <Logo />
            </h1>
            <NavigationWrapper>
              <SocialColumn>
                {headerSocialLinks.map((headerSocialLink, i) => (
                  <li key={headerSocialLink.socialLink}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={headerSocialLink.socialLink}
                    >
                      {i === 0 ? (
                        <IconFB variant="dark" />
                      ) : (
                        <IconYT variant="dark" />
                      )}
                    </a>
                  </li>
                ))}
              </SocialColumn>
              <AnchorColumn>
                {headerLinks.map((headerLink, iterator) => {
                  const isLast = iterator === headerLinks.length - 1
                  return (
                    <Link
                      key={headerLink.linkText}
                      activeClassName="active"
                      className={isLast && "link--accent"}
                      target={isLast && "_blank"}
                      to={headerLink.linkUrl}
                    >
                      <li>{headerLink.linkText}</li>
                    </Link>
                  )
                })}
              </AnchorColumn>
            </NavigationWrapper>
          </HeaderStyles>
        </HeaderContainer>
      </HeaderWrapper>
    </>
  )
}

const MyHeader = () => {
  return (
    <StaticQuery
      query={graphql`
        query newQuery {
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
                alt
                gatsbyImageData
              }
            }
            headerPartner1Svg
            headerPartner2Svg
          }
        }
      `}
      render={data => <Header data={data} />}
    />
  )
}

export default MyHeader
