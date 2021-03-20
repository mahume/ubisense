import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  palette: {
    common: {
      black: "hsl(221, 40%, 11%)",
      white: "hsl(99, 100%, 100%)",
      gray: "hsl(220, 9%, 46%)",
    },
    primary: {
      main: "hsl(225, 64%, 33%)",
      success: "hsl(161, 94%, 30%)",
      contrastText: "hsl(99, 100%, 100%)",
    },
  },
  borderRadius: {
    main: "1rem",
  },
};

export default theme;
