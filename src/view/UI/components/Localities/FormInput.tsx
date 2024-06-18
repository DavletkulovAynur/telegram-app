import { FC } from "react";
import { TextField } from "@mui/material";
import css from "./styles.module.scss";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
// import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import { Control, Controller } from "react-hook-form";
import { IFormData, TYPE_POINT } from "../../containers/SearchBlock/types";

interface IProps {
  searchLocality: (event: string) => void;
  control: Control<IFormData>;
  test: TYPE_POINT;
}

const FormInput: FC<IProps> = ({ searchLocality, control, test }) => {
  // const destinationRef = useRef<HTMLInputElement>(null);
  // const originRef = useRef<HTMLInputElement>(null);

  //TODO: name + label
  return (
    <div className={css.formContainer}>
      <div className={css.formWrap}>
        <div className={css.inputWrap}>
          <LocationSearchingOutlinedIcon
            className={css.icon}
            fontSize="medium"
          />
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
                variant="standard"
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
    </div>
  );
};

export default FormInput;
