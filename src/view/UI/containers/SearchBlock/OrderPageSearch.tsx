import { FC, useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import css from "./styles.module.scss";
import { ILocalityEntity } from "../../../../data/Locality";
import {
  IFormData,
  TYPE_POINT,
  POINT_PLACEHOLDER,
  TSearchLocalityParams,
} from "./types";
import SearchIcon from "@mui/icons-material/Search";
import InputItem from "./InputItem";
import Localities from "../../components/Localities";
import { useViewModel } from "../../hooks";
import { observer } from "mobx-react-lite";

interface IProps {
  onSearch: (data: TSearchLocalityParams) => void;
  routeParams: TSearchLocalityParams;
}
const OrderPageSearch: FC<IProps> = observer(({ onSearch, routeParams }) => {
  const [activePoint, setActivePoint] = useState<TYPE_POINT>(TYPE_POINT.origin);
  //LOCALITIES
  const { localities, loading, getList } = useViewModel("locality");

  const { control, setValue, watch } = useForm<IFormData>({
    defaultValues: {
      //FIXME: Изменить как обновим базy
      origin: { id: routeParams.originId, name: routeParams.originName },
      destination: {
        id: routeParams.destinationId,
        name: routeParams.destinationName,
      },
    },
  });

  const origin = watch("origin");
  const destination = watch("destination");

  useEffect(() => {
    if (origin.id && destination.id) {
      onSearch({
        originId: origin.id,
        destinationId: destination.id,
        originName: routeParams.originName,
        destinationName: routeParams.destinationName,
      });
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

  //FIXME: background
  return (
    <div className={css.orderPageSearch}>
      <Paper elevation={0} className={css.orderPageSearchContainer}>
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

export default OrderPageSearch;
