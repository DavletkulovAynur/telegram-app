import { FC, StrictMode } from "react";
import { observer } from "mobx-react-lite";
// import { useRouter } from "react-router5";
import { useChangeTheme } from "./hooks";
// import { ERouteNames } from "../../router/routes.ts";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { ErrorBoundary } from "./pages/errorBoundaryPage";
// import { Header } from "./components/Header";
import Body from "./components/Body";
import App from "./App.tsx";
import { IAppInitConfig } from "./types.ts";

export const AppRoot: FC<{ themes: IAppInitConfig["themes"] }> = observer(
  ({ themes }) => {
    const [lightTheme, darkTheme] = themes;
    // const { navigate } = useRouter();
    const { theme } = useChangeTheme();

    // const handleGoHome = () => {
    //   navigate(ERouteNames.HOME);
    // };

    return (
      <StrictMode>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <ErrorBoundary>
              {/* <Header onGoHome={handleGoHome} /> */}
              <Body>
                <App />
              </Body>
            </ErrorBoundary>
          </StyledEngineProvider>
        </ThemeProvider>
      </StrictMode>
    );
  },
);

export default AppRoot;
