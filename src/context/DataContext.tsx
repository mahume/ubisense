import React, { createContext, useEffect, useState, ReactNode } from "react";
import { IData } from "../typescript/interfaces/data";
import { INITIAL_DATA } from "../constants/data";

const DataContext = createContext<[IData, Function]>([INITIAL_DATA, () => {}]);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IData>(INITIAL_DATA);

  const handleFetch = async () => {
    const enginesEndpoint = `https://ubisense-takehome-api.netlify.app/.netlify/functions/engines`;
    const workstationsEndpoint = `https://ubisense-takehome-api.netlify.app/.netlify/functions/workstations`;

    const reqOptions = {
      headers: new Headers({
        method: "GET",
      }),
    };

    const enginesResponse = await fetch(enginesEndpoint, reqOptions);
    const engines = await enginesResponse.json();

    const workstationsResponse = await fetch(workstationsEndpoint, reqOptions);
    const workstations = await workstationsResponse.json();

    setState({
      ...state,
      engines,
      workstations,
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <DataContext.Provider value={[state, setState]}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
