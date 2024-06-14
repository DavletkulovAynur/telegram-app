import { FC } from "react";
import { ILocalityEntity } from "../../../../data/Locality";
//Icons
import FmdGoodIcon from "@mui/icons-material/FmdGood";
//style
import css from "./styles.module.scss";

interface IProps {
  localities: ILocalityEntity[];
  setLocation: (item: ILocalityEntity) => void;
}
const LocalitiesList: FC<IProps> = ({ localities, setLocation }) => {
  return (
    <ul className={css.localities}>
      {localities.map((item: ILocalityEntity) => (
        <li
          className={css.locality}
          onClick={() => setLocation(item)}
          key={item.id}
        >
          <FmdGoodIcon color="primary" />
          <div className={css.localityDescription}>
            <div className={css.localitiesName}>{item.name}</div>
            <div className={css.localitiesDistrict}>{item.district}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LocalitiesList;