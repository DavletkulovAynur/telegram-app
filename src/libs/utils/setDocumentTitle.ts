import { CONSTANTS } from "../../constants";

export const setDocumentTitle = (title?: string): void => {
  if (title) {
    document.title = `${CONSTANTS.shortProjectName}: ${title}`;
    return;
  }

  document.title = CONSTANTS.projectName;
};
