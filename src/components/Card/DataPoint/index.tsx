import React, { FC } from "react";
import { DataLabel, DataValue } from "./index.styles";

interface DataPointProps {
  field: string;
  value: string | number | Date;
}

const DataPoint: FC<DataPointProps> = ({ field, value }) => {
  return (
    <div>
      <DataLabel>{field}</DataLabel>
      <DataValue>{value}</DataValue>
    </div>
  );
};

export default DataPoint;
