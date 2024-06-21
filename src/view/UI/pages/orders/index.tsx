import { FC, useMemo } from "react";
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
import { OrderPageSearch } from "../../containers/SearchBlock";

const Orders: FC = observer(() => {
  const orderVM = useViewModel("order");
  const {
    route: { params },
    router: { navigate },
  } = useRouteNode("orders");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate(ERouteNames.ORDERS, data);
  };

  const routeParams = useMemo(() => {
      return {
        originId: params.originId,
        originName: params.originName,
        destinationId: params.destinationId,
        destinationName: params.destinationName
      }
  }, [params])
  return (
    <>
      <div className={css.page}>
        <div className={css.searchForm}>
          <OrderPageSearch
            onSearch={handleSearch}
            routeParams={routeParams}
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
    </>
  );
});

export default Orders;
