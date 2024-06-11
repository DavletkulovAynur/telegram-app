import { IOrderRequestParams, IOrderResponseDTO } from "../entity/types";

export interface IOrderRepository {
  getOrderList: (params: IOrderRequestParams) => Promise<IOrderResponseDTO[]>;
}
