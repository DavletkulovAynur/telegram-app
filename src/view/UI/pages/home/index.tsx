import { FC } from "react";
import { useRouter } from "react-router5";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";
import css from "./styles.module.scss";
import { observer } from "mobx-react-lite";
import { SearchBlock } from "../../containers/SearchBlock";
import Slider from "react-slick";
import { IconButton } from "@mui/material";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

//
import sp1 from "../../assets/testImg/sp1.jpeg";
import sp2 from "../../assets/testImg/sp5.jpeg";
import sp3 from "../../assets/testImg/sp3.jpeg";
import sp4 from "../../assets/testImg/sp4.jpeg";
//LOGO
import { useViewModel } from "../../hooks";

const Home: FC = observer(() => {
  const { navigate } = useRouter();
  const { localities, loading, getList } = useViewModel("locality");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };


  const handleOpenProfilePage = () => {
    navigate("profile");
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

      {/* слайдер */}
      <div className={css.sliderWrap}>
        <h2>Интересные места</h2>
        <div>Башкортостан</div>
        <Slider {...settings}>
          <img className={css.image} src={sp3} alt="" />
          <img className={css.image} src={sp4} alt="" />
          <img className={css.image} src={sp1} alt="" />
          <img className={css.image} src={sp2} alt="" />
        </Slider>
      </div>
    </>
  );
});

export default Home;
