import css from "./styles.module.scss";
import test from "../../../assets/testImg/sp3.jpeg";
import Button from "@mui/material/Button";

function CenterMode() {
  return (
    <div className={css.container}>
      <h1>Событие недели</h1>
      <span>башкортостан</span>
      <div className={css.eventBlock}>
        <img src={test} className={css.eventImg} />
      </div>
      <Button className={css.button} color="primary" variant="contained">
        Отмена
      </Button>
    </div>
  );
}

export default CenterMode;
