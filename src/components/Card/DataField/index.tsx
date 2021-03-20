import React, { FC } from "react";
import { StyledField, StyledValue } from "./index.styles";

interface DataFieldProps {
  field: string;
  value: string | number;
}

const DataField: FC<DataFieldProps> = ({ field, value }) => {
  return (
    <div>
      <StyledField>{field}</StyledField>
      <StyledValue>{value}</StyledValue>
    </div>
  );
};

export default DataField;
