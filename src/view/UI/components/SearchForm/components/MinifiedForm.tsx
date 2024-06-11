{/*FIXME:  Для мобильной версии этот вариант еще не сделан */}
import { FC } from "react";
import { Button, LinearProgress, Paper, Typography } from "@mui/material";
import { IMinifiedForm } from "../types";
import css from "./styles/minifiedForm.module.scss";
import { Points } from "./Points";

export const MinifiedForm: FC<IMinifiedForm> = ({
  loading = false,
  origin,
  destination,
  onExpand,
}) => {
  return (
    <div className={css.minifiedRouteWrapper}>
      <Paper elevation={3} className={css.paper}>
        {!origin || !destination ? (
          <Typography variant="h6" className={css.loadingText}>
            {loading ? "Загрузка..." : "Маршрут не указан"}
          </Typography>
        ) : (
          <div className={css.formWrapper}>
            <Points />
            <div className={css.route}>
              <Typography variant="h6" className={css.title}>
                {origin.name}
              </Typography>

              <Typography variant="h6" className={css.title}>
                {destination.name}
              </Typography>
            </div>
          </div>
        )}
        {loading && (
          <div className={css.loader}>
            <LinearProgress />
          </div>
        )}
      </Paper>

      <Button
        onClick={onExpand}
        className={css.formButton}
        color="primary"
        variant="outlined"
        size="large"
        disabled={loading}
      >
        Изменить
      </Button>
    </div>
  );
};
