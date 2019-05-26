import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    background-color: #27202c;
  }
`;

export default GlobalStyle;
