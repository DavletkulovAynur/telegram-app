import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTelegram } from "../../hooks";
import { useRouter } from "react-router5";
import { ERouteNames } from "../../../../router/routes";
import { Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import css from "./styles.module.scss";

const Setting: FC = observer(() => {
  const { tg, isTelegramExist } = useTelegram();
  const { navigate } = useRouter();

  const goToMainPage = () => {
    navigate(ERouteNames.HOME);
  };
  useEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(() => {
      goToMainPage();
      tg.BackButton.hide();
    });
  }, []);

  return (
    <div className={css.container}>
      {!isTelegramExist && (
        <Button
          onClick={goToMainPage}
          variant="text"
          color="secondary"
          startIcon={<NavigateBeforeIcon />}
        >
          Назад
        </Button>
      )}
      <div className={css.headerTitle}>Настройки</div>
      <div className={css.content}>
        <div className={css.imgWrap}>
          <img src="https://i.gifer.com/2GU.gif" className={css.img} />
        </div>

        <div className={css.title}>В процессе обновления</div>
        <div className={css.description}>
          Наша команда трудится не покладая рук, чтобы сделать эту страницу
          незабываемой.
        </div>
      </div>
    </div>
  );
});

export default Setting;
