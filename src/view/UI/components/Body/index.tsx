import { FC, PropsWithChildren, useEffect } from "react";
import css from "./styles.module.scss";
import { useTelegram } from "../../hooks";
const Body: FC<PropsWithChildren> = ({ children }) => {
  //FIXME: вынести глобально
  const tg = useTelegram();
  useEffect(() => {
    if (!tg) return;
    tg.ready();

    tg.setHeaderColor(tg.themeParams.secondary_bg_color as string);
  }, []);
  return (
    <div className={css.bodyWrapper}>
      <div>{children}</div>
    </div>
  );
};

export default Body;
