import React, { FC } from "react";
import { ICurrentProduct } from "../../../typescript/interfaces/data";
import { Container } from "./index.styles";
import DataField from "../DataField";

interface DataSectionProps {
  product: ICurrentProduct;
  cycleTime: number;
}

const DataSection: FC<DataSectionProps> = ({ product, cycleTime }) => {
  return (
    <Container>
      <DataField field="Cycle Time" value={Math.round(cycleTime)} />
      <DataField field="Entry Time" value={product.entryTime} />
    </Container>
  );
};

export default DataSection;
