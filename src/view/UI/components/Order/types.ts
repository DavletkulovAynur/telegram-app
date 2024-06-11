import { IOrderEntity } from "../../../../data/Order";

export interface IOrderProps extends Pick<IOrderEntity, "agency" | "price"> {}
