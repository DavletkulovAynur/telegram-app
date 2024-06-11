import { MiddlewareFactory } from "router5/dist/types/router";
import { IDependencies, IRoute } from "../types";
import { getRouteByToStateName } from "./utils";
import { setDocumentTitle } from "../../libs/utils";

/**
 * Плагин синхронно меняет заголовок документа.
 * Для асинхронной или отложенной замены используйте onActivate в src/router/routes.ts.
 *
 * @param _
 * @param dependencies
 */
export const documentTitle: MiddlewareFactory<IDependencies> =
  (_, dependencies) =>
  (toState): boolean => {
    const route: IRoute | undefined = getRouteByToStateName(
      toState.name,
      dependencies,
    );

    setDocumentTitle(route?.title);

    return true;
  };
