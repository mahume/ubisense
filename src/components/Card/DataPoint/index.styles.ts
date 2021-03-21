import styled from "styled-components";

export const DataField = styled.div``;

export const DataLabel = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.palette.common.darkGray};
`;

export const DataValue = styled.p`
  color: ${(props) => props.theme.palette.common.black};
  font-size: 2rem;
  font-weight: 600;
`;
