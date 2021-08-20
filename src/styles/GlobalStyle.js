import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
      box-sizing: border-box;
    }

  body {
      background-color: #ffffff;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    }

  a {
      color: inherit;
      text-decoration: none;
    }

  input,
  button {
      background-color: transparent;
      border: none;
      outline: none;
    }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-family: 'Maven Pro', sans-serif;
    }

  ol,
  ul,
  li {
      list-style: none;
    }

  img {
      display: block;
      width: 100%;
      height: 100%;
    }

  @import url('https://fonts.googleapis.com/css2?family=Allison&family=Bungee&family=Hammersmith+One&family=Gloria+Hallelujah&family=Hanalei&family=Kaushan+Script&family=Monoton&family=Permanent+Marker&family=Karla:wght@200&family=Rampart+One&family=Rock+Salt&family=Shadows+Into+Light&family=Archivo+Black&Archivo:wght@100&family=Style+Script&family=Tourney:ital,wght@0,100;1,100&display=swap');



`;

export default GlobalStyle;
