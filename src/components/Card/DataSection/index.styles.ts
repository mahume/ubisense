import styled from "styled-components";
import DataPoint from "../DataPoint";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
`;

export const StyledDataPoint = styled(DataPoint)`
  grid-column-start: 1;
  grid-column-end: 3;
`;
