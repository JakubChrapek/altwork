import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { IconFB, IconYT, Logo } from "./Icons"
import { BlueRankLogo } from "./Logos"
import { Wrapper } from "./Wrapper"

const FooterStyles = styled.footer`
  background-color: var(--color-black);
  color: var(--color-white);
  z-index: 2;
  position: relative;

  a:focus-visible {
    outline: 0.125rem solid var(--color-white);
  }
`

const FooterWrapper = styled(Wrapper)`
  padding-top: 2.875rem;
  padding-bottom: 2.125rem;
  @media (max-width: 767px) {
    padding-bottom: 3.5rem;
  }
`

const LogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  @media (max-width: 767px) {
    margin-top: 1.5rem;
  }
  > a:last-of-type {
    margin-left: 1rem;
  }
  a:hover svg {
    transform: scale(1.2);
  }
  svg {
    transition: transform 0.25s var(--cubic);
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
    padding-bottom: 1.6rem;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 80%;
    align-items: center;
    list-style-type: none;
    border-bottom: 1px solid var(--color-white);
    padding-bottom: 1.6rem;
    > li {
      margin-right: 2rem;
      flex: 1 1 11%;
      &:last-of-type {
        margin-right: 0;
      }
      svg {
        filter: grayscale(100%);
      }
      svg,
      path {
        fill: #fff;
        width: 100%;
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
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 3.875rem;
    > ul {
      flex: 1 1 100%;
      width: 100%;
      > li {
        flex: 1 1 11%;
        svg {
          max-height: 3.5rem;
        }
      }
      .gatsby-image-wrapper {
        max-height: 5rem !important;
        > div,
        img,
        picture {
        }
      }
    }
  }
`
const OrganisersRow = styled(BrandingRow)`
  margin-top: 3.625rem;
  @media (max-width: 767px) {
    margin-top: 1.5rem;
    > ul > li {
      svg {
        min-width: 8rem;
      }
    }
  }
  > ul > li {
    max-width: 11.438rem;
    svg {
      max-width: 11.438rem;
    }
    @media (max-width: 840px) {
      max-width: 10.338rem;
      svg {
        max-width: 10.338rem;
      }
    }
  }
`
const PartnersRow = styled(BrandingRow)`
  > ul {
    border-bottom: 0;
    > li {
      max-width: 12.438rem;
      svg {
        max-width: 12.438rem;
      }
      @media (max-width: 840px) {
        max-width: 11.238rem;
        svg {
          max-width: 11.238rem;
        }
      }
    }
  }
  @media (max-width: 767px) {
    margin-top: 1.5rem;
    > ul > li {
      svg {
        min-width: 7rem;
      }
    }
  }
`
const ContentPartnersRow = styled(BrandingRow)`
  > ul {
    border-bottom: 0;
    > li {
      margin-right: 2rem;
      max-width: 7.5rem;
      svg {
        max-width: 7.5rem;
      }
      @media (max-width: 840px) {
        max-width: 7.5rem;
        svg {
          max-width: 5rem;
        }
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 767px) {
    margin-top: 1.5rem;
    > ul > li {
      margin-right: 1rem;
      &:last-of-type {
        margin-right: 0;
      }
      flex: unset;
      svg {
        height: 1.25rem;
      }
    }
  }
`

const CopyrightsRow = styled.div`
  display: flex;
  margin-top: 4.6rem;
  justify-content: space-between;
  > p {
    font-size: var(--font-18);
    color: var(--color-white);
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 4rem;
    > p {
      margin-top: 2.5rem;
    }
  }
`
const LinksList = styled.ul`
  list-style-type: none;
  display: flex;
  > li {
    margin-right: 2.5rem;
    @media (max-width: 940px) {
      margin-right: 2rem;
    }
    &:last-of-type {
      margin-right: 0;
    }
    a {
      text-decoration: underline;
      font-size: var(--font-18);
      color: var(--color-white);
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    > li {
      margin-top: 0.15rem;
      &:first-of-type {
        margin-top: 0;
      }
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
              <li key={`${logo.partnerPageSlug}-organisersLogos`}>
                <Link to={`/${logo.partnerPageSlug}`}>
                  <span dangerouslySetInnerHTML={{ __html: logo.grafikaSvg }} />
                </Link>
              </li>
            ))}
          </ul>
        </OrganisersRow>
        <PartnersRow>
          <StructuredText data={footerPartnersTitle} />
          <ul>
            {partnersLogos.map(logo => (
              <li key={`${logo.partnerPageSlug}-ContentPartners`}>
                <Link to={`/${logo.partnerPageSlug}`}>
                  <span dangerouslySetInnerHTML={{ __html: logo.grafikaSvg }} />
                </Link>
              </li>
            ))}
          </ul>
        </PartnersRow>
        {/* <ContentPartnersRow>
          <StructuredText data={footerContentPartnersTitle} />
          <ul>
            {contentPartnersLogos.map(logo => (
              <li key={`${logo.partnerPageSlug}-partnersLastRow`}>
                <Link to={`/${logo.partnerPageSlug}`}>
                  <BlueRankLogo />
                </Link>
              </li>
            ))}
          </ul>
        </ContentPartnersRow> */}
        <CopyrightsRow>
          <LinksList>
            {/* <li>
              <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
            </li>
            <li>
              <Link to="/polityka-cookies">Polityka Cookies</Link>
            </li>
            <li>
              <Link to="/regulamin">Regulamin</Link>
            </li> */}
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
              grafikaSvg
            }
            partnersLogos {
              logoGraphic {
                gatsbyImageData
              }
              partnerPageSlug
              grafikaSvg
            }
            contentPartnersLogos {
              logoGraphic {
                gatsbyImageData
              }
              partnerPageSlug
              grafikaSvg
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
