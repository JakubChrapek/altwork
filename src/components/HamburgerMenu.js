import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import { Wrapper } from "./Wrapper"
import { Logo } from "./Icons/logo"
import { IconFB } from "./Icons/facebook"
import { IconYT } from "./Icons/youtube"

const HamburgerButtonStyles = styled.button`
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
  @media (max-width: 767px) {
    width: 3.75rem;
    height: 3.75rem;
  }
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: background-color 0.25s var(--cubic), transform 0.25s var(--cubic);

  span {
    width: 2.5rem;
    height: 0.3rem;
    border-radius: 2.5rem;
    @media (max-width: 767px) {
      width: 1.9rem;
      height: 0.3rem;
    }
    background-color: var(--color-black);
    transition: background-color 0.25s var(--cubic),
      transform 0.25s var(--cubic);
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
  position: fixed;
  width: 100%;
  margin: 0 auto;
  top: 3.75rem;
  padding: 0 8.75rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  max-width: var(--content-max-width-desktop);
  @media (max-width: 1366px) {
    padding: 0 5.75rem;
  }
  @media (max-width: 1024px) {
    padding: 0 3.75rem;
  }
  @media (max-width: 767px) {
    padding: 0 2.25rem;
    top: 1.813rem;
  }
`

const HamburgerMenuContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-accent);
  width: 100%;
  z-index: 5;
  padding: 0 0 5.5rem;
  transform: translateX(100%);
  transition: transform 0.3s var(--cubic);
  &.show {
    transform: translateX(0);
  }
`

const MenuOpenedWrapper = styled(Wrapper)`
  padding-top: 3.75rem;
  overflow: auto;
  max-height: 100%;
      padding-bottom: 1rem;
  @media (max-width: 767px) {
    padding-top: 1.813rem;
    padding-bottom: 6rem;
  }
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
  @media (max-width: 1024px) {
    flex-direction: column;
    > * {
      flex: 1 1 100%;
    }
  }
  @media (max-width: 767px) {
    margin-top: 2.531rem;
  }
`

const LinksColumn = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  max-width: 536px;
  padding-right: 6.75rem;
  @media (max-width: 1080px) {
    padding-right: 4.5rem;
  }

  li {
    border-bottom: 1px solid var(--color-black);
    > a {
      display: block;
      text-decoration: none;
      color: var(--color-black);
      font-weight: bold;
      --minFontSize: var(--font-28);
      --maxFontSize: var(--font-60);
      --scaler: 3vw;
      font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
      line-height: 1;
      padding: 1rem 0 1.25rem;
      @media (max-width: 1024px) {
        --minFontSize: var(--font-50);
      }
      @media (max-width: 767px) {
        font-size: clamp(var(--font-24), 7.5vw, var(--font-28-pt));
      }
    }
    &:first-of-type {
      > li {
        padding: 0 0 0.5rem;
      }
    }
    &.link--accent {
      border-bottom: 0;
      &:hover > a:after {
        transform: translateX(4.75rem) scale(1.4);
      }
      > a {
        padding-left: 4.8rem;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          top: 0.7rem;
          width: 3.5rem;
          height: 3.5rem;
          background-color: var(--color-white);
          border-radius: 3.5rem;
          z-index: -1;
          transition: transform 0.25s var(--cubic);
        }
        @media (max-width: 767px) {
          padding-left: 2.5rem;
          &:after {
            width: 2rem;
            height: 2rem;
            top: 0.5rem;
            border-radius: 2;
          }
        }
      }
    }
  }
`

const ContactAndPartnersColumn = styled.div`
  > p {
    font-size: var(--font-20);
    font-weight: bold;
    line-height: 1;
    @media (max-width: 1024px) {
      font-size: var(--font-18-pt);
    }
  }
  > a {
    font-size: var(--font-32);
    font-weight: bold;
    color: var(--color-black);
    margin-top: 1rem;
    line-height: 1;
    display: inline-block;
    @media (max-width: 1024px) {
      font-size: var(--font-24-pt);
    }
    @media (max-width: 767px) {
      font-size: clamp(var(--font-18), 6.5vw, var(--font-24-pt));
      line-break: anywhere;
    }
  }

  @media (max-width: 1024px) {
    padding-left: 0;
    margin-top: 3rem;
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
  svg {
    transition: transform 0.25s var(--cubic);
  }
  a:hover svg {
    transform: scale(1.2);
  }
`

const HamburgerMenu = ({
  headerLinks,
  headerSocialLinks,
  aktualnyRok,
  currentPageYear,
  currentPageUrl
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
      <HamburgerMenuContainer
        tabIndex="-1"
        className={menuOpened ? "show" : undefined}
      >
        <MenuOpenedWrapper>
          <LogoRow>
            <Logo
              tabIndex={!menuOpened ? "-1" : undefined}
              onClick={() => {
                setMenuOpened(false)
              }}
              circleFillColor="white"
              aktualnyRok={aktualnyRok}
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
                let path = currentPageUrl + headerLink.linkUrl
                if(path[0] === '/' && path[1] === '/'){
                  path = path.substring(1)
                }
                if(currentPageYear !== aktualnyRok && path.includes('udzial')){
                  return null
                }

                return (
                  <li className={isLast ? "link--accent" : undefined}>
                    <Link
                      key={`${headerLink.linkText}-hamburger-variant`}
                      activeClassName="active"
                      className={isLast ? "link--accent" : undefined}
                      to={path}
                      target={isLast ? "_blank" : undefined}
                      onClick={() => setMenuOpened(false)}
                      tabIndex={!menuOpened ? "-1" : undefined}
                    >
                      {headerLink.linkText}
                    </Link>
                  </li>
                )
              })}
            </LinksColumn>
            <ContactAndPartnersColumn>
              <p>Skontaktuj się:</p>
              <a
                tabIndex={!menuOpened ? "-1" : undefined}
                href="mailto:altwork@igrzyskawolnosci.pl"
              >
                altwork@igrzyskawolnosci.pl
              </a>
              <SocialWrapper>
                {headerSocialLinks.map((headerSocialLink, i) => (
                  <li key={`${headerSocialLink.socialLink}-hamburger-variant`}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={headerSocialLink.socialLink}
                      tabIndex={!menuOpened ? "-1" : undefined}
                      aria-label='social media'
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
              {/* <PartnersWrapper>
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
              </PartnersWrapper> */}
            </ContactAndPartnersColumn>
          </MainMenuWrapper>
        </MenuOpenedWrapper>
      </HamburgerMenuContainer>
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
