import React, { FC } from "react";
import { format } from "date-fns";
import { ICurrentProduct, IEngine } from "../../../typescript/interfaces/data";
import { GridContainer, GridItem } from "./index.styles";
import DataPoint from "../DataPoint";
import ProgressBar from "../../ProgressBar";

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
      <DataPoint field="Entry Time" value={format(product.entryTime, "p")} />
      <DataPoint field="Cycle Time" value={Math.round(cycleTime)} />
      <GridItem span={2}>
        <DataPoint field="Time Elapsed" value={<ProgressBar value={60} />} />
      </GridItem>
    </GridContainer>
  );
};

export default DataSection;
