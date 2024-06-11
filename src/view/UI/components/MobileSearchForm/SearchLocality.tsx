import Sheet from "react-modal-sheet";
import { FC, useEffect, useRef } from "react";
import { CircularProgress, TextField } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { ILocalities, ISearchLocality } from "./types";
import { ILocalityEntity } from "../../../../data/Locality";

import css from "./styles.module.scss";

const Localities: FC<ILocalities> = ({ localities, setLocation }) => {
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

const SearchLocality: FC<ISearchLocality> = ({
  label,
  isOpen,
  closeInputLayer,
  setLocation,
  from,
  searchLocality,
  localities,
  loading,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  //FIXME: подумать куда можно вынести функцию
  useEffect(() => {
    const handleBodyTouchStart = (event: TouchEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        handleButtonClick();
      }
    };

    document.body.addEventListener("touchstart", handleBodyTouchStart);

    return () => {
      document.body.removeEventListener("touchstart", handleBodyTouchStart);
    };
  }, []);

  console.log('localities', localities)
  return (
    <Sheet
      rootId="root"
      isOpen={isOpen}
      onClose={closeInputLayer}
      className={css.container}
    >
      <Sheet.Container
        className={css.darkThemeContainer}
      >
        <Sheet.Header />
        <Sheet.Content>
          <div className={css.localitiesContainer}>
            <TextField
              defaultValue={from}
              id="outlined-basic"
              label={label}
              variant="outlined"
              onChange={searchLocality}
              inputRef={inputRef}
              fullWidth
            />

            {loading ? (
              <div className={css.loaderContainer}>
                <CircularProgress />
              </div>
            ) : localities && localities.length > 0 ? (
              <Localities localities={localities} setLocation={setLocation} />
            ) : (
              <p>Ничего не найдено</p>
            )}
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default SearchLocality;
