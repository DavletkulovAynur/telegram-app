import css from "./styles.module.scss";
import test from "../../../assets/testImg/sp3.jpeg";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function CenterMode() {
  return (
    <div className={css.container}>
      <CalendarMonthIcon className={css.icon} fontSize="large" />
      <div className={css.title}>Событие недели</div>
      <div className={css.eventBlock}>
        <img src={test} className={css.eventImg} />
        <div className={css.eventInfo}>
          <div className={css.price}>RUB 3500</div>
          <div className={css.place}>Гафурийский район, Уклы Кая</div>
        </div>
      </div>
      <Button className={css.button} color="primary" variant="outlined">
        Поскакали
      </Button>
    </div>
  );
}

export default CenterMode;
