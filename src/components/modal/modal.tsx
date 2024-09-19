import { FC, PropsWithChildren, useEffect } from "react";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";

interface IProps extends PropsWithChildren {
  onClose: () => void;
}

const Modal: FC<IProps> = ({ children, onClose }) => {
  
  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscapePress);
    return () => {
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, []);

  return (
    <>
      <ModalOverlay onClose={onClose} />
      <div className={modalStyles.modal} role="dialog">
        <button
          className={modalStyles.close}
          onClick={onClose}
          arial-label="Закрыть"
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>
  );
};

export { Modal };
