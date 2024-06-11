import { FC, PropsWithChildren } from "react";
import css from "./styles.module.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { IconButton } from "@mui/material";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import { useChangeTheme } from "../../hooks";

const Body: FC<PropsWithChildren> = ({ children }) => {
  const { theme, setTheme } = useChangeTheme();

  const handleChangeTheme = () => {
    // changeThemeEvent();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={css.bodyWrapper}>
      <header className={css.header}>
        <SettingsIcon fontSize="large" />
        <IconButton onClick={handleChangeTheme}>
          {theme === "dark" ? (
            <LightModeRoundedIcon />
          ) : (
            <NightsStayRoundedIcon color="action" />
          )}
        </IconButton>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Body;
