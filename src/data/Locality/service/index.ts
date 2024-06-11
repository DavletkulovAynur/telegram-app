import { ILocalityService } from "./types";
import { ILocalityRepository, IQueries } from "../repository/types";
import { ILocalityEntity } from "../entity";
import { Locality } from "../entity";

export class LocalityService implements ILocalityService {
  constructor(private repository: ILocalityRepository) {}

  getList = async (query: IQueries): Promise<ILocalityEntity[]> => {
    const localities = await this.repository.getList(query);

    return localities.map((locality) => new Locality(locality));
  };
}
