import base from "../base";
import { IAgencyOffer } from "./types";

export const addAgencyOfferApi = async (
  newOffer: IAgencyOffer,
): Promise<void> => {
  return await base.post("/agencyOffers", newOffer);
};
