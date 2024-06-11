import { ECategories } from "./enums";

export interface IClickParams {
  category: ECategories;
  label: string;
  action?: string;
  value?: number;
  nonInteraction?: boolean;
}

export interface IPageViewParams {
  path: string;
  title?: string;
}

export interface IConstructor {
  trackingId?: string;
  testMode?: boolean;
}

export interface IAnalytics {
  readonly pageView: (params: IPageViewParams) => void;
  readonly click: (params: IClickParams) => void;
}
