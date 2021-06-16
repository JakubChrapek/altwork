import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { IconFB, IconYT, Logo } from "./icons"
import { Wrapper } from "./Wrapper"

const FooterStyles = styled.footer`
  background-color: var(--color-black);
  color: var(--color-white);

  a:focus-visible {
    outline: 2px solid var(--color-white);
  }
`

const FooterWrapper = styled(Wrapper)`
  padding-top: 2.875rem;
  padding-bottom: 2.125rem;
`

const LogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  > a:last-of-type {
    margin-left: 1rem;
  }
`

const BrandingRow = styled.div`
  display: flex;
  margin-top: 3rem;

  > p {
    /* flex: 1 1 20%; */
    padding-right: 2.5rem;
    width: 11.25rem;
    font-size: var(--font-18);
    line-height: 1.55;
    color: var(--color-white);
    margin-top: 0.65rem;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 80%;
    list-style-type: none;
    border-bottom: 1px solid var(--color-white);
    padding-bottom: 1.6rem;
    > li {
      margin-right: 2rem;
      &:last-of-type {
        margin-right: 0;
      }
    }
    .gatsby-image-wrapper {
      max-height: 5rem !important;
      > div,
      img,
      picture {
        object-fit: contain !important;
      }
    }
  }
`
const OrganisersRow = styled(BrandingRow)`
  margin-top: 3.625rem;
`
const PartnersRow = styled(BrandingRow)``
const ContentPartnersRow = styled(BrandingRow)`
  > ul {
    border-bottom: 0;
  }
`

const CopyrightsRow = styled.div`
  display: flex;
  margin-top: 6rem;
  justify-content: space-between;
  > p {
    font-size: var(--font-18);
    color: var(--color-white);
  }
`
const LinksList = styled.ul`
  list-style-type: none;
  display: flex;
  > li {
    margin-right: 2.5rem;
    &:last-of-type {
      margin-right: 0;
    }
    a {
      text-decoration: underline;
      font-size: var(--font-18);
      color: var(--color-white);
    }
  }
`
const Footer = ({ data }) => {
  const {
    datoCmsFooter: {
      footerContentPartnersTitle,
      footerOrganisersTitle,
      footerPartnersTitle,
      organisersLogos,
      partnersLogos,
      contentPartnersLogos,
    },
    datoCmsHeader: { headerSocialLinks },
  } = data

  return (
    <FooterStyles>
      <FooterWrapper>
        <LogoRow>
          <Logo maxWidth="10.25rem" variant="light" />
          <SocialWrapper>
            {headerSocialLinks.map((headerSocialLink, i) => (
              <a
                key={`${headerSocialLink.socialLink}-footer`}
                rel="noopener noreferrer"
                target="_blank"
                href={headerSocialLink.socialLink}
              >
                {i === 0 ? (
                  <IconFB variant="light" />
                ) : (
                  <IconYT variant="light" />
                )}
              </a>
            ))}
          </SocialWrapper>
        </LogoRow>
        <OrganisersRow>
          <StructuredText data={footerOrganisersTitle} />
          <ul>
            {organisersLogos.map(logo => (
              <li>
                <Link to={`/${logo.partnerPageSlug}`}>
                  <GatsbyImage image={logo.logoGraphic.gatsbyImageData} />
                </Link>
              </li>
            ))}
          </ul>
        </OrganisersRow>
        <PartnersRow>
          <StructuredText data={footerPartnersTitle} />
          <ul>
            {partnersLogos.map(logo => (
              <li>
                <Link to={`/${logo.partnerPageSlug}`}>
                  <GatsbyImage image={logo.logoGraphic.gatsbyImageData} />
                </Link>
              </li>
            ))}
          </ul>
        </PartnersRow>
        <ContentPartnersRow>
          <StructuredText data={footerContentPartnersTitle} />
          <ul>
            {contentPartnersLogos.map(logo => (
              <li>
                <Link to={`/${logo.partnerPageSlug}`}>
                  <GatsbyImage image={logo.logoGraphic.gatsbyImageData} />
                </Link>
              </li>
            ))}
          </ul>
        </ContentPartnersRow>
        <CopyrightsRow>
          <LinksList>
            <li>
              <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
            </li>
            <li>
              <Link to="/polityka-cookies">Polityka Cookies</Link>
            </li>
            <li>
              <Link to="/regulamin">Regulamin</Link>
            </li>
          </LinksList>
          <p>&copy; {new Date().getFullYear()} Alt:work</p>
        </CopyrightsRow>
      </FooterWrapper>
    </FooterStyles>
  )
}

const MyFooter = () => {
  return (
    <StaticQuery
      query={graphql`
        query footerQuery {
          datoCmsFooter {
            footerContentPartnersTitle {
              value
            }
            footerOrganisersTitle {
              value
            }
            footerPartnersTitle {
              value
            }
            organisersLogos {
              logoGraphic {
                gatsbyImageData
              }
              partnerPageSlug
            }
            partnersLogos {
              logoGraphic {
                gatsbyImageData
              }
              partnerPageSlug
            }
            contentPartnersLogos {
              logoGraphic {
                gatsbyImageData
              }
              partnerPageSlug
            }
          }
          datoCmsHeader {
            headerSocialLinks {
              socialLink
              socialImage {
                alt
                gatsbyImageData
              }
            }
          }
        }
      `}
      render={data => <Footer data={data} />}
    />
  )
}

export default MyFooter
