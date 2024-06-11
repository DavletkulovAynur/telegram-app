import { ILocalityEntity } from "../entity";
import { IQueries } from "../repository/types";

export interface ILocalityService {
  getList: (query: IQueries) => Promise<ILocalityEntity[]>;
}
