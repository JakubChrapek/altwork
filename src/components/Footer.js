import React from "react"
import styled from "styled-components"
import { IconFB, IconYT, Logo } from "./icons"
import { Wrapper } from "./wrapper"

const FooterStyles = styled.footer`
  background-color: var(--color-black);
  color: var(--color-white);
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
  > svg:last-of-type {
    margin-left: 1rem;
  }
`

const BrandingRow = styled.div`
  display: flex;
  > p {
    flex: 1 1 10rem;
    padding-right: 2.5rem;
    border: 2px solid white;
  }
  > div {
    flex: 1 1 100%;
    border: 2px solid white;
  }
`
const OrganisersRow = styled(BrandingRow)``
const PartnersRow = styled(BrandingRow)``
const ContentPartnersRow = styled(BrandingRow)``

const Footer = () => {
  return (
    <FooterStyles>
      <FooterWrapper>
        <LogoRow>
          <Logo maxWidth="10.25rem" variant="light" />
          <SocialWrapper>
            <IconFB variant="light" />
            <IconYT variant="light" />
          </SocialWrapper>
        </LogoRow>
        <OrganisersRow>
          <p>Organizatorzy</p>
        </OrganisersRow>
        <PartnersRow></PartnersRow>
        <ContentPartnersRow></ContentPartnersRow>
      </FooterWrapper>
    </FooterStyles>
  )
}

export default Footer
