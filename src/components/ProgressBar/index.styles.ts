import styled from "styled-components";
import theme from "../../utils/theme";

export const ProgressContainer = styled.div<{ max: number; value: number }>`
  progress[value] {
    appearance: none;
    width: ${(props) => props.value};

    ::-webkit-progress-bar {
      height: 20px;
      border-radius: 20px;
      background-color: ${(props) => props.theme.palette.common.lightGray};
    }

    ::-webkit-progress-value {
      height: 20px;
      border-radius: 20px;
      background-color: ${(props) =>
        selectProgressColor(props.value, props.max)};
    }
  }
`;

function selectProgressColor(value: number, max: number): string {
  if (value === max) {
    return theme.palette.primary.error;
  } else if (value > 70 && value < max) {
    return theme.palette.primary.warning;
  }
  return theme.palette.primary.success;
}
