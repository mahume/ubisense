import React from "react";
import Header from "./Header";
import { StyledLayout, StyledMain } from "./App.styles";

function App() {
  return (
    <StyledLayout>
      <Header title="Work Stations" />
      <StyledMain>Test</StyledMain>
    </StyledLayout>
  );
}

export default App;
