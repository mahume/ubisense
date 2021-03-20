import React, { useContext } from "react";
import { Layout, Main } from "./App.styles";
import { DataContext } from "../context";
import AppHeader from "./AppHeader";
import Card from "./Card";

function App() {
  const [dataContext, setDataContext] = useContext(DataContext);

  return (
    <Layout>
      <AppHeader />
      <Main>
        {dataContext.workstations.map((workstation) => (
          <Card key={workstation.name} workstation={workstation} />
        ))}
      </Main>
    </Layout>
  );
}

export default App;
