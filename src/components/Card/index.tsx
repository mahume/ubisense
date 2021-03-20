import React, { FC } from "react";
import { Container } from "./index.styles";
import { IWorkstation } from "../../typescript/interfaces/data";
import Header from "./Header";
import Body from "./Body";

interface CardProps {
  workstation: IWorkstation;
}

const Card: FC<CardProps> = ({ workstation }) => {
  const { cycleTimeHrs, currentProduct } = workstation;
  // const currentEngine: IEngine =
  //   dataContext.engines[workstation.currentProduct?.id];

  return (
    <Container>
      <Header title={workstation.name} />
      {currentProduct === null ? (
        <span>No Product</span>
      ) : (
        <Body cycleTime={cycleTimeHrs} product={currentProduct} />
      )}
    </Container>
  );
};

export default Card;
