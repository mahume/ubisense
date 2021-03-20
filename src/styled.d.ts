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
        lightGray: string;
        darkGray: string;
      };
      primary: IPalette;
    };
    borderRadius: {
      main: string;
    };
  }
}
