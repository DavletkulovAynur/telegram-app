import { useMutation } from "@tanstack/react-query";
import { IAgencyOffer } from "./types";
import { addAgencyOfferApi } from "./AgencyOfferApi";

const useAgencyOffersApi = () => {
  const addAgencyOffer = useMutation({
    mutationFn: (offer: IAgencyOffer) => {
      return addAgencyOfferApi(offer);
    },
  });

  return {
    addAgencyOffer,
  };
};

export { useAgencyOffersApi };
