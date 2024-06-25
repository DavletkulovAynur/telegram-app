import { FC } from "react";
import { Order } from "../../../../components/Order";
import { Typography } from "@mui/material";
import { IListProps } from "./types";
import css from "./styles.module.scss";

const List: FC<IListProps> = ({ list }) => {
  if (!list.length) {
    return (
      <Typography variant="h6" align="center">
        {/* TODO поставить картинку */}
        По данному маршруту
        <br /> предложений не найдено
      </Typography>
    );
  }

  return (
    <>
      <Typography align="right" className={css.title} color="text.secondary">
        Найденных вариантов: {list.length}
      </Typography>

      {list.map((order) => (
        <Order key={order.id} agency={order.agency} price={order.price} />
      ))}
    </>
  );
};

export default List;
