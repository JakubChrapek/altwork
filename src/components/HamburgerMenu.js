import { Link } from "gatsby"
import React, { useState } from "react"
import styled, { css, keyframes } from "styled-components"
import { IconFB, IconYT, Logo } from "./icons"
import { Wrapper } from "./wrapper"

const HamburgerButtonStyles = styled.button`
  position: fixed;
  right: 8.75rem;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  background-color: var(--color-accent);
  border-radius: 50%;
  width: 5.3rem;
  height: 5.3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: background-color 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  span {
    width: 2.5rem;
    height: 0.3rem;
    border-radius: 2.5rem;
    background-color: var(--color-black);
    transition: background-color 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045),
      transform 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    &:last-of-type {
      margin-top: 0.35rem;
    }
  }
  ${({ opened }) =>
    opened &&
    css`
      background-color: var(--color-white);
      span:first-of-type {
        transform: translateY(0.3rem) rotate(-45deg);
      }
      span:last-of-type {
        transform: translateY(-0.3rem) rotate(45deg);
      }
    `}
`

const HamburgerWrapper = styled(Wrapper)`
  justify-content: flex-end;
  display: flex;
  padding: 0;
  position: sticky;
  top: 2.25rem;
  z-index: 2;
`

const HamburgerMenuContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-accent);
  width: 100%;
  z-index: 4;
`

const MenuOpenedWrapper = styled(Wrapper)`
  padding-top: 2.25rem;
  position: relative;
  ${HamburgerButtonStyles} {
    position: relative;
    right: 0;
  }
`

const LogoRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const MainMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    flex: 1 1 50%;
  }
`

const LinksColumn = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`

const ContactAndPartnersColumn = styled.div``
const SocialWrapper = styled.ul``
const PartnersWrapper = styled.ul``

const HamburgerMenu = ({ headerLinks, headerSocialLinks }) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const handleToggle = () => {
    console.log("CLICK")
    setMenuOpened(!menuOpened)
  }

  const filteredLinks = headerLinks.filter(
    link => !link.linkText.toLowerCase().includes("kontakt")
  )
  return (
    <>
      {menuOpened && (
        <HamburgerMenuContainer>
          <MenuOpenedWrapper>
            <LogoRow>
              <Logo circleFillColor="white" />
              <HamburgerButtonStyles
                aria-label="Zamknij menu główne"
                aria-expanded={true}
                opened
                onClick={() => setMenuOpened(false)}
              >
                <span />
                <span />
              </HamburgerButtonStyles>
            </LogoRow>
            <MainMenuWrapper>
              <LinksColumn>
                {filteredLinks.map((headerLink, iterator) => (
                  <Link
                    key={`${headerLink.linkText}-hamburger-variant`}
                    activeClassName="active"
                    className={
                      iterator === filteredLinks.length - 1 && "link--accent"
                    }
                    to={headerLink.linkUrl}
                  >
                    <li>{headerLink.linkText}</li>
                  </Link>
                ))}
              </LinksColumn>
              <ContactAndPartnersColumn>
                Skontaktuj się:
                <a href="mailto:altwork@lodz.digital">altwork@lodz.digital</a>
                <SocialWrapper>
                  {headerSocialLinks.map((headerSocialLink, i) => (
                    <li
                      key={`${headerSocialLink.socialLink}-hamburger-variant`}
                    >
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
                </SocialWrapper>
                <PartnersWrapper>
                  <li>Łódź kreuje</li>
                  <li>Igrzyska Wolności</li>
                </PartnersWrapper>
              </ContactAndPartnersColumn>
            </MainMenuWrapper>
          </MenuOpenedWrapper>
        </HamburgerMenuContainer>
      )}
      <HamburgerWrapper>
        <HamburgerButtonStyles
          aria-label="Otwórz menu główne"
          aria-expanded={false}
          onClick={() => setMenuOpened(true)}
        >
          <span />
          <span />
        </HamburgerButtonStyles>
      </HamburgerWrapper>
    </>
  )
}

export default HamburgerMenu
