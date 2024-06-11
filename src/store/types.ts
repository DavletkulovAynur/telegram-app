import { IApi } from "../libs/api/types";
import { IAppVM } from "../view/viewModels/App/types";
import { ILocalityVM } from "../view/viewModels/Locality/types";
import {
  ILocalityRepository,
  ILocalityService,
  Locality,
} from "../data/Locality";
import { IOrderRepository, IOrderService, Order } from "../data/Order";
import { IOrderVM } from "../view/viewModels/Order/types";
import { IAnalytics } from "../libs";

export interface ILibs {
  readonly api: IApi;
  readonly analytics: IAnalytics;
}

export interface IStoreDomains {
  readonly order: Order;
  readonly locality: Locality;
}

export interface IStoreServices {
  readonly order: IOrderService;
  readonly locality: ILocalityService;
}

export interface IStoreRepositories {
  readonly order: IOrderRepository;
  readonly locality: ILocalityRepository;
}

export interface IStoreViewModels {
  readonly order: IOrderVM;
  readonly app: IAppVM;
  readonly locality: ILocalityVM;
}
