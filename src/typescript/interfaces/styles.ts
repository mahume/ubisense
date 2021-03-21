interface IPalette {
  main: string;
  success: string;
  warning: string;
  error: string;
  contrastText: string;
}

export interface IDefaultTheme {
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
