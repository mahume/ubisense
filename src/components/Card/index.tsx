import React, { FC, useContext } from "react";
import { Container, Content } from "./index.styles";
import { IWorkstation } from "../../typescript/interfaces/data";
import { DataContext } from "../../context";
import Header from "./Header";
import Image from "./Image";
import DataField from "./DataField";

interface CardProps {
  workstation: IWorkstation;
}

const Card: FC<CardProps> = ({ workstation }) => {
  const { name, cycleTimeHrs, currentProduct } = workstation;

  const [dataContext, setDataContext] = useContext(DataContext);

  return (
    <Container>
      <Header title={name} />
      <Content>
        {!currentProduct ? (
          <span>No Product</span>
        ) : (
          <>
            <Image image="image" />
            <DataField field="Cycle Time" value={Math.round(cycleTimeHrs)} />
            <DataField field="Entry Time" value={currentProduct.entryTime} />
          </>
        )}
      </Content>
    </Container>
  );
};

export default Card;
