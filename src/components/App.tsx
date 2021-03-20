import React, { useContext } from "react";
import { StyledLayout, StyledMain } from "./App.styles";
import { DataContext } from "../context";
import AppHeader from "./AppHeader";
import Card from "./Card";

function App() {
  const [dataContext, setDataContext] = useContext(DataContext);

  return (
    <StyledLayout>
      <AppHeader />
      <StyledMain>
        {dataContext.workstations.map((workstation) => (
          <Card key={workstation.name} workstation={workstation} />
        ))}
      </StyledMain>
    </StyledLayout>
  );
}

export default App;
