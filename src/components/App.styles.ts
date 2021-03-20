import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  background-color: ${(props) => props.theme.palette.common.lightGray};
  padding: 2rem;

  flex-grow: 1;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
`;
