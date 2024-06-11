import { useAnalytics } from "../../hooks";
import { ECategories } from "../../../../libs";

export const useChipAnalytics = () => {
  const analytics = useAnalytics();

  const event = () => {
    analytics.click({
      category: ECategories.ORDERS,
      label: "add agency click",
    });
  };

  return { event };
};
