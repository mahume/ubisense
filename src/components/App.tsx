import React, { useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import { StyledLayout, StyledMain } from "./App.styles";
import Card from "./Card";
// import { fetchProduct } from "../utils/api";
import { enginesTestData, workstationsTestData } from "../utils/testData";
import { IEngine, IWorkstation } from "../typescript/interfaces/data";

function App() {
  const [engines, setEngines] = useState<IEngine[]>([]);
  const [workstations, setWorkstations] = useState<IWorkstation[]>([]);

  useEffect(() => {
    // TODO: Fetch from API

    setEngines(enginesTestData);
    setWorkstations(workstationsTestData);
  }, []);

  return (
    <StyledLayout>
      <AppHeader />
      <StyledMain>
        {workstations.map((station) => {
          return <Card />;
        })}
      </StyledMain>
    </StyledLayout>
  );
}

export default App;
