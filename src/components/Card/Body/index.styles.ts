import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    flex-grow: 1;
  }
`;
