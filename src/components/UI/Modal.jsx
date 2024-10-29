import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className="modal">
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
