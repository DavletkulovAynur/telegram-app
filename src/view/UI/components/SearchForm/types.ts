import { SubmitHandler } from "react-hook-form";
import { ILocalityEntity } from "../../../../data/Locality";
import { ECategories } from "../../../../libs";

/**
 * Компонент поиска маршрутов.
 */
export interface ISearchForm {
  /** Минифицированный вариант. */
  minified?: boolean;
  /** Признак загрузки. */
  loading?: boolean;
  /** Признак загрузки. */
  localitiesLoading?: boolean;
  /** Пункт отбытия. */
  origin?: ILocalityEntity;
  /** Пункт назначения. */
  destination?: ILocalityEntity;
  /** Стили. */
  className?: string;
  /** Метод поиска. */
  onSearch: SubmitHandler<IFormData>;
  /** Метод получения списка населенных пунктов. */
  localities: ILocalityEntity[] | null;
  /** Категория для ga */
  gaCategory: ECategories;
}

/**
 * Компонент формы поиска маршрута.
 */
export interface IForm extends ISearchForm {
  /** Обработчик клика по кнопке изменения маршрута в минифицированном виде. */
  onExpand: () => void;
  getLocalities: (search?: string) => void;
}

/**
 * Компонент минифицированной формы поиска маршрута.
 */
export interface IMinifiedForm
  extends Omit<ISearchForm, "onSearch" | "onGetLocalities" | "localities"> {
  /** Обработчик клика по кнопке изменения маршрута в минифицированном виде. */
  onExpand: () => void;
}

export interface IFormData {
  originId: ID;
  destinationId: ID;
  originName: string;
  destinationName: string;
}
