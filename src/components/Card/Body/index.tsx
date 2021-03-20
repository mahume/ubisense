import React, { FC, useContext } from "react";
import { Content } from "./index.styles";
import { DataContext } from "../../../context";
import { ICurrentProduct, IEngine } from "../../../typescript/interfaces/data";
import Image from "../Image";
import DataField from "../DataField";

interface BodyProps {
  cycleTime: number;
  product: ICurrentProduct;
}

const Body: FC<BodyProps> = ({ cycleTime, product }) => {
  const [dataContext, setDataContext] = useContext(DataContext);

  console.log(dataContext.engines);
  console.log(product?.id);
  // console.log(dataContext.engines[product.id]);

  const currentEngine = dataContext.engines.find(
    (engine) => engine.id === product.id
  );

  return (
    <Content>
      <Image imageURL={currentEngine?.image} />
      <DataField field="Cycle Time" value={Math.round(cycleTime)} />
      <DataField field="Entry Time" value={product.entryTime} />
    </Content>
  );
};

export default Body;
