import { useRouter } from "react-router5";
import { IAnalytics } from "../../../libs";
import { IDependencies } from "../../../router/types";

/**
 * Возвращает библиотеку аналитики.
 */
export const useAnalytics = (): IAnalytics => {
  return (useRouter().getDependencies() as IDependencies).libs.analytics;
};
