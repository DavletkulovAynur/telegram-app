import {
  IAnalytics,
  IClickParams,
  IConstructor,
  IPageViewParams,
} from "./types";
import ReactGA from "react-ga4";
import { GA4 } from "react-ga4/types/ga4";

export class Analytics implements IAnalytics {
  private lib: GA4 | null = null;

  constructor({ trackingId, testMode = false }: IConstructor) {
    if (trackingId) {
      this.lib = ReactGA;
      this.lib.initialize(trackingId, { testMode });
    } else {
      console.error(
        "Analytics library is not initialized. Require trackingId.",
      );
    }
  }

  pageView = ({ path, ...params }: IPageViewParams) => {
    this.lib?.send({
      page: path,
      hitType: "pageview",
      ...params,
    });
  };

  click = ({ label, action = "click", category, ...params }: IClickParams) => {
    this.lib?.event({
      category,
      action,
      label,
      ...params,
    });
  };
}

export const analytics = new Analytics({ trackingId: "G-BPJ2YSHVPP" });
