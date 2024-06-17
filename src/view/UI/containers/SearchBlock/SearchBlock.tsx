import { FC, useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import css from "./styles.module.scss";
import { ILocalityEntity } from "../../../../data/Locality";
import {
  IFormData,
  IMobileFormProps,
  TYPE_POINT,
  POINT_PLACEHOLDER,
} from "./types";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/logo.png";
import InputItem from "./InputItem";
import Localities from "../../components/Localities";
import { useTelegram } from "../../hooks";

const SearchBlock: FC<IMobileFormProps> = ({
  localities = [],
  getList,
  loading,
  onSearch,
}) => {
  const tg = useTelegram();
  //TODO: ИСПРАВИТЬ В ПЕРВУЮ ОЧЕРЕДЬ (при изменение базы данных тут поменять наименования)
  const { getValues, control, setValue, watch } = useForm<IFormData>({
    defaultValues: {
      origin: { id: "2", name: "Уфа" },
      destination: { id: null, name: "" },
    },
  });

  const origin = watch("origin");
  const destination = watch("destination");

  useEffect(() => {
    if (origin.id && destination.id) {
      onSearch({ originId: origin.id, destinationId: destination.id });
    }
  }, [origin.id, destination.id]);

  //FIXME: переименовать
  const [modalLocalities, setModalLocalities] = useState(false);

  const closeModal = () => {
    setModalLocalities(false);
  };

  const searchLocality = (value: string) => {
    getList(value);
  };

  const setLocation = (locality: ILocalityEntity) => {
    //TODO:  можем управлять фокусом, и так определять type
    const currentOrigin = getValues("origin");
    setValue("origin", { ...currentOrigin, id: locality.id });
  };

  const openModal = () => {
    getList();
    setModalLocalities(true);
  };

  const theme = tg?.colorScheme === "dark" ? css.dark : css.light;

  return (
    <div className={css.container}>
      <div className={css.logoWrap}>
        <img
          height={50}
          width={50}
          className={css.logo}
          src={logo}
          alt="logo"
        />
      </div>

      <div className={`${css.searchBlock} ${theme}`}>
        <div className={css.titleWrap}>
          <div className={css.title}>Заберём вас</div>
          <div className={css.subtitle}>где бы вы ни были!</div>
        </div>
        <Paper elevation={0} className={css.mobileContainer}>
          <SearchIcon fontSize="large" />
          <div className={css.test2}>
            <InputItem
              openModal={openModal}
              typePoint={TYPE_POINT.origin}
              point={origin}
              placeholderHTML={POINT_PLACEHOLDER.origin}
            />
            <div className={css.line} />
            <InputItem
              openModal={openModal}
              typePoint={TYPE_POINT.destination}
              point={destination}
              placeholderHTML={POINT_PLACEHOLDER.destination}
            />
          </div>
        </Paper>
      </div>

      {/* TODO: это модальное окно!!! */}
      <Localities
        isOpen={modalLocalities}
        localities={localities}
        loading={loading}
        closeModal={closeModal}
        setLocation={setLocation}
        searchLocality={searchLocality}
        control={control}
      />
      {/* МОЖНО ЛИ БУДЕТ ВЫНОСИТЬ В ГЛОБАЛЬНЫЙ КОМПОНЕНТ*/}
    </div>
  );
};

export default SearchBlock;
