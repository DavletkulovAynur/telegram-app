import { Router } from "router5/dist/types/router";
import { IDependencies } from "../../router/types.ts";
import { Theme } from "@mui/material/styles/createTheme";

export type IAppInitConfig = {
  router: Router<IDependencies>;
  themes: [lightTheme: Theme, darkTheme: Theme];
};
