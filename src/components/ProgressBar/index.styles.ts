import styled from "styled-components";
import theme from "../../utils/theme";

export const ProgressContainer = styled.div<{ max: number; value: number }>`
  progress[value] {
    --green: green;

    appearance: none;
    width: ${(props) => props.value};

    // Chrome
    -webkit-appearance: none;
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

    // Firefox
    -moz-appearance: none;
    ::-moz-progress-bar {
      height: 20px;
      border-radius: 20px;
      background-image: -moz-linear-gradient(
          135deg,
          transparent 33%,
          rgba(0, 0, 0, 0.1) 33%,
          rgba(0, 0, 0, 0.1) 66%,
          transparent 66%
        ),
        -moz-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
        -moz-linear-gradient(left, #09c, #f44);
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
