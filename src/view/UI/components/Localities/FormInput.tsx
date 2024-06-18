import { FC } from "react";
import { TextField } from "@mui/material";
import css from "./styles.module.scss";

import { Control, Controller } from "react-hook-form";
import {
  IFormData,
  POINT_PLACEHOLDER,
  TYPE_POINT,
} from "../../containers/SearchBlock/types";

interface IProps {
  searchLocality: (event: string) => void;
  control: Control<IFormData>;
  activePoint: TYPE_POINT;
}

const FormInput: FC<IProps> = ({ searchLocality, control, activePoint }) => {
  //TODO: name + label
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
                const newValue = { id: null, name: e.target.value };
                onChange(newValue);
                searchLocality(e.target.value);
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default FormInput;
