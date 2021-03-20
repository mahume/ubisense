import React from "react";
import AppHeader from "./AppHeader";
import { StyledLayout, StyledMain } from "./App.styles";
import Card from "./Card";

function App() {
  return (
    <StyledLayout>
      <AppHeader />
      <StyledMain>
        <Card />
      </StyledMain>
    </StyledLayout>
  );
}

export default App;
