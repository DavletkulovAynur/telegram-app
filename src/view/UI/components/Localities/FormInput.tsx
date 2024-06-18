import { FC } from "react";
import { TextField } from "@mui/material";
import css from "./styles.module.scss";

import { Control, Controller } from "react-hook-form";
import { IFormData, TYPE_POINT } from "../../containers/SearchBlock/types";

interface IProps {
  searchLocality: (event: string) => void;
  control: Control<IFormData>;
  test: TYPE_POINT;
}

const FormInput: FC<IProps> = ({ searchLocality, control, test }) => {
  //TODO: name + label
  return (
    <div className={css.formWrap}>
      <div className={css.inputWrap}>
        <Controller
          name={test}
          control={control}
          render={({ field: { value, onChange, ...field } }) => (
            <TextField
              {...field}
              // inputRef={originRef}
              fullWidth
              placeholder={test}
              label={test}
              variant="outlined"
              value={value.name}
              onChange={(e) => {
                const newValue = { id: value.id, name: e.target.value };
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
