import css from "./styles.module.scss";
import test from "../../../assets/testImg/sp3.jpeg";
import Button from "@mui/material/Button";

function CenterMode() {
  return (
    <div className={css.container}>
      <div className={css.title}>Событие недели</div>
      <span className={css.subtitle}>башкортостан</span>
      <div className={css.eventBlock}>
        <img src={test} className={css.eventImg} />
        <div className={css.eventInfo}>
          <div className={css.price}>RUB 3500</div>
          <div className={css.place}>Гафурийский район, Уклы Кая</div>
          <div className={css.date}>Сб, 22.06 - Вс, 23.06</div>
        </div>
      </div>
      <Button className={css.button} color="primary" variant="contained">
        Поскакали
      </Button>
    </div>
  );
}

export default CenterMode;
