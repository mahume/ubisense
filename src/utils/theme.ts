import { IDefaultTheme } from "../typescript/interfaces/styles";

const theme: IDefaultTheme = {
  palette: {
    common: {
      black: "hsl(221, 40%, 11%)",
      white: "hsl(99, 100%, 100%)",
      lightGray: "hsl(105, 0%, 90%)",
      darkGray: "hsl(220, 9%, 46%)",
    },
    primary: {
      main: "hsl(225, 64%, 33%)",
      success: "hsl(161, 94%, 30%)",
      warning: "hsl(53, 95%, 50%)",
      error: "hsl(0, 100%, 63%)",
      contrastText: "hsl(99, 100%, 100%)",
    },
  },
  borderRadius: {
    main: "1rem",
  },
};

export default theme;
