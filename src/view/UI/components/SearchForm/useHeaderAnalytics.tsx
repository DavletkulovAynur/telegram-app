import { useAnalytics } from "../../hooks";
import { ECategories } from "../../../../libs";

export const useSearchAnalytics = (gaCategory: ECategories) => {
  const analytics = useAnalytics();

  const setMinifiedEvent = (isMinified: boolean) => {
    analytics.click({
      label: isMinified ? "expand search form" : "minify search form",
      category: gaCategory,
    });
  };

  const searchEvent = () => {
    analytics.click({
      label: "search click",
      category: gaCategory,
    });
  };

  return { setMinifiedEvent, searchEvent };
};
