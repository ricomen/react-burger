import { FC } from "react";
import overlayStyles from "./modal-overlay.module.css";

interface IProps {
  onClose: () => void
}
const ModalOverlay: FC<IProps> = ({onClose}) => {
  return <div onClick={onClose} className={overlayStyles.overlay} />;
};

export { ModalOverlay };
