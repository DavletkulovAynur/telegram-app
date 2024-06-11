import { ILocalityDTO } from "../entity";

export interface ILocalityRepository {
  getList: (query: IQueries) => Promise<ILocalityDTO[]>;
}

export interface IQueries {
  search: string;
}
