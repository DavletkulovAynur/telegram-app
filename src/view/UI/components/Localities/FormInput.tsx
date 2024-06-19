import { FC } from "react";
import { TextField, InputAdornment } from "@mui/material";
import css from "./styles.module.scss";

import { Control, Controller } from "react-hook-form";
import {
  IFormData,
  POINT_PLACEHOLDER,
  TYPE_POINT,
} from "../../containers/SearchBlock/types";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

interface IProps {
  searchLocality: (event: string) => void;
  control: Control<IFormData>;
  activePoint: TYPE_POINT;
}

const FormInput: FC<IProps> = ({ searchLocality, control, activePoint }) => {
  return (
    <div className={css.formWrap}>
      <div className={css.inputWrap}>
        <Controller
          name={activePoint}
          control={control}
          render={({ field: { value, onChange, ...field } }) => (
            <TextField
              {...field}
              fullWidth
              placeholder={POINT_PLACEHOLDER[activePoint]}
              label={POINT_PLACEHOLDER[activePoint]}
              variant="outlined"
              value={value.name}
              onChange={(e) => {
                //TODO: исправить заглушку
                const newValue = { id: null, name: e.target.value };
                onChange(newValue);
                searchLocality(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PlaceOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default FormInput;
