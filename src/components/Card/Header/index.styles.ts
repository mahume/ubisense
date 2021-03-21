import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 61px;
  color: ${(props) => props.theme.palette.primary.contrastText};
  background-color: ${(props) => props.theme.palette.common.black};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;
