import { FC } from "react";
import { Paper, Typography } from "@mui/material";
import css from "./styles.module.scss";
import { IOrderProps } from "./types";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import CopyPhoneNumberButton from "../CopyPhoneNumberButton";

export const Order: FC<IOrderProps> = ({ agency, price }) => {
  return (
    <Paper elevation={2} className={css.order}>
      <div className={css.columnLeft}>
        <Typography variant="h6" align="left" className={css.orderTitle}>
          {agency.name}
        </Typography>

        <div className={css.phones}>
          {agency.phones && agency.phones.length ? (
            agency.phones.map((phone, index) => (
              <div key={phone + index} className={css.phoneContainer}>
                <div className={css.orderPhone}>
                  {formatPhoneNumberIntl(phone)}
                </div>
                <CopyPhoneNumberButton phone={phone} />
              </div>
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
};
