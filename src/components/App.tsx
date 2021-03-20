import React from "react";
import AppHeader from "./AppHeader";
import { StyledLayout, StyledMain } from "./App.styles";

function App() {
  return (
    <StyledLayout>
      <AppHeader />
      <StyledMain>Test</StyledMain>
    </StyledLayout>
  );
}

export default App;
