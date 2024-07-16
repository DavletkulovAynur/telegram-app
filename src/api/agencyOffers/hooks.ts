import { useMutation } from "@tanstack/react-query";
import { IAgencyOffer } from "./types";
import { addAgencyOfferApi } from "./AgencyOfferApi";
import { useSnackbar } from "@/view/UI/providers/SnackbarProvider";

const useAgencyOffersApi = () => {
  const { showSnackbar } = useSnackbar();
  const addAgencyOffer = useMutation({
    mutationFn: (offer: IAgencyOffer) => {
      return addAgencyOfferApi(offer);
    },
    onSuccess: () => {
      showSnackbar('Ваша заявка принята', 'success');
    },
    onError: () => {
      showSnackbar('Произошла ошибка', 'error');
    }
  });

  return {
    addAgencyOffer,
  };
};

export { useAgencyOffersApi };
