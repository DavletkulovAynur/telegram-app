import { IAgencyEntity, IAgencyResponseDTO } from "../../Agency";
import { IRouteEntity } from "../../Route";
import { ECurrencyISO } from "../../../constants";
import { ILocalityDTO } from "../../Locality";

export interface IOrderEntity {
  id: ID;
  agency: IAgencyEntity;
  route: IRouteEntity;
  price: number;
  currencyISO: ECurrencyISO;
}

export interface IOrderResponseDTO
  extends Omit<IOrderEntity, "route" | "agency"> {
  agency: IAgencyResponseDTO;
  origin: ILocalityDTO;
  destination: ILocalityDTO;
}

export interface IOrderRequestParams {
  originId?: ID;
  destinationId?: ID;
  originName?: string;
  destinationName?: string;
}
