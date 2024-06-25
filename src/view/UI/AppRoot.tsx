import { FC, StrictMode, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTelegram } from "./hooks";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { ErrorBoundary } from "./pages/errorBoundaryPage";
import Body from "./components/Body";
import App from "./App.tsx";
import { IAppInitConfig } from "./types.ts";
import { SnackbarProvider } from "./providers/SnackbarProvider/SnackbarProvider.tsx";

export const AppRoot: FC<{ themes: IAppInitConfig["themes"] }> = observer(
  ({ themes }) => {
    const { tg } = useTelegram();

    //TODO: глобально нужно проверять объект телеграм
    useEffect(() => {
      tg.ready();
    }, [tg]);

    const [lightTheme, darkTheme] = themes;

    return (
      <StrictMode>
        <ThemeProvider
          theme={tg?.colorScheme === "dark" ? darkTheme : lightTheme}
        >
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <ErrorBoundary>
              <SnackbarProvider>
                <Body>
                  <App />
                </Body>
              </SnackbarProvider>
            </ErrorBoundary>
          </StyledEngineProvider>
        </ThemeProvider>
      </StrictMode>
    );
  },
);

export default AppRoot;
