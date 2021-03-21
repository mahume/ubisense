import styled from "styled-components";

export const StyledHeader = styled.header`
  color: ${(props) => props.theme.palette.primary.contrastText};
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 0 2rem;
  max-height: 8rem;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;
