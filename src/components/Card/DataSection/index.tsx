import React, { FC } from "react";
import { ICurrentProduct, IEngine } from "../../../typescript/interfaces/data";
import { GridContainer, StyledDataPoint } from "./index.styles";
import DataPoint from "../DataPoint";

interface DataSectionProps {
  product: ICurrentProduct;
  cycleTime: number;
  engine: IEngine | undefined;
}

const DataSection: FC<DataSectionProps> = ({ product, cycleTime, engine }) => {
  return (
    <GridContainer>
      <DataPoint field="Serial Number" value={engine?.serialNumber || "N/A"} />
      <DataPoint field="Model" value={engine?.model || "N/A"} />
      <DataPoint field="Cycle Time" value={Math.round(cycleTime)} />
      <DataPoint field="Entry Time" value={formatDate(product.entryTime)} />
      <StyledDataPoint field="Time Elapsed" value={100} />
    </GridContainer>
  );
};

function formatDate(milliseconds: number) {
  const dateObject = new Date(milliseconds);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  console.log({
    hours,
    minutes,
  });
}

export default DataSection;
