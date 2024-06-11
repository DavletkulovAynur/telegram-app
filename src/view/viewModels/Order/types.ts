import { IBaseVM } from "../types";
import { IOrderEntity, IOrderRequestParams } from "../../../data/Order";

export interface IOrderVM extends IBaseVM {
  orderList: IOrderEntity[] | null;

  getList: (params: IOrderRequestParams) => Promise<void>;
}
