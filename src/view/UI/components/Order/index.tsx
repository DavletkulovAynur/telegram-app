import { FC } from "react";
import { Link, Paper, Typography } from "@mui/material";
import css from "./styles.module.scss";
import { IOrderProps } from "./types";
import { formatPhoneNumberIntl } from "react-phone-number-input";

export const Order: FC<IOrderProps> = ({ agency, price }) => (
  <Paper elevation={3} className={css.order}>
    <div className={css.columnLeft}>
      <Typography variant="h6" align="left" className={css.orderTitle}>
        {agency.name}
      </Typography>

      <div className={css.phones}>
        {agency.phones && agency.phones.length ? (
          agency.phones.map((phone, index) => (
            <Link
              key={phone + index}
              className={css.orderPhone}
              href={`tel:${phone}`}
              underline="none"
              variant="subtitle2"
              align="left"
            >
              {formatPhoneNumberIntl(phone)}
            </Link>
          ))
        ) : (
          <Typography
            className={css.orderPhone}
            variant="subtitle2"
            align="left"
            color="text.secondary"
          >
            Телефон не указан
          </Typography>
        )}
      </div>
    </div>

    <div className={css.columnRight}>
      {price ? (
        <Typography variant="h6">{price} ₽</Typography>
      ) : (
        <Typography variant="subtitle2" color="text.secondary">
          Цена не указана
        </Typography>
      )}
    </div>
  </Paper>
);
