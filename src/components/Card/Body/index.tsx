import React, { FC, useContext } from "react";
import { Content } from "./index.styles";
import { DataContext } from "../../../context";
import { ICurrentProduct } from "../../../typescript/interfaces/data";
import ImageSection from "../ImageSection";
import DataSection from "../DataSection";

interface BodyProps {
  cycleTime: number;
  product: ICurrentProduct;
}

const Body: FC<BodyProps> = ({ cycleTime, product }) => {
  const [dataContext, setDataContext] = useContext(DataContext);

  const currentEngine = dataContext.engines.find(
    (engine) => engine.id === product.id
  );

  return (
    <Content>
      <ImageSection imageURL={currentEngine?.image} />
      <DataSection product={product} cycleTime={cycleTime} />
    </Content>
  );
};

export default Body;
