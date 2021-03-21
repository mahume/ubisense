import React, { createContext, useEffect, useState, ReactNode } from "react";
import { IData } from "@typescript/interfaces/data";
import { INITIAL_DATA } from "../constants/data";
import { enginesTestData, workstationsTestData } from "../utils/testData";

const DataContext = createContext<[IData, Function]>([INITIAL_DATA, () => {}]);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IData>(INITIAL_DATA);

  useEffect(() => {
    console.log(workstationsTestData);

    setState({
      engines: enginesTestData,
      workstations: workstationsTestData,
    });
  }, []);

  return (
    <DataContext.Provider value={[state, setState]}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
