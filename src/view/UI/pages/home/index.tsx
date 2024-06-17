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
import { useViewModel } from "../../hooks";
import Event from "./events";

const Home: FC = observer(() => {
  const { navigate } = useRouter();
  const { localities, loading, getList } = useViewModel("locality");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  const handleOpenProfilePage = () => {
    navigate("profile");
  };
  return (
    <>
      <header className={css.header}>
        <div className={css.iconWrap}>
          <SettingsOutlinedIcon fontSize="medium" />
        </div>

        <IconButton onClick={handleOpenProfilePage} className={css.iconWrap}>
          <Person2OutlinedIcon fontSize="medium" />
        </IconButton>
      </header>
      <SearchBlock
        onSearch={handleSearch}
        localities={localities}
        getList={getList}
        loading={loading}
      />
      <Event />
    </>
  );
});

export default Home;
