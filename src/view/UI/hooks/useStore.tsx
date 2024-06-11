import { useRouter } from "react-router5";
import { IStoreViewModels } from "../../../store/types";
import { IDependencies } from "../../../router/types";

/**
 * Возвращает хранилище целиком.
 */
export const useStore = (): IStoreViewModels => {
  return (useRouter().getDependencies() as IDependencies).store;
};
