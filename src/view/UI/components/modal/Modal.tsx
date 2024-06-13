import React, { useEffect } from "react";
import { useTelegram } from "../../hooks";

//styles
import css from "./styles.module.scss";

interface IProps {
  isOpen: boolean;
  children?: React.ReactNode;
  closeModal: () => void;
}

const Modal: React.FC<IProps> = ({ isOpen, children, closeModal }) => {
  const tg = useTelegram();

  const handleClose = () => {
    closeModal?.();
  };

  useEffect(() => {
    if (!tg) return;

    if (isOpen) {
      tg.BackButton.show();
      tg.BackButton.onClick(() => {
        closeModal?.();
        tg.BackButton.hide();
      });
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={css.modalOverlay} onClick={handleClose}>
          <div className={css.modal}>
            {children}
            <button onClick={handleClose}>закрыть</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
