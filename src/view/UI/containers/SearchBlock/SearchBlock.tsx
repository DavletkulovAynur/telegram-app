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
import logo from "../../assets/logo2.png";
import InputItem from "./InputItem";
import Localities from "../../components/Localities";
import { useTelegram, useViewModel } from "../../hooks";
import { observer } from "mobx-react-lite";

const SearchBlock: FC<IMobileFormProps> = observer(({ onSearch }) => {
  const { tg } = useTelegram();
  const [activePoint, setActivePoint] = useState<TYPE_POINT>(TYPE_POINT.origin);
  //LOCALITIES
  const { localities, loading, getList } = useViewModel("locality");

  const { control, setValue, watch } = useForm<IFormData>({
    defaultValues: {
      //FIXME: Изменить как обновим базy
      origin: { id: "2", name: "Уфа" },
      destination: { id: null, name: "" },
    },
  });

  const origin = watch("origin");
  const destination = watch("destination");

  useEffect(() => {
    if (origin.id && destination.id) {
      //тут запускаем первый раз
      onSearch({ originId: origin.id, destinationId: destination.id, originName: origin.name, destinationName: destination.name });
    }
  }, [origin.id, destination.id]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const searchLocality = (value: string) => {
    getList(value);
  };

  const setLocation = (locality: ILocalityEntity) => {
    setIsModalOpen(false);
    setValue(activePoint, {
      id: locality.id,
      name: locality.name,
    });
  };

  //ОТКРЫВАЕМ МОДАЛЬНОЕ ОКНО СО СПИСКОМ НАСЕЛЕННЫХ ПУНКТОВ
  const openModal = (pointType: TYPE_POINT) => {
    setActivePoint(pointType);
    getList();
    setIsModalOpen(true);
  };

  const themeClass = tg?.colorScheme === "dark" ? css.dark : css.light;

  return (
    <div className={css.container}>
      <div className={css.logoWrap}>
        <img
          height={60}
          width={60}
          className={`${css.logo} ${themeClass}`}
          src={logo}
          alt="logo"
        />
      </div>

      <div className={`${css.searchBlock} ${themeClass}`}>
        <div className={css.titleWrap}>
          <div className={css.title}>Заберём вас</div>
        </div>
        {/* FIXME: вынести в отдельный компонент */}
        <Paper elevation={0} className={css.mobileContainer}>
          <SearchIcon fontSize="large" />
          <div className={css.inputsWrapper}>
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

      <Localities
        activePoint={activePoint}
        isOpen={isModalOpen}
        localities={localities}
        loading={loading}
        closeModal={closeModal}
        setLocation={setLocation}
        searchLocality={searchLocality}
        control={control}
      />
    </div>
  );
});

export default SearchBlock;
