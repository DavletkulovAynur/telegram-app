import { FC } from "react";
import { useRouter } from "react-router5";
import { SearchForm } from "../../components/SearchForm";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";
import css from "./styles.module.scss";
import { useViewModel } from "../../hooks";
import { observer } from "mobx-react-lite";
// import { AddAgencyChip } from "../../components/AddAgencyChip";
import { ECategories } from "../../../../libs";
import { MobileForm } from "../../components/MobileSearchForm";

const Home: FC = observer(() => {
  const { navigate } = useRouter();
  const { localities, loading, getList } = useViewModel("locality");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  return (
    <>
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
      {/* <AddAgencyChip /> */}
    </>
  );
});

export default Home;
