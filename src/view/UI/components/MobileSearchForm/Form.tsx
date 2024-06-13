import React, { FC, useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import css from "./styles.module.scss";
import SearchLocality from "./SearchLocality";
import { ILocalityEntity } from "../../../../data/Locality";
import {
  IFormData,
  IFormLocalityName,
  IMobileFormProps,
  TPoint,
  TYPE_POINT,
  POINT_PLACEHOLDER,
} from "./types";
import SearchIcon from "@mui/icons-material/Search";
import Typewriter from "./Typewriter";
import logo from "../../assets/logo.png";
import Localities from "../Localities";

const FormLocalityName: FC<IFormLocalityName> = ({
  toggleLocationLayer,
  typePoint,
  pointName,
  ID,
  placeholderHTML,
  error,
}) => {
  const wrapperClassName = `${css.localityWrap} ${
    error ? css.localityWrapError : ""
  }`;

  return (
    <div
      onClick={() => toggleLocationLayer(typePoint)}
      className={wrapperClassName}
    >
      <span className={(ID && css.localityName) || ""}>{ID && pointName}</span>
      {!ID && typePoint === TYPE_POINT.origin && (
        <span className={css.notMarkedLocalityName}>{placeholderHTML}</span>
      )}
      {!ID && typePoint === TYPE_POINT.destination && (
        <div className={css.testWrap}>
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

const MobileForm: FC<IMobileFormProps> = ({
  localities = [],
  getList,
  loading,
  onSearch,
}) => {
  const { setValue, getValues } = useForm<IFormData>();
  const originId = getValues("originId");
  const destinationId = getValues("destinationId");
  const [originError, setOriginError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);
  const [isOriginModalOpen] = useState(false);
  const [isToModalOpen] = useState(false);
  const [pointName, setPointName] = useState({
    origin: null as string | null,
    destination: null,
  });

  //FIXME:
  const [modalLocalities, setModalLocalities] = useState(false);

  //FIXME: отправка формы только все поля будут заполнены
  useEffect(() => {
    if (originId && destinationId) {
      onSearch({ originId, destinationId });
    }
  }, [originId, destinationId]);

  //FIXME: хардкод, исправить в первую очередь
  //TODO: при изменение базы данных тут поменять наименования
  useEffect(() => {
    setValue("originId", "2");
    setOriginError(false);
    const updatedPointName = { ...pointName, origin: "Уфа" };
    setPointName(updatedPointName);
  }, []);
  // ******* //

  const searchLocality = (event: React.ChangeEvent<HTMLInputElement>) => {
    getList(event.target.value);
  };

  //TODO: открываем слой
  const toggleLocationLayer = (type: TPoint) => {
    getList();
    console.log(type);
    setModalLocalities(true);
  };

  const setLocation = (locality: ILocalityEntity, type: TPoint) => {
    toggleLocationLayer(type);
    const updatedPointName = { ...pointName, [type]: locality.name };
    setPointName(updatedPointName);
    type === TYPE_POINT.origin
      ? (setValue("originId", locality.id), setOriginError(false))
      : (setValue("destinationId", locality.id), setDestinationError(false));
  };

  return (
    <>
      <div className={css.logoWrap}>
        <img
          height={50}
          width={50}
          className={css.logo}
          src={logo}
          alt="logo"
        />
      </div>
      <Localities isOpen={modalLocalities} localities={localities} />
      <Paper elevation={0} className={css.mobileContainer}>
        <SearchIcon fontSize="large" />
        <div className={css.test2}>
          <FormLocalityName
            toggleLocationLayer={toggleLocationLayer}
            typePoint={TYPE_POINT.origin}
            ID={originId}
            pointName={pointName.origin}
            placeholderHTML={POINT_PLACEHOLDER.origin}
            error={originError}
          />
          <div className={css.line} />
          <FormLocalityName
            toggleLocationLayer={toggleLocationLayer}
            typePoint={TYPE_POINT.destination}
            ID={destinationId}
            pointName={pointName.destination}
            placeholderHTML={POINT_PLACEHOLDER.destination}
            error={destinationError}
          />
        </div>
      </Paper>

      {[TYPE_POINT.origin, TYPE_POINT.destination].map((type) => (
        <SearchLocality
          key={type}
          isOpen={type === "origin" ? isOriginModalOpen : isToModalOpen}
          label={POINT_PLACEHOLDER[type]}
          from={pointName[type]}
          setLocation={(locality) => setLocation(locality, type)}
          localities={localities}
          closeInputLayer={() => toggleLocationLayer(type)}
          searchLocality={searchLocality}
          loading={loading}
        />
      ))}
    </>
  );
};

export { MobileForm };
