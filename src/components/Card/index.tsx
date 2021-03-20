import React, { FC } from "react";
import { StyledContainer } from "./index.styles";
import Header from "./Header";

interface CardProps {}

const Card: FC<CardProps> = (props: CardProps) => {
  return (
    <StyledContainer>
      <Header title="Test" />
    </StyledContainer>
  );
};

export default Card;
