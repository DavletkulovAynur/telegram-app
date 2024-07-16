import { FC, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/react-hook-form";

import css from "./styles.module.scss";
import { IAgencyOffer, useAgencyOffersApi } from "@/api/agencyOffers";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  isOpen: boolean;
  closeDialog: () => void;
}
const FullScreenDialog: FC<IProps> = ({ isOpen, closeDialog }) => {
  //FORM
  const { control, handleSubmit, reset } = useForm<IAgencyOffer>({
    defaultValues: {
      name: "",
      phone: "",
      description: "",
    },
  });
  // API
  const { addAgencyOffer } = useAgencyOffersApi();

  const sendData = (offer: IAgencyOffer) => {
    // closeDialog();
    reset();
    addAgencyOffer.mutate(offer);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={closeDialog}
        TransitionComponent={Transition}
      >
        <AppBar className={css.appBar} sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton edge="start" onClick={closeDialog} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Предложить агентство
            </Typography>
          </Toolbar>
        </AppBar>
        <List className={css.formWrap}>
          <form onSubmit={handleSubmit(sendData)}>
            <div className={css.inputWrap}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Это поле обязательно" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={"Название *"}
                    label={"Название *"}
                    variant="outlined"
                    error={!!error}
                  />
                )}
              />
            </div>
            <div className={css.inputWrap}>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                rules={{
                  required: "Это поле обязательно",
                  validate: (value: string) => {
                    // Пример валидации номера телефона
                    if (!value || !isValidPhoneNumber(value)) {
                      return "Некорректный номер телефона";
                    }
                    return true;
                  },
                }}
                placeholder="+7 (___) ___-__-__"
                name="phone"
                control={control}
                defaultCountry="RU"
                className={css.testInput}
              />
            </div>
            <div className={css.inputWrap}>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={"Описание"}
                    label={"Описание"}
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                )}
              />
            </div>

            <Button
              disabled={addAgencyOffer.isPending}
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
            >
              Отправить
            </Button>
          </form>
        </List>
      </Dialog>
    </>
  );
};

export default FullScreenDialog;
