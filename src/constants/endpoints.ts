import { CONSTANTS } from "./globalConstants";

export const baseUrl = CONSTANTS.isDev
  ? CONSTANTS.devBaseUrl
  : CONSTANTS.prodBaseUrl;

export enum EEndpoints {
  ORDERS = "/api/orders",
  LOCALITIES = "/api/localities",
}
