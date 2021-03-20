import "styled-components";

interface IPalette {
  main: string;
  success: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
        gray: string;
      };
      primary: IPalette;
    };
    borderRadius: {
      main: string;
    };
  }
}
