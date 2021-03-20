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

interface ICurrentProduct {
  id: string;
  entryTime: number;
}
