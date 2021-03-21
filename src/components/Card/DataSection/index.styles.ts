import styled from "styled-components";

export const GridContainer = styled.div`
  width: 400px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
`;

export const GridItem = styled.div<{ span: number }>`
  grid-column-start: 1;
  grid-column-end: ${(props) => 1 + props.span};
`;
