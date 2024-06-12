import { FC } from "react";
import { useRouter } from "react-router5";
import { SearchForm } from "../../components/SearchForm";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";
import css from "./styles.module.scss";
import { useViewModel } from "../../hooks";
import { observer } from "mobx-react-lite";
import { ECategories } from "../../../../libs";
import { MobileForm } from "../../components/MobileSearchForm";

//
import sp1 from "../../assets/testImg/sp1.jpeg";
import sp2 from "../../assets/testImg/sp5.jpeg";
import sp3 from "../../assets/testImg/sp3.jpeg";
import sp4 from "../../assets/testImg/sp4.jpeg";

const Home: FC = observer(() => {
  const { navigate } = useRouter();
  const { localities, loading, getList } = useViewModel("locality");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  return (
    <>
      {/* TODO:назвать класс по другому так как это не page */}
      <div className={css.page}>
        <div className={css.desktop}>
          <SearchForm
            gaCategory={ECategories.ORDERS}
            localitiesLoading={loading}
            onSearch={handleSearch}
            localities={localities}
          />
        </div>
        <div className={css.mobile}>
          <MobileForm
            onSearch={handleSearch}
            localities={localities}
            getList={getList}
            loading={loading}
          />
        </div>
      </div>

      {/* слайдер */}
      <div className={css.sliderWrap}>
        <h2>Интересные места</h2>
        <div>Башкортостан</div>
        <div className={css.imagesWrap}>
          <img className={css.image} src={sp3} alt="" />
          <img className={css.image} src={sp4} alt="" />
          <img className={css.image} src={sp1} alt="" />
          <img className={css.image} src={sp2} alt="" />
        </div>
      </div>
    </>
  );
});

export default Home;
