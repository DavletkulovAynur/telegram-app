import { FC } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { IAppBar } from "./types";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import css from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { useHeaderAnalytics } from "./useHeaderAnalytics";
import { useChangeTheme } from "../../hooks";

export const AppBarID = "app-bar";

export const Header: FC<IAppBar> = ({ onGoHome }) => {
  const { changeThemeEvent, goHomeEvent } = useHeaderAnalytics();
  const { theme, setTheme } = useChangeTheme();

  const handleChangeTheme = () => {
    changeThemeEvent();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleGoHome = () => {
    goHomeEvent();
    onGoHome();
  };

  return (
    <AppBar id={AppBarID}>
      <Toolbar className={css.toolbar}>
        <IconButton onClick={handleGoHome} className={css.logoButton}>
          <img height={40} width={40} src={logo} alt="logo" />
        </IconButton>

        <IconButton onClick={handleChangeTheme}>
          {theme === "dark" ? (
            <LightModeRoundedIcon />
          ) : (
            <NightsStayRoundedIcon color="action" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
