import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  @media screen and (min-width: 769px) {
    width: 50%;
  }
`;

export const GridItem = styled.div<{ span: number }>`
  grid-column-start: 1;
  grid-column-end: ${(props) => 1 + props.span};
`;
