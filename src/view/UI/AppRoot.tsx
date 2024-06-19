import { FC, StrictMode } from "react";
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

export const AppRoot: FC<{ themes: IAppInitConfig["themes"] }> = observer(
  ({ themes }) => {
    const tg = useTelegram();

    const [lightTheme, darkTheme] = themes;

    return (
      <StrictMode>
        <ThemeProvider
          theme={tg?.colorScheme === "dark" ? darkTheme : lightTheme}
        >
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <ErrorBoundary>
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
