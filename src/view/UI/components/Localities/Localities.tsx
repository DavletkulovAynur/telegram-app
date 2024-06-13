import React from "react";
import css from "./styles.module.scss";
import { ILocalityEntity } from "../../../../data/Locality";
import { CircularProgress } from "@mui/material";
import LocalitiesList from "./LocalitiesList";
import { Modal } from "../modal";
// import { CircularProgress } from "@mui/material";

interface IProps {
  // label: string;
  isOpen: boolean;
  // closeInputLayer: () => void;
  // setLocation: (locality: ILocalityEntity) => void;
  // from: string | null;
  // searchLocality: (event: React.ChangeEvent<HTMLInputElement>) => void;
  localities: ILocalityEntity[] | null;
  loading: boolean;
  closeModal: () => void;
  // loading: boolean;
}

const Localities: React.FC<IProps> = ({
  isOpen,
  localities,
  loading,
  closeModal,
}) => {
  const setLocation = (locality: ILocalityEntity) => {
    console.log("locality", locality);
  };

  console.log("localities", localities);
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      {loading ? (
        <div className={css.loaderContainer}>
          <CircularProgress />
        </div>
      ) : localities && localities.length > 0 ? (
        <LocalitiesList localities={localities} setLocation={setLocation} />
      ) : (
        <p>Ничего не найдено</p>
      )}
    </Modal>
  );
};

export default Localities;
