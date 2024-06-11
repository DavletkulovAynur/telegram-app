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

export interface IFormData {
  originId: ID;
  destinationId: ID;
}

export interface IMobileFormProps {
  localities: ILocalityEntity[] | null;
  getList: (value?: string) => void;
  loading: boolean;
  onSearch: (data: IFormData) => void;
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
  toggleLocationLayer: (a: TPoint) => void;
  typePoint: TYPE_POINT;
  pointName: string | null;
  ID: ID;
  placeholderHTML: POINT_PLACEHOLDER;
  error: unknown;
}

export interface ILocalities {
  localities: ILocalityEntity[];
  setLocation: (locality: ILocalityEntity) => void;
}
