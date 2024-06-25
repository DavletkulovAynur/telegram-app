import { FC } from "react";
import { ILocalityEntity } from "../../../../data/Locality";

import css from "./styles.module.scss";
import { Paper } from "@mui/material";

interface IProps {
  localities: ILocalityEntity[];
  setLocation: (item: ILocalityEntity) => void;
}
const LocalitiesList: FC<IProps> = ({ localities, setLocation }) => {
  return (
    <ul className={css.localities}>
      {localities.map((item: ILocalityEntity) => (
        <li onClick={() => setLocation(item)} key={item.id}>
          <Paper elevation={2} className={css.locality}>
            <div className={css.localityDescription}>
              <div className={css.localitiesName}>{item.name}</div>
              <div className={css.localitiesDistrict}>{item.district}</div>
            </div>
          </Paper>
        </li>
      ))}
    </ul>
  );
};

export default LocalitiesList;
