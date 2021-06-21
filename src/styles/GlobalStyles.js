import { createGlobalStyle } from "styled-components"
import font from "../fonts/Diagramm-Regular.woff"
import fontBold from "../fonts/Diagramm-Bold.woff"

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: Diagramm;
      src: url(${font});
    }
    @font-face {
      font-family: Diagramm;
      src: url(${fontBold});
      font-weight: bold;
    }
    *, * + * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    #___gatsby {
      overflow: hidden;
    }

    html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      --color-black: #000;
      --color-white: #fff;
      --color-accent: #03DF07;
      --color-accent-circle: #02E745;
      --color-gray: #707070;

      --font-18: 1.13rem;
      --font-20: 1.25rem;
      --font-24: 1.5rem;
      --font-28: 1.75rem;
      --font-32: 2rem;
      --font-40: 2.5rem;
      --font-50: 3.13rem;
      --font-60: 3.75rem;
      --font-64: 4rem;
      --font-80: clamp(3.67rem, 5.857vw, 5rem);
      @media (max-width: 767px) {
        --font-80: clamp(40px, 7vw, 80px);
      }
      --font-18-pt: var(--font-24);
      --font-24-pt: var(--font-32);
      --font-28-pt: 2.33rem;
      --font-32-pt: 2.67rem;
      @media (max-width: 767px) {
        --font-32-pt: clamp(1.8rem, 12vw, 2.67rem);
      }
      --font-40-pt: 3.33rem;
      --font-45-pt: 3.75rem;

      --content-max-width-desktop: 85.38rem;
      --content-max-width-mobile: 23.44rem;
    }
    body {
      font-family: Poppins, sans-serif;
      color: var(--color-black);
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      &:focus-visible {
        outline-offset: 0.25rem;
        outline: 0.125rem solid var(--color-black);
      }
    }

    .Collapse {
      background: none;
      border: 2px solid black;
      padding: 20px 10px;
      cursor: pointer;
      margin-bottom: 40px;
    }
    .Collapse_Content {
      min-height: 0;
      height: 0;

      overflow: hidden;
    }
    .Collapse_Content > div {
      padding-top: 20px;
      text-align: left;
    }

    html.has-scroll-smooth {
      overflow: hidden;
    }

    html.has-scroll-dragging {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .has-scroll-smooth body {
      overflow: hidden;
    }

    /* Specifying the scroll container manually */
    .has-scroll-smooth #___gatsby,
    .has-scroll-smooth [data-scroll-container] {
      min-height: 100vh;
    }

    .c-scrollbar {
      position: absolute;
      right: 0;
      top: 0;
      width: 11px;
      height: 100vh;
      transform-origin: center right;
      transition: transform 0.3s, opacity 0.3s;
      opacity: 0;
    }
    .c-scrollbar:hover {
      transform: scaleX(1.45);
    }
    .c-scrollbar:hover,
    .has-scroll-scrolling .c-scrollbar,
    .has-scroll-dragging .c-scrollbar {
      opacity: 1;
    }

    .c-scrollbar_thumb {
      position: absolute;
      top: 0;
      right: 0;
      background-color: black;
      opacity: 0.5;
      width: 7px;
      border-radius: 10px;
      margin: 2px;
      cursor: -webkit-grab;
      cursor: grab;
    }
    .has-scroll-dragging .c-scrollbar_thumb {
      cursor: -webkit-grabbing;
      cursor: grabbing;
    }
`

export default GlobalStyles
