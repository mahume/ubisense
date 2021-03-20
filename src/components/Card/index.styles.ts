import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 400px;
  height: 200px;
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: ${(props) => props.theme.borderRadius.main};
`;
