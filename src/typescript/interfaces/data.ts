export interface IData {
  engines: IEngine[];
  workstations: IWorkstation[];
}

export interface IEngine {
  id: string;
  serialNumber: string;
  model: string;
  image: string;
}

export interface IWorkstation {
  name: string;
  cycleTimeHrs: number;
  currentProduct: ICurrentProduct | null;
}

export interface ICurrentProduct {
  id: string;
  entryTime: number;
}
