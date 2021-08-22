import { createGlobalStyle, css } from 'styled-components';

import * as fonts from './fonts';

export default createGlobalStyle`
  ${fonts.SFProText}
  ${fonts.SFProDisplay}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    :before,
    :after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 16px;
    }

    body {
      background: #fffcf9;
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.normal};
    }

    img {
      max-width: 100%;
    }
  `}
`;
