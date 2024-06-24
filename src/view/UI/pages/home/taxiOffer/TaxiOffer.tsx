import { useState } from "react";
import css from "./styles.module.scss";
import loup from "../../../assets/testImg/loup.jpeg";
import Button from "@mui/material/Button";
import FullScreenDialog from "./Dialog";

const TaxiOffer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Renamed to isOpen

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className={css.container} onClick={openDialog}>
        <div className={css.content}>
          <div className={css.title}>Предложить агентство</div>
          <div className={css.description}>
            Мы будем благодарны за вашу помощь!
          </div>
          <Button color="primary" variant="outlined">
            Написать
          </Button>
        </div>
        <img className={css.loup} src={loup}></img>
      </div>
      <FullScreenDialog isOpen={isOpen} closeDialog={closeDialog} />
    </>
  );
};

export default TaxiOffer;

//6 500 