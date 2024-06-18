import React from "react";
import css from "./styles.module.scss";
import { ILocalityEntity } from "../../../../data/Locality";
import { CircularProgress } from "@mui/material";
import LocalitiesList from "./LocalitiesList";
import { Modal } from "../modal";
import FormInput from "./FormInput";
import { Control } from "react-hook-form";
import { IFormData } from "../../containers/SearchBlock/types";
// import { CircularProgress } from "@mui/material";

interface IProps {
  // label: string;
  isOpen: boolean;
  // closeInputLayer: () => void;
  setLocation: (locality: ILocalityEntity) => void;
  // from: string | null;
  searchLocality: (event: string) => void;
  localities: ILocalityEntity[] | null;
  loading: boolean;
  closeModal: () => void;
  control: Control<IFormData>;
  // loading: boolean;
}

const Localities: React.FC<IProps> = ({
  isOpen,
  localities,
  loading,
  closeModal,
  setLocation,
  searchLocality,
  control,
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <FormInput searchLocality={searchLocality} control={control} />
      {loading ? (
        <div className={css.loaderContainer}>
          <CircularProgress />
        </div>
      ) : localities && localities.length > 0 ? (
        <>
          <LocalitiesList localities={localities} setLocation={setLocation} />
          <LocalitiesList localities={localities} setLocation={setLocation} />
          <LocalitiesList localities={localities} setLocation={setLocation} />
          <LocalitiesList localities={localities} setLocation={setLocation} />
        </>
      ) : (
        <p>Ничего не найдено</p>
      )}
    </Modal>
  );
};

export default Localities;
