import css from "./styles.module.scss";
import loup from "../../../assets/testImg/loup.jpeg";
import Button from "@mui/material/Button";

const TaxiOffer = () => {
  return (
    <div className={css.container}>
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
  );
};

export default TaxiOffer;
