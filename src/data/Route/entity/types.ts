import { ILocalityDTO, ILocalityEntity } from "../../Locality";

/**
 * Сущность маршрута.
 */
export interface IRouteEntity {
  /**
   * Пункт отправления.
   */
  origin: ILocalityEntity;
  /**
   * Пункт назначения.
   */
  destination: ILocalityEntity;
}

export interface IRouteDTO {
  /**
   * Пункт отправления.
   */
  origin: ILocalityDTO;
  /**
   * Пункт назначения.
   */
  destination: ILocalityDTO;
}
