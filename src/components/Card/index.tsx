import React, { FC } from "react";
import { Container, EmptyBody } from "./index.styles";
import { IWorkstation } from "@typescript/interfaces/data";
import Header from "./Header";
import Body from "./Body";

interface CardProps {
  workstation: IWorkstation;
}

const Card: FC<CardProps> = ({ workstation }) => {
  const { cycleTimeHrs, currentProduct } = workstation;

  return (
    <Container>
      <Header title={workstation.name} />
      {currentProduct === null ? (
        <EmptyBody>No Product</EmptyBody>
      ) : (
        <Body cycleTime={cycleTimeHrs} product={currentProduct} />
      )}
    </Container>
  );
};

export default Card;
