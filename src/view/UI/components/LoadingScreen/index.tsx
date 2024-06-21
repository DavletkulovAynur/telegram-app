import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import css from "./styles.module.scss";

export const LoadingScreen: FC = () => (
  <div id="loading-dots__wrapper" className={css.wrapper}>
    <div id="loading-dots">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  </div>
);
