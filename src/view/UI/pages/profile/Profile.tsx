import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTelegram } from "../../hooks";
import { useRouter } from "react-router5";
import { ERouteNames } from "../../../../router/routes";

const Profile: FC = observer(() => {
  const tg = useTelegram();
  const { navigate } = useRouter();

  useEffect(() => {
    if (!tg) return;

    tg.BackButton.show();
    tg.BackButton.onClick(() => {
      navigate(ERouteNames.HOME);
      tg.BackButton.hide();
    });
  }, []);
  return (
    <>
      <h1>PROFILE</h1>
    </>
  );
});

export default Profile;
