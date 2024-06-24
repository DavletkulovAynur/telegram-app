import { DefaultDependencies, Route } from "router5/dist/types/router";
import { ILibs, IStoreViewModels } from "../store/types";
import { IOrderRequestParams } from "../data/Order";

export type IRoutes = [
  IHomeRoute,
  IOrdersRoute<IOrderRequestParams>,
  IProfileRoute,
  ISettingRoute
];

export interface IRoute<P = Record<string, string>>
  extends Route<IDependencies> {
  title?: string;
  onActivate?: (store: IStoreViewModels, params?: P) => Promise<void>;
}

export interface IDependencies extends DefaultDependencies {
  readonly store: IStoreViewModels;
  readonly routes: IRoutes;
  readonly libs: ILibs;
}

interface IHomeRoute extends IRoute {}
interface IOrdersRoute<P> extends IRoute<P> {}
interface IProfileRoute extends IRoute {}
interface ISettingRoute extends IRoute {}
