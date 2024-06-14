import { TextField } from "@mui/material";
import css from "./styles.module.scss";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
const FormInput = () => {
  return (
    <div className={css.formWrap}>
      <div className={css.inputWrap}>
        <LocationSearchingOutlinedIcon className={css.icon} fontSize="medium" />
        <TextField
          fullWidth
          placeholder="Откуда"
          label="Откуда"
          variant="standard"
        />
      </div>
      <div className={css.inputWrap}>
        <MyLocationOutlinedIcon className={css.icon} fontSize="medium" />
        <TextField
          fullWidth
          placeholder="Куда"
          label="Куда"
          variant="standard"
        />
      </div>
    </div>
  );
};

export default FormInput;
