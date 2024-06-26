import React from "react";
import css from "./styles.module.scss";
import { ILocalityEntity } from "../../../../data/Locality";
import { CircularProgress } from "@mui/material";
import LocalitiesList from "./LocalitiesList";
import { Modal } from "../modal";
import FormInput from "./FormInput";
import { Control } from "react-hook-form";
import { IFormData, TYPE_POINT } from "../../containers/SearchBlock/types";

interface IProps {
  isOpen: boolean;
  setLocation: (locality: ILocalityEntity) => void;
  searchLocality: (event: string) => void;
  localities: ILocalityEntity[] | null;
  loading: boolean;
  closeModal: () => void;
  control: Control<IFormData>;
  activePoint: TYPE_POINT;
}

const Localities: React.FC<IProps> = ({
  isOpen,
  localities,
  loading,
  closeModal,
  setLocation,
  searchLocality,
  control,
  activePoint,
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <FormInput
        activePoint={activePoint}
        searchLocality={searchLocality}
        control={control}
      />
      {loading ? (
        <div className={css.loaderContainer}>
          <CircularProgress />
        </div>
      ) : localities && localities.length > 0 ? (
        <>
          <LocalitiesList localities={localities} setLocation={setLocation} />
        </>
      ) : (
        <div className={css.loaderContainer}>
          <p>Ничего не найдено</p>
        </div>
      )}
    </Modal>
  );
};

export default Localities;
