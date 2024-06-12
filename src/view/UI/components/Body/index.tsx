import { FC, PropsWithChildren, useEffect } from "react";
import css from "./styles.module.scss";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useTelegram } from "../../hooks";
const Body: FC<PropsWithChildren> = ({ children }) => {
  const tg = useTelegram();

  useEffect(() => {
    if (!tg) return;
    tg.ready();

    // Настройка основной кнопки при первой загрузке
    tg.MainButton.setText("Главная");
    tg.MainButton.show();
  }, []);
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
