import React, { FC } from "react";
import { Container, Content } from "./index.styles";
import Header from "./Header";
import Image from "./Image";
import DataField from "./DataField";

interface CardProps {}

const Card: FC<CardProps> = (props: CardProps) => {
  return (
    <Container>
      <Header title="Test" />
      <Content>
        <Image image="image" />
        <DataField field="field" value="value" />
      </Content>
    </Container>
  );
};

export default Card;
