import { IOrderRepository } from "./types";
import { BaseRepository } from "../../BaseRepository";
import { IOrderRequestParams, IOrderResponseDTO } from "../entity/types";
import { EEndpoints } from "../../../constants";

export class OrderRepository
  extends BaseRepository
  implements IOrderRepository
{
  async getOrderList(
    params: IOrderRequestParams,
  ): Promise<IOrderResponseDTO[]> {
    console.log("params", params);
    return await this.api.get<IOrderResponseDTO[], IOrderRequestParams>({
      endpoint: EEndpoints.ORDERS,
      query: params,
    });
  }
}
