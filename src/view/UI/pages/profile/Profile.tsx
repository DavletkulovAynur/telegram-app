import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTelegram } from "../../hooks";
import { useRouter } from "react-router5";
import { ERouteNames } from "../../../../router/routes";
import { Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import css from "./styles.module.scss";

const Profile: FC = observer(() => {
  const { tg, isTelegramExist } = useTelegram();
  const { navigate } = useRouter();

  const goToMainPage = () => {
    navigate(ERouteNames.HOME);
  };
  useEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(() => {
      goToMainPage;
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
      <h1>PROFILE</h1>
    </div>
  );
});

export default Profile;
