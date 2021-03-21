import React, { useContext } from "react";
import { AppLayout, AppGrid } from "./App.styles";
import { DataContext } from "../context";
import AppHeader from "./AppHeader";
import Card from "./Card";

function App() {
  const [dataContext, setDataContext] = useContext(DataContext);

  return (
    <AppLayout>
      <AppHeader />
      <AppGrid>
        {dataContext.workstations.map((workstation) => (
          <Card key={workstation.name} workstation={workstation} />
        ))}
      </AppGrid>
    </AppLayout>
  );
}

export default App;
