
import { FC } from "react";
import css from "./styles.module.scss";
import { POINT_PLACEHOLDER, TFormDataPoint, TPoint, TYPE_POINT } from "./types";
import Typewriter from "./Typewriter";

interface IProps {
  openModal: (a: TPoint) => void;
  typePoint: TYPE_POINT;
  point: TFormDataPoint,
  placeholderHTML: POINT_PLACEHOLDER;
}

const InputItem: FC<IProps> = ({
  typePoint,
  point,
  placeholderHTML,
  openModal,
}) => {
  return (
    <div onClick={() => openModal(typePoint)} className={css.localityWrap}>
      <span className={(point.id && css.localityName) || ""}>{point.id && point.name}</span>
      {!point.id && typePoint === TYPE_POINT.origin && (
        <span className={css.notMarkedLocalityName}>{placeholderHTML}</span>
      )}
      {!point.id && typePoint === TYPE_POINT.destination && (
        <div className={css.typeWriterWrap}>
          Куда&nbsp;-&nbsp;
          <Typewriter
            texts={[
              "Сибай",
              "Аъяр",
              "Санкт-Петербург",
              "Новосибирск",
              "Екатеринбург",
            ]}
            speed={100}
            pause={1000}
          />
        </div>
      )}
    </div>
  );
};

export default InputItem