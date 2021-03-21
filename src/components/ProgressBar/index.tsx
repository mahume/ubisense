import React, { FC } from "react";
import { Progress } from "./index.styles";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ value }) => {
  return <Progress max={100} value={value}></Progress>;
};

export default ProgressBar;
