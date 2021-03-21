import React, { FC } from "react";
import { ProgressContainer } from "./index.styles";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ value }) => {
  const maxValue = 100;
  return (
    <ProgressContainer max={maxValue} value={value}>
      <progress max={maxValue} value={value}></progress>
    </ProgressContainer>
  );
};

export default ProgressBar;
