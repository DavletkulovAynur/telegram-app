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
        <div className={css.modalOverlay}>
          <div className={css.modal}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
