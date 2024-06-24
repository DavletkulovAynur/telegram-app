import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTelegram } from "../../hooks";
import { useRouter } from "react-router5";
import { ERouteNames } from "../../../../router/routes";
import { Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import css from "./styles.module.scss";

import testGig from "../../assets/testImg/test.gif";

const Profile: FC = observer(() => {
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
      {/* <h1>ПРОФИЛЬ</h1> */}
      {/* <img src={test} className={css.img} />
      <p>
        Приносим свои извинения за временные неудобства. Наша команда трудится
        не покладая рук, чтобы сделать эту страницу незабываемой. Скоро здесь
        появится что-то особенное, что заставит вас улыбнуться и остановиться на
        мгновение. Благодарим за ваше терпение и понимание.
      </p> */}
      <div className={css.headerTitle}>История поездок</div>
      <div className={css.content}>
        <div className={css.imgWrap}>
          <img src={testGig} className={css.img} />
        </div>

        <div className={css.title}>У вас пока нет поездок</div>
        <div className={css.description}>
          Все ваши поездки будут <br />
          отображаться здесь
        </div>
      </div>
    </div>
  );
});

export default Profile;
