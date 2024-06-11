import Button from "@mui/material/Button";
import { FC } from "react";
import { IFormActions } from "./types";
import css from "./styles/form.module.scss";

export const FormActions: FC<IFormActions> = ({
  loading,
  minified,
  onExpand,
}) => {
  return (
    <div className={css.formActions}>
      <Button disabled={loading} type="submit" variant="contained">
        Найти
      </Button>

      {minified && (
        <Button
          onClick={onExpand}
          disabled={loading}
          color="secondary"
          variant="text"
        >
          Отмена
        </Button>
      )}
    </div>
  );
};
