import { ILocalityEntity } from "../../../../data/Locality";

export enum TYPE_POINT {
  origin = "origin",
  destination = "destination",
}

export enum POINT_PLACEHOLDER {
  origin = "Откуда",
  destination = "Куда",
}

export type TPoint = TYPE_POINT.destination | TYPE_POINT.origin;

export type TFormDataPoint = {
  id: ID | null;
  name: string | null;
};
export interface IFormData {
  origin: TFormDataPoint;
  destination: TFormDataPoint;
}

export type TSearchLocalityParams = {
  originId: ID;
  destinationId: ID;
};

export interface IMobileFormProps {
  localities: ILocalityEntity[] | null;
  getList: (value?: string) => void;
  loading: boolean;
  onSearch: (data: TSearchLocalityParams) => void;
}

export interface ISearchLocality {
  label: string;
  isOpen: boolean;
  closeInputLayer: () => void;
  setLocation: (locality: ILocalityEntity) => void;
  from: string | null;
  searchLocality: (event: React.ChangeEvent<HTMLInputElement>) => void;
  localities: ILocalityEntity[] | null;
  loading: boolean;
}

export interface IFormLocalityName {
  openModal: (a: TPoint) => void;
  typePoint: TYPE_POINT;
  pointName: string | null;
  ID: ID;
  placeholderHTML: POINT_PLACEHOLDER;
}

export interface ILocalities {
  localities: ILocalityEntity[];
  setLocation: (locality: ILocalityEntity) => void;
}
