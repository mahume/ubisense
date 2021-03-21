import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: ${(props) => props.theme.borderRadius.main};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    width: 750px;
  }
`;

export const EmptyBody = styled.div`
  color: ${(props) => props.theme.palette.common.black};
  font-size: 2rem;
  font-weight: 600;
  min-height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
