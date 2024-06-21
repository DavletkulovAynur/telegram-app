import css from "./styles.module.scss";
import loup from "../../../assets/testImg/loup.jpeg";
import Button from "@mui/material/Button";
import FullScreenDialog from "./Dialog";
// import { useState } from "react";

const TaxiOffer = () => {
  // const [open, setOpen] = useState(false);
  const openPopup = () => {};
  return (
    <>
      <div className={css.container} onClick={openPopup}>
        <div className={css.content}>
          <div className={css.title}>Предложить агентство</div>
          <div className={css.description}>
            Мы будем благодарны за вашу помощь!
          </div>
          <Button
            // onClick={onExpand}
            // disabled={loading}
            color="secondary"
            variant="outlined"
          >
            Написать
          </Button>
        </div>
        <img className={css.loup} src={loup}></img>
      </div>
      <FullScreenDialog />
    </>
  );
};

export default TaxiOffer;
