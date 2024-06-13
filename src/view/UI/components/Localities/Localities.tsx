import React from "react";
import css from "./styles.module.scss";
import { ILocalityEntity } from "../../../../data/Locality";
// import { CircularProgress } from "@mui/material";

interface IProps {
  // label: string;
  isOpen: boolean;
  // closeInputLayer: () => void;
  // setLocation: (locality: ILocalityEntity) => void;
  // from: string | null;
  // searchLocality: (event: React.ChangeEvent<HTMLInputElement>) => void;
  localities: ILocalityEntity[] | null;
  // loading: boolean;
}

const Localities: React.FC<IProps> = ({ isOpen, localities }) => {
  console.log("isOpen", isOpen);

  const handleClose = () => {
    // setIsOpenModal(false);
    // onClose();
  };

  // const modalClass = isOpen ? `${css.modal} ${css.open}` : css.modal;

  console.log("localities", localities);
  return (
    <>
      {isOpen && (
        <div className={css.modalOverlay} onClick={handleClose}>
          <div className={css.modal}>
            {/* {loading ? (
              <div className={css.loaderContainer}>
                <CircularProgress />
              </div>
            ) : localities && localities.length > 0 ? (
              <LocalitiesList localities={localities}  />
            ) : (
              <p>Ничего не найдено</p>
            )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default Localities;
