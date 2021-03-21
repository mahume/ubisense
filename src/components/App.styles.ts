import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  html {
    --maxWidth: 1000px;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    line-height:2;
  }
  h1 {
    line-height: 46.5px;
    font-size: 36px;
    font-weight: 600;
  }
  h2 {
    line-height: 32px;
    font-size: 24px;
    font-weight: 600;
  }
  h3 {
    margin: 0;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
  }
  p {
    margin: 0;
    line-height: 32px;
    font-size: 24px;
    font-weight: 600px;
  }
`;

export const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const AppGrid = styled.main`
  background-color: ${(props) => props.theme.palette.common.lightGray};
  padding: 2rem;

  flex-grow: 1;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;
  justify-items: center;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(750px, 1fr));
  }
`;
