import { createGlobalStyle } from 'styled-components';

const getThemeColor = (colorKey) => ({ theme }) => theme.colors[colorKey];

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.body};
    background-color: ${getThemeColor('background')};
    color: ${getThemeColor('text')};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    padding: 0;
  }
`;

export default GlobalStyles;
