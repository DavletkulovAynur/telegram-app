import { FC } from "react";
import { Typography } from "@mui/material";

/**
 * Данная верстка полностью идентична с версткой в файле public/index.html
 * Если что-то поменяется, то нужно менять в обоих местах.
 */
export const LoadingScreen: FC = () => (
  <div id="loading-dots__wrapper">
    <div id="loading-dots">
      <Typography className="title">Yul</Typography>
      <Typography className="title subtitle">Yort</Typography>
      <div className="dot first-dots" />
      <div className="dot second-dots" />
      <div className="dot third-dots" />
    </div>
  </div>
);
