import {FC, forwardRef} from "react";
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

import css from "./styles.module.scss";
import { TOfferFormFields } from "./types";
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
const FullScreenDialog: FC<IProps> = ({isOpen, closeDialog}) => {
  //FORM
  const { control, handleSubmit } = useForm<TOfferFormFields>();

  const sendData = (data: TOfferFormFields) => {
    console.log("test", data);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={closeDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeDialog}
              aria-label="close"
            >
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
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Это поле обязательно" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={"Телефон *"}
                    label={"Телефон *"}
                    variant="outlined"
                    error={!!error}
                  />
                )}
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

            <Button type="submit" fullWidth color="primary" variant="contained">
              Отправить
            </Button>
          </form>
        </List>
      </Dialog>
    </>
  );
}

export default FullScreenDialog