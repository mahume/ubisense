import styled from "styled-components";

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
