import { createGlobalStyle } from 'styled-components';
import bg from '../assets/background.png';

const global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Courier Prime', monospace, sans-serif;
    box-sizing: border-box;
    font-size: 1.6rem;
    list-style: none;
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    border: none;
    background: #fff;
  }

  input {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 968px) {
      font-size: 9px;
    }

    @media (max-width: 768px) {
      font-size: 8px;
    }

    @media (max-width: 468px) {
      font-size: 7px;
    }

    @media (max-width: 268px) {
      font-size: 6px;
    }
  }

  body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    max-width: 100vw;
    height: 100%;
    background-size: cover;
    background-image: url(${bg.src});
  }
`;

export default global;
