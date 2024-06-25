import css from "./styles.module.scss";
import test from "../../../assets/testImg/sp3.jpeg";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "react-router5";

function CenterMode() {
  const { navigate } = useRouter();
  const openEventPage = () => {
    navigate("event", { id: 1 });
  };
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
      <Button
        onClick={openEventPage}
        className={css.button}
        color="primary"
        variant="outlined"
      >
        Поскакали
      </Button>
    </div>
  );
}

export default CenterMode;
