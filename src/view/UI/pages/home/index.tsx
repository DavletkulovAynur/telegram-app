import { FC } from "react";
import { useRouter } from "react-router5";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";
import css from "./styles.module.scss";
import { observer } from "mobx-react-lite";
import { SearchBlock } from "../../containers/SearchBlock";
import { IconButton } from "@mui/material";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Event from "./events";
import TaxiOffer from "./taxiOffer";

const Home: FC = observer(() => {
  const { navigate } = useRouter();

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  const handleOpenProfilePage = () => {
    navigate("profile");
  };

  const handleOpenSettingPage = () => {
    navigate("setting");
  };
  return (
    <>
      <header className={css.header}>
        <IconButton onClick={handleOpenSettingPage} className={css.iconWrap}>
          <SettingsOutlinedIcon fontSize="medium" />
        </IconButton>

        <IconButton onClick={handleOpenProfilePage} className={css.iconWrap}>
          <Person2OutlinedIcon fontSize="medium" />
        </IconButton>
      </header>
      <SearchBlock onSearch={handleSearch} />
      <Event />
      <TaxiOffer />
    </>
  );
});

export default Home;
