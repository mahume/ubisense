import styled from "styled-components";

export const StyledHeader = styled.header`
  color: ${(props) => props.theme.palette.primary.contrastText};
  background-color: ${(props) => props.theme.palette.common.black};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
`;
