import { BaseRepository } from "../../BaseRepository";
import { ILocalityRepository, IQueries } from "./types";
import { EEndpoints } from "../../../constants";
import { ILocalityDTO } from "../entity";

export class LocalityRepository
  extends BaseRepository
  implements ILocalityRepository
{
  async getList(query: IQueries): Promise<ILocalityDTO[]> {
    return await this.api.get<ILocalityDTO[], IQueries>({
      endpoint: EEndpoints.LOCALITIES,
      query,
    });
  }
}
