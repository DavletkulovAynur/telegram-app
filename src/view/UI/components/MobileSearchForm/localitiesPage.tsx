import React from "react";
import css from "./styles.module.scss";

interface IProps {
  isOpen: boolean;
}
const LocalitiesPage: React.FC<IProps> = ({ isOpen }) => {
  console.log("isOpen", isOpen);
  // const [isOpenModal, setIsOpenModal] = useState(isOpen);

  const handleClose = () => {
    // setIsOpenModal(false);
    // onClose();
  };

  // const modalClass = isOpen ? `${css.modal} ${css.open}` : css.modal;

  return (
    <>
      {isOpen && (
        <div className={css.modalOverlay} onClick={handleClose}>
          <div className={css.modal}></div>
        </div>
      )}
    </>
  );
};

export default LocalitiesPage;
