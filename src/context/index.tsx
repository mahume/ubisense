import React, { FC } from "react";
import theme from "../utils/theme";
import { ThemeProvider } from "styled-components";
import { DataContext, DataProvider } from "./DataContext";

const AppContext: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <DataProvider>{children}</DataProvider>
  </ThemeProvider>
);

export { AppContext, DataContext };
