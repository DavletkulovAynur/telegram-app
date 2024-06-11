import { FC } from "react";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { IForm, IFormData } from "../types";
import { Points } from "./Points";
import { FormActions } from "./FormActions";
import styles from "./styles/form.module.scss";
import { FormInputs } from "./FormInputs";

export const Form: FC<IForm> = ({
  loading,
  onSearch,
  localities,
  origin,
  destination,
  minified,
  localitiesLoading = false,
  onExpand,
  getLocalities,
}) => {
  const { control, handleSubmit, setValue } = useForm<IFormData>();

  return (
    <form onSubmit={handleSubmit(onSearch)} className={styles.wrapper}>
      <Paper elevation={3} className={styles.formWrapper}>
        <Points />

        <FormInputs
          setValue={setValue}
          origin={origin}
          destination={destination}
          localitiesLoading={localitiesLoading}
          control={control}
          localities={localities}
          getLocalities={getLocalities}
        />
      </Paper>

      <FormActions loading={loading} minified={minified} onExpand={onExpand} />
    </form>
  );
};
