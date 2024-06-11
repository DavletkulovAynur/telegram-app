import { useAnalytics } from "../../hooks";
import { ECategories } from "../../../../libs";

export const useHeaderAnalytics = () => {
  const analytics = useAnalytics();

  const changeThemeEvent = () => {
    analytics.click({
      category: ECategories.HEADER,
      label: "change theme",
    });
  };

  const goHomeEvent = () => {
    analytics.click({
      category: ECategories.HEADER,
      label: "click on logo",
    });
  };

  return { changeThemeEvent, goHomeEvent };
};
