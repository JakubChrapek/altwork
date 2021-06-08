import { createGlobalStyle } from "styled-components"
import "./typography.scss"

const GlobalStyles = createGlobalStyle`
    *, * + * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      font-family: "Diagramm", sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      --color-black: #000;
      --color-white: #fff;
      --color-accent: #03DF07;
      --color-accent-circle: #02E745;
      --color-gray: #707070;
    }
    body {
      font-family: "Diagramm", sans-serif;
      color: var(--color-black);
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html[data-direction="down"] .header {
      transform: translateY(-100%);
    }
    h1 {
      font-family: "Diagramm", sans-serif;
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
