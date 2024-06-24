import { FC, PropsWithChildren } from "react";
import css from "./styles.module.scss";
const Body: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={css.bodyWrapper}>
      <div>{children}</div>
    </div>
  );
};

export default Body;
