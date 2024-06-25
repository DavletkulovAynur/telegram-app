import { FC, useState } from "react";
import { Paper, Typography } from "@mui/material";
import css from "./styles.module.scss";
import { IOrderProps } from "./types";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { IconButton } from "@mui/material";
import { useSnackbar } from "../../providers/SnackbarProvider";

export const Order: FC<IOrderProps> = ({ agency, price }) => {
  const [copied, setCopied] = useState<Record<string, boolean>>({});
  const { showSnackbar } = useSnackbar();
  const handleCopy = (phone: string) => {
    showSnackbar("Номер скопирован", "success");
    setCopied({ ...copied, [phone]: true });
    setTimeout(() => setCopied({ ...copied, [phone]: false }), 2000);
  };

  return (
    <Paper elevation={3} className={css.order}>
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
                <CopyToClipboard text={phone} onCopy={() => handleCopy(phone)}>
                  {/* <Button size="small" className={css.copyButton}>
                    {copied[phone] ? "Скопировано" : "Копировать"}
                  </Button> */}
                  <IconButton>
                    <ContentCopyOutlinedIcon />
                  </IconButton>
                </CopyToClipboard>
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
