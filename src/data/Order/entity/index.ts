import { makeAutoObservable } from "mobx";
import { IOrderEntity, IOrderResponseDTO } from "./types";
import { Agency, IAgencyEntity } from "../../Agency";
import { Route, IRouteEntity } from "../../Route";
import { ECurrencyISO } from "../../../constants";

export class Order implements IOrderEntity {
  id: ID;
  agency: IAgencyEntity;
  currencyISO: ECurrencyISO;
  route: IRouteEntity;
  price: number;

  constructor(dto: IOrderResponseDTO) {
    this.id = dto.id;
    this.agency = new Agency(dto.agency);
    this.route = new Route({
      origin: dto.origin,
      destination: dto.destination,
    });
    this.currencyISO = dto.currencyISO;
    this.price = dto.price;

    makeAutoObservable(this);
  }
}
