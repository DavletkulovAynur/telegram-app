import { FC, PropsWithChildren } from "react";
import css from "./styles.module.scss";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
const Body: FC<PropsWithChildren> = ({ children }) => {
  // const { theme, setTheme } = useChangeTheme();

  // const handleChangeTheme = () => {
  //   // changeThemeEvent();
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  return (
    <div className={css.bodyWrapper}>
      <header className={css.header}>
        <div className={css.iconWrap}>
          <SettingsOutlinedIcon fontSize="medium" />
        </div>

        <div className={css.iconWrap}>
          <Person2OutlinedIcon fontSize="medium" />
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Body;
