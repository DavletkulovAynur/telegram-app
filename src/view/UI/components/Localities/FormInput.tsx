import { FC, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import css from "./styles.module.scss";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import { Control, Controller } from "react-hook-form";
import { IFormData } from "../../containers/SearchBlock/types";

interface IProps {
  searchLocality: (event: string) => void;
  control: Control<IFormData>;
}

const FormInput: FC<IProps> = ({ searchLocality, control }) => {
  const destinationRef = useRef<HTMLInputElement>(null);
  const originRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (destinationRef.current) {
      destinationRef.current.focus();
    }
  }, []);

  //TODO: переписать (подумать над реализацией)
  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      if (target !== originRef.current && target !== destinationRef.current) {
        const isOriginFocused = document.activeElement === originRef.current;
        console.log("isOriginFocused", isOriginFocused);
        const isDestinationFocused =
          document.activeElement === destinationRef.current;
        if (isOriginFocused) {
          if (!originRef.current) return;
          originRef.current.focus();
        }
        if (isDestinationFocused) {
          if (!destinationRef.current) return;
          destinationRef.current.focus();
        }
      }
    };

    // Add event listeners for click and touch events
    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleClick);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, []);

  return (
    <div className={css.formContainer}>
      <div className={css.formWrap}>
        <div className={css.inputWrap}>
          <LocationSearchingOutlinedIcon
            className={css.icon}
            fontSize="medium"
          />
          <Controller
            name="origin"
            control={control}
            render={({ field: { value, onChange, ...field } }) => (
              <TextField
                {...field}
                inputRef={originRef}
                fullWidth
                placeholder="Откуда"
                label="Откуда"
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
        <div className={css.inputWrap}>
          <MyLocationOutlinedIcon className={css.icon} fontSize="medium" />
          <Controller
            name="destination"
            control={control}
            render={({ field: { value, onChange, ...field } }) => (
              <TextField
                {...field}
                inputRef={destinationRef}
                fullWidth
                placeholder="Откуда"
                label="Откуда"
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
