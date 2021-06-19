import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import { IconFB, IconYT, Logo } from "./icons"
import { Wrapper } from "./Wrapper"

const HamburgerButtonStyles = styled.button`
  right: 8.75rem;
  right: -0.75rem;
  @media (max-width: 1366px) {
    right: 5.75rem;
  }
  @media (max-width: 1024px) {
    right: 3.75rem;
  }
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
  &:focus-visible {
    outline-offset: 0.25rem;
    outline: 0.125rem solid var(--color-black);
  }
  ${({ opened }) =>
    opened &&
    css`
      background-color: var(--color-white);
      span {
        height: 0.45rem;
      }
      span:first-of-type {
        transform: translateY(0.4rem) scale(0.6) rotate(-45deg);
      }
      span:last-of-type {
        transform: translateY(-0.4rem) scale(0.6) rotate(45deg);
      }
    `}
`

const HamburgerWrapper = styled(Wrapper)`
  justify-content: flex-end;
  display: flex;
  padding: 0;
  position: fixed;
  width: 100%;
  margin: 0 auto;
  top: 3.75rem;
  z-index: 3;
`

const HamburgerMenuContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-accent);
  width: 100%;
  z-index: 4;
  padding: 0 0 5.5rem;
`

const MenuOpenedWrapper = styled(Wrapper)`
  padding-top: 3.75rem;
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
  margin-top: 4.625rem;
  > * {
    flex: 1 1 50%;
  }
`

const LinksColumn = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  max-width: 536px;

  a {
    text-decoration: none;
    color: var(--color-black);
    font-weight: bold;
    border-bottom: 1px solid var(--color-black);
    > li {
      --minFontSize: var(--font-32);
      --maxFontSize: var(--font-60);
      --scaler: 4.392vw;
      font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
      /* font-size: 4.392vw; */
      line-height: 1;
      padding: 1rem 0 1.25rem;
    }
    &:first-of-type {
      > li {
        padding: 0 0 0.5rem;
      }
    }
    &:last-of-type {
      border-bottom: 0;
      > li {
        padding-left: 4.8rem;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          width: 3.75rem;
          height: 3.75rem;
          background-color: var(--color-white);
          border-radius: 3.75rem;
        }
      }
    }
  }
`

const ContactAndPartnersColumn = styled.div`
  padding-left: 6.75rem;
  > p {
    font-size: var(--font-20);
    font-weight: bold;
    line-height: 1;
  }
  > a {
    font-size: var(--font-32);
    font-weight: bold;
    color: var(--color-black);
    margin-top: 1rem;
    line-height: 1;
    display: inline-block;
  }
`
const SocialWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  margin-top: 2.25rem;
  > li {
    display: flex;
    &:first-of-type {
      margin-right: 1rem;
    }
  }
`
const PartnersWrapper = styled(SocialWrapper)`
  margin-top: 6.25rem;
  display: flex;
  > li {
    flex: 1 1 50%;
    max-height: 4.75rem;
    &:first-of-type {
      margin-right: 4.25rem;
    }
    svg {
      width: 100%;
    }
  }
`

const HamburgerMenu = ({
  headerLinks,
  headerSocialLinks,
  firstPartnerLogo,
  secondPartnerLogo,
}) => {
  const [menuOpened, setMenuOpened] = useState(false)

  const filteredLinks = headerLinks.filter(
    link => !link.linkText.toLowerCase().includes("kontakt")
  )

  const hamburgerRef = useRef()

  useEffect(() => {
    menuOpened && hamburgerRef.current.focus()
  }, [menuOpened])

  return (
    <>
      {menuOpened && (
        <HamburgerMenuContainer>
          <MenuOpenedWrapper>
            <LogoRow>
              <Logo
                onClick={() => {
                  setMenuOpened(false)
                }}
                circleFillColor="white"
              />
              <HamburgerButtonStyles
                ref={hamburgerRef}
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
                {filteredLinks.map((headerLink, iterator) => {
                  const isLast = iterator === filteredLinks.length - 1
                  return (
                    <Link
                      key={`${headerLink.linkText}-hamburger-variant`}
                      activeClassName="active"
                      className={isLast && "link--accent"}
                      to={headerLink.linkUrl}
                      target={isLast && "_blank"}
                      onClick={() => setMenuOpened(false)}
                    >
                      <li>{headerLink.linkText}</li>
                    </Link>
                  )
                })}
              </LinksColumn>
              <ContactAndPartnersColumn>
                <p>Skontaktuj się:</p>
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
                  <li>
                    <span
                      dangerouslySetInnerHTML={{ __html: firstPartnerLogo }}
                    />
                  </li>
                  <li>
                    <span
                      dangerouslySetInnerHTML={{ __html: secondPartnerLogo }}
                    />
                  </li>
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
