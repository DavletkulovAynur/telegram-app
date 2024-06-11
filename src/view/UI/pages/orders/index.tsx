import { FC } from "react";
import { SearchForm } from "../../components/SearchForm";
import { useRouteNode } from "react-router5";
import { useViewModel } from "../../hooks";
import { observer } from "mobx-react-lite";
import Error from "./components/Error";
import Loading from "./components/Loading/Loading";
import List from "./components/List/List";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";
import css from "./styles.module.scss";
import { ERouteNames } from "../../../../router/routes";
import { AddAgencyChip } from "../../components/AddAgencyChip";
import { ECategories } from "../../../../libs";

const Orders: FC = observer(() => {
  const orderVM = useViewModel("order");
  const localityVM = useViewModel("locality");
  const {
    route: { params },
    router: { navigate },
  } = useRouteNode("orders");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate(ERouteNames.ORDERS, data);
  };

  const originEntity = localityVM.localities?.find(
    (item) => item.id === Number(params.originId),
  );

  const destinationEntity = localityVM.localities?.find(
    (item) => item.id === Number(params.destinationId),
  );

  return (
    <>
      <div className={css.page}>
        <div className={css.searchForm}>
          <SearchForm
            gaCategory={ECategories.ORDERS}
            minified
            localities={localityVM.localities}
            loading={orderVM.loading || localityVM.loading}
            localitiesLoading={localityVM.loading}
            destination={destinationEntity}
            origin={originEntity}
            onSearch={handleSearch}
          />
        </div>

        <div className={css.list}>
          {orderVM.loading && <Loading />}

          {orderVM.error && <Error error={orderVM.error} />}

          {!orderVM.error && !orderVM.loading && orderVM.orderList && (
            <List list={orderVM.orderList} />
          )}
        </div>
      </div>
      <AddAgencyChip />
    </>
  );
});

export default Orders;
