import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTelegram } from "../../hooks";
import { useRouter } from "react-router5";
import { ERouteNames } from "../../../../router/routes";
import { Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import css from "./styles.module.scss";

import cover from "../../assets/testImg/sp3.jpeg";
import CopyPhoneNumberButton from "../../components/CopyPhoneNumberButton";

const Event: FC = observer(() => {
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
      <div className={css.content}>
        <img src={cover} className={css.cover} />
        <div className={css.descriptionWrap}>
          <div className={css.title}>
            Живописные маршруты и единение с природой
          </div>
          <p>
            На этих выходных у вас есть уникальная возможность провести время
            незабываемо. Представьте себе прогулку верхом на лошадях по
            удивительным маршрутам, где лесные тропы сменяются полями с
            цветущими лугами. Этот опыт подарит вам чувство свободы и гармонии с
            природой.
          </p>

          <div className={css.phoneContainer}>
            <div className={css.phone}>+7 929 579 77 80</div>
            <CopyPhoneNumberButton phone={"7 929 579 77 80"} />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45485.31448249802!2d56.789331955979016!3d54.154643909665104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d9bb4a918c017b%3A0xa3302cd4c5892f08!2z0KHQutCw0LvQsCDQo9C60LvRiyDQmtCw0Y8!5e0!3m2!1sru!2sar!4v1719332548806!5m2!1sru!2sar"
            width="100%"
            height="200px"
            className={css.map}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
});

export default Event;
